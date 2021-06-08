# 활동학습

- 값이 바뀔 가능성이 있는지 잘 모르겠으면 일단 let으로 선언할 것 (메모리 최적화, 등)
- 객체 vs 인스턴스 => 인스턴스는 타입이 실체화된 것
- 타입의 기본 접근 수준은 internal (private, file private, internal, public 등)
- 스위프트의 기본 실수타입은 Double

---

### MVC 아키텍처, 디자인패턴

- 아키텍처 - 구성, 역할을 나누는 방법론
    - 조직 단위에서 큰 역할을 나누는 것
- 디자인 패턴 - 구성원들끼리 어떻게 일처리를 할지에 대한 방법론
    - 일처리를 더 효율적으로 하기 위해 만든 업무의 패턴, 일처리에 관한 설계, 매뉴얼

### MVC

- 서로 결합도를 낮추고 상관관계를 줄여서 서로 몰라도 일이 가능하게 해야 유지보수가 쉽다
    - 동작의 안정성
    - 코드가 분리되면 문제 파악이 쉽다
- 역할
    - 모델 - 데이터를 원하는 모양으로 저장
    - 뷰 - 보여지는 것 모두 다
    - 컨트롤러 - 모델이 바뀌면 뷰에 반영하고 뷰에서 데이터를 바꾸면 모델에 반영하는 중간다리 역할

---

# Swift 공식문서

## [Initialization](https://docs.swift.org/swift-book/LanguageGuide/Initialization.html)

- class, structure, enumeration을 사용하기 위해 인스턴스를 만드는 과정
    - Initializer라는 특수한 메서드가 인스턴스 생성 및 초기화를 위해 호출됨
    - Stored property의 초기값의 저장 등 사용 전 세팅
    - deinitializer는 인스턴스가 해제되기 전 cleanup을 수행하기 위해 사용됨 ([링크](https://docs.swift.org/swift-book/LanguageGuide/Deinitialization.html))

### Default initializer

- 프로퍼티를 선언과 동시에 초기화하면 해당 값으로 초기화 됨

### Memberwise initializer

- class와 다르게 struct는 외부에서 값을 받아서 초기화가 필요한 경우 initializer를 만들지 않아도 됨
- memberwise initializer를 알아서 만들어주기때문

아직 다 못 봄

## [Type Casting](https://docs.swift.org/swift-book/LanguageGuide/TypeCasting.html)

### `is` - Checking Type

- 인스턴스가 특정한 타입이 맞는지 확인하는 것

```swift
for item in library {
    if item is Movie {
        movieCount += 1
    } else if item is Song {
        songCount += 1
    }
}
```
[code source](https://docs.swift.org/swift-book/LanguageGuide/TypeCasting.html)

- MediaItem 클래스를 상속해 Movie와 Song이라는 자식 클래스를 생성
- Movie와 Song 인스턴스를 만들어 배열에 담으면 특이하게도 부모인 MediaItem 타입이라 한다
- type check operator `is` 로 Movie나 Song `subclass`가 맞는지 확인할 수 있다

### `as` - DownCasting

- 자식 클래스의 인스턴스로 변환해 사용하는 것
- 다운캐스팅은 type cast operator `as?` 혹은 `as!`로 한다
    - 부모가 자식 클래스의 속성을 갖고 있지 않을 수 있으니 다운캐스팅에 실패할 가능성이 있어 옵셔널 처리

```swift
for item in library {
    if let movie = item as? Movie {
        print("Movie: \\(movie.name), dir. \\(movie.director)")
    } else if let song = item as? Song {
        print("Song: \\(song.name), by \\(song.artist)")
    }
}
```
[code source](https://docs.swift.org/swift-book/LanguageGuide/TypeCasting.html)

- library에는 Movie나 Song의 인스턴스들이 담겨있다. 하지만 타입은 그들의 부모인 MediaItem
- library내 MediaItem 인스턴스들을 Movie나 Song으로 다운캐스팅 한다

### Type Casting for [`Any and AnyObject`](https://docs.swift.org/swift-book/ReferenceManual/Types.html#ID629)

- `Any` 함수 타입을 포함한 모든 타입의 인스턴스
- `AnyObject` 클래스 타입 인스턴스
- 위 두 형태에도 `is` 나 `as` 를 사용해서 타입을 확인할 수 있다

## [Nested Types](https://docs.swift.org/swift-book/LanguageGuide/NestedTypes.html)

- 타입 안에 타입을 담는 것
- 이건 개념공부보다는 실습이 나은듯

## [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html)

- 에러 처리는 다음 두 가지를 하는 과정
    - 에러가 발생한 이유를 알 수 있게 에러를 throw
    - error에 대해 사용자에게 알리거나 error 해결
- 에러는`Error` 프로토콜을 따르는 enum에 associated value를 사용해 저장

```swift
enum VendingMachineError: Error {
    case invalidSelection
    case insufficientFunds(coinsNeeded: Int)
    case outOfStock
}
```
[code source](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html#ID509

### Throwing Functions

- **함수로 에러 처리**
- 에러를 던지는 함수는 `throws`를 표기

```swift
func canThrowErrors() throws -> String

func cannotThrowErrors() -> String
```

- guard let의 else에서 에러를 던진다

```swift
func vend(itemNamed name: String) throws {
        guard let item = inventory[name] else {
            throw VendingMachineError.invalidSelection
        }

        guard item.count > 0 else {
            throw VendingMachineError.outOfStock
        }

        guard item.price <= coinsDeposited else {
            throw VendingMachineError.insufficientFunds(coinsNeeded: item.price - coinsDeposited)
        }

        // 에러가 없을 때 진행할 코드
    }
```
[code source](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html#ID509)

### Do-Catch

- **블록 구문으로 에러 처리**
- do 에서 try로 코드를 실행
- 에러가 발생하면 catch에서 에러별로 취할 행동 정의

```swift
do {
    try 코드
    print("Success!")
} catch ErrorEnum.error1 {
    print("error 1")
} catch ErrorEnum.error2 {
    print("error 2")
} catch ErrorEnum.error3 {
    print("error 3")
} catch {
    print("Unexpected error: \\(error).")
}
```

### Optional Value Error

- **간결하게 에러를 처리**할 수 있다

```swift
let x = try? throwingFunction()
```

- **같은 일을 여러가지 방법으로 시도할 경우 각기 다른 에러처리**를 하는 throwing function을 호출
    - 데이터를 가져오는 작업을 디스크에서 시도해보고 서버에서도 해보고 그래도 실패하면 데이터는 nil

```swift
func fetchData() -> Data? {
    if let data = try? fetchDataFromDisk() { return data }
    if let data = try? fetchDataFromServer() { return data }
    return nil
}
```
[code source](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html#ID512)

# 문제점 / 고민한 점

- 클래스 타입이란 무엇일까? 클래스만 클래스 타입인가? 전에 클로저랑 클래스가 참조 타입이라고 들었는데 이것이 클래스 타입과 같은 의미라면 클로저도 클래스 타입인건가;
- 클래스 타입은 하나의 부모클래스 superclass로부터 상속을 받을 수 있고 여러 프로토콜을 따를 수 있다 [출처](https://docs.swift.org/swift-book/ReferenceManual/Types.html#ID456)

# 다음 학습 계획

- Initialization 마저 읽기
- Access Control 읽기
- Closure에서 escaping과 nonescaping 이 동기 비동기같던데 확인해보기
- 스위프트의 타입 - 참조타입 vs 값타입, 클래스타입, 클로저는 무슨 타입
