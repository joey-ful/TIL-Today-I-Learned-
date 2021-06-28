# Generics

Generic code enables you to write flexible, reusable functions and types that can work with any type, subject to requirements that you define. You can write code that avoids duplication and expresses its intent in a clear, abstracted manner.

- Array나 Dictionary는 generic collections

## The Problem That Generics Solve

- 두 변수의 값을 swap하는 함수를 타입마다 구현

```swift
func swapTwoInts(_ a: inout Int, _ b: inout Int) {
    let temporaryA = a
    a = b
    b = temporaryA
}

func swapTwoStrings(_ a: inout String, _ b: inout String) {
    let temporaryA = a
    a = b
    b = temporaryA
}

func swapTwoDoubles(_ a: inout Double, _ b: inout Double) {
    let temporaryA = a
    a = b
    b = temporaryA
}
```

## Generic Functions

- Generic Function을 쓰면 함수 하나로 재사용 가능
    - 여기서 swap할 두 변수는 동일한 타입이어야함
    - 특정 타입의 변수에 다른 타입을 지정하려고 하면 compile-time 에러가 발생하기 때문

```swift
func swapTwoValues<T>(_ a: inout T, _ b: inout T) {
    let temporaryA = a
    a = b
    b = temporaryA
}

var tomAge = 58
var bobAge = 140
swapTwoValues(&tomAge, &bobAge)
print(tomAge, bobAge)
// 140, 58

var tomName = "Tom"
var bobName = "Bob"
swapTwoValues(&tomName, &bobName)
print(tomName, bobName)
// Bob, Tom
```

- `placeholder type name T`

    The generic version of the function uses a placeholder type name (called T, in this case) instead of an actual type name (such as Int, String, or Double).

    - placeholder에 `actual type` 대신 `T` 를 입력
    - `placeholder` 는 현재 scope에서 타입이 정해지기 전까지 type name을 대신한다
- T에 들어갈 타입은 `swapTwoValues()` 가 호출될 때 정해짐

## Type Parameters

- `type parameter`는 `placeholder type` 과 그 이름을 지정
- 함수 이름 바로 뒤의 <> 사이에 표기
- 함수의 매개변수 타입, 함수의 리턴 타입, 함수 내 타입어노테이션에 사용된다
    - 함수가 호출되면 `actual type` 으로 교체된다
- comma로 한 번에 여러 타입 파라미터 표기 가능 e.g. <T, U>

## Naming Type Parameters

In most cases, type parameters have descriptive names, such as Key and Value in Dictionary<Key, Value> and Element in Array<Element>, which tells the reader about the relationship between the type parameter and the generic type or function it’s used in.

- 딕셔너리나 배열의 정의를 보면 Dictionary<Key, Value>, Array<Element> 처럼 `type parameter` 와 `generic type` 과의 관계를 설명해주는 `type parameter`이름을 가짐
- 그런 관계가 없는 경우 대문자 알파벳으로 표기하는 것이 관례 T, U, V
- 값이 아니라 type의 placeholder라는 것을 알리기 위해 upper camel case name 사용

## Generic Types

- generic 함수 외에도 generic type을 직접 구현할 수 있음
- 어떤 타입과도 사용할 수 있도록 만든 사용자 정의 class, structures, enumerations
- 아래 내용은 generic collection인 Stack 타입 만들어보기 (LIFO: Last-In, First-Out)

### Stack 만들어보기

```swift
struct IntStack {
    var items: [Int] = []
    mutating func push(_ item: Int) {
        items.append(item)
    }
    mutating func pop() -> Int {
        return items.removeLast()
    }
}
```

- 위는 Int를 담을 nongeneric 스택, 아래는 generic 스택
    - `type parameter` 가 `Element` 로 바뀐 것 외에는 똑같음

```swift
struct Stack<Element> {
    var items: [Element] = []
    mutating func push(_ item: Element) {
        items.append(item)
    }
    mutating func pop() -> Element {
        return items.removeLast()
    }
}
```

Element defines a placeholder name for a type to be provided later. This future type can be referred to as Element anywhere within the structure’s definition.

- 위의 generic 타입 스택에서 `Element`는 다음 세 가지 경우에 placeholder로 사용됨
    - `items` 프로퍼티를 생성할 때 `Element` 타입 항목을 담을 빈 배열로 초기화
    - `push(_:)` 메서드의 매개변수가 `Element` 타입인 `item` 임을 명시할 때
    - `pop()` 메서드의 리턴값이 `Element` 타입임을 명시할 때
- 위 stack은 어떤 타입이든 저장할 수 있음

```swift
var stackOfStrings = Stack<String>()
stackOfStrings.push("uno")
stackOfStrings.push("dos")
stackOfStrings.push("tres")
stackOfStrings.push("cuatro")

let fromTheTop = stackOfStrings.pop()
print(fromTheTop)
// cuatro
```

### Extending a Generic Type

- extension은 original type 정의의 type parameter를 사용하기 때문에 별도로 type parameter를 지정하지 않음
    - Element 를 그대로 활용

    ```swift
    extension Stack {
        var topItem: Element? {
            return items.isEmpty ? nil : items[items.count - 1]
        }
    }
    ```

- 인스턴스 타입이 extension에서 구현한 새 기능을 갖기 위해 꼭 따라야하는 requirement를 추가할 수 있다 ⇒ **Extensions with a Generic Where Clause** (조건을 만족하는 타입에만 적용되는 확장)
    - 밑에서 다룰 내용
    - 코드 예시

        ```swift
        extension Stack where Element: Equatable {
            func isTop(_ item: Element) -> Bool {
                guard let topItem = items.last else {
                    return false
                }
                return topItem == item
            }
        }
        ```

## Type Constraints

- 위의 `swapTwoValues(_*:_*:)` 과 Stack 타입은 어떤 타입도 받을 수 있지만 가끔은 타입을 제한하는 것이 좋을 수도 있음
- type parameter가 특정 클래스를 상속받아야하거나 특정 protocol/protocol composition 을 채택하도록 제한을 할 수 있음 ⇒ type constraints
    - ex. 딕셔너리의 key의 타입은 hashable 해야하기 때문에 Hashable 프로토콜을 채택
        - 그 자체로 유일하게 표현이 가능한 방법을 제공해야함
        - 같은 타입의 인스턴스 a와 b가 `a == b` 를 만족한다면 `a.hashValue == b.hashValue` 를 만족
            - Hashable 코드 예시

                ```swift
                struct GridPoint {
                    var x: Int
                    var y: Int
                }

                extension GridPoint: Hashable {
                    static func == (lhs: GridPoint, rhs: GridPoint) -> Bool {
                        return lhs.x == rhs.x && lhs.y == rhs.y
                    }

                    func hash(into hasher: inout Hasher) {
                        hasher.combine(x)
                        hasher.combine(y)
                    }
                }

                /// ex 1)
                var a = GridPoint(x: 2, y: 3)
                var b = GridPoint(x: 4, y: 1)
                var c = GridPoint(x: 2, y: 3)
                a == b
                // false
                a == c
                // true

                /// ex 2)
                var tappedPoints: Set = [GridPoint(x: 2, y: 3), GridPoint(x: 4, y: 1)]
                let nextTap = GridPoint(x: 0, y: 1)
                if tappedPoints.contains(nextTap) {
                    print("Already tapped at (\(nextTap.x), \(nextTap.y)).")
                } else {
                    tappedPoints.insert(nextTap)
                    print("New tap detected at (\(nextTap.x), \(nextTap.y)).")
                }
                // Prints "New tap detected at (0, 1).")
                ```

### Type Constraint Syntax

- parameter name 뒤에 프로토콜 constraint를 명시

```swift
func someFunction<T: SomeClass, U: SomeProtocol>(someT: T, someU: U) {
    // function body goes here
}
```

- T가 SomeClass를 상속받도록 함
- U가 SomeProtocol을 채택하도록 함

### Type Constraints in Action

```swift
func findIndex(ofString valueToFind: String, in array: [String]) -> Int? {
    for (index, value) in array.enumerated() {
        if value == valueToFind {
            return index
        }
    }
    return nil
}
```

- 위 함수는 String이 배열의 몇 번째 index에 위치하는지 리턴해주는 nongeneric 함수
- 하지만 위 기능은 String 외에도 유용한 함수라 generic으로 만들 수 있다

```swift
func findIndex<T>(of valueToFind: T, in array:[T]) -> Int? {
    for (index, value) in array.enumerated() {
        if value == valueToFind {
            return index
        }
    }
    return nil
}
```

- 하지만 generic으로 바꾸면 `if value == valueToFind` 부분 때문에 컴파일이 되지 않음
- Swift의 모든 타입이 `equal operator (==)` 로 비교가능하지는 않음
    - 구조체나 클래스의 경우 `==` 가 무엇을 뜻하는지 Swift가 추측할 수 없음
- `Equatable` 프로토콜을 채택해 `==` 와 `!=` 연산자가 적용될 수 있는 타입만 받도록 해결

```swift
func findIndex<T: Equatable>(of valueToFind: T, in array:[T]) -> Int? {
    for (index, value) in array.enumerated() {
        if value == valueToFind {
            return index
        }
    }
    return nil
}

let doubleIndex = findIndex(of: 9.3, in: [3.14159, 0.1, 0.25])
// nil
let stringIndex = findIndex(of: "Andrea", in: ["Mike", "Malcolm", "Andrea"])
// 2
```

## Associated Types

- 프로토콜을 정의할 때 associated type도 함께 정의하는 것이 유용할 때도 있음
- Associated type 은 프로토콜의 일부로 사용되는 타입에게 placeholder name을 제공
- 프로토콜이 채택되기 전까지 associated type 의 실제 타입은 명시되지 않음
- `associatedtype` 키워드로 명시

### Associated Types in Action

- 아래는 `Item` 이라는 `associated type`을 선언한 `Container` 프로토콜
- `Container` 프로토콜은 세가지를 만족해야 한다
    - `append(_:)` 메서드로 컨테이너에 아이템을 추가할 수 있어야함
    - `count` 프로퍼티로 아이템의 개수에 접근해 Int값을 리턴할 수 있어야함
    - Int 타입을 인덱스로 받는 subscript 를 통해 아이템의 각 항목을 볼 수 있어야함

```swift
protocol Container {
    associatedtype Item
    mutating func append(_ item: Item)
    var count: Int { get }
    subscript(i: Int) -> Item { get }
}
```

- 하지만 이 프로토콜은 아이템들이 **어떤 타입**으로 **어디에 저장**되는지 명시하지 않는다
    - `Container` 프로토콜을 준수하는 타입은 **저장할 타입을 명시**해야하며 해당 타입만 저장하고 해당 타입만 subscript로 접근할 수 있어야 한다
- `Container` 프로토콜은 컨테이너가 어떤 타입의 항목들을 저장할지는 모르지만 저장할 타입을 지칭할 방법이 필요하다
    - `append(_:)` 메서드가 항상 같은 타입만 매개변수로 받고 subscript로 리턴되는 값 또한 동일한 타입이도록 명시해야 한다
    - 이를 위해 `Container` 는 `Item` 이라는 **associated type** 을 선언해 활용한다
    - **associated type** 은 `Container` 를 준수하는 타입이 제공해야할 타입

```swift
struct IntStack: Container {
    // ⬇ original IntStack implementation
    var items: [Int] = []
    mutating func push(_ item: Int) {
        items.append(item)
    }
    mutating func pop() -> Int {
        return items.removeLast()
    }

    // ⬇ conformance to the Container protocol
    typealias Item = Int
    mutating func append(_ item: Int) {
        self.push(item)
    }
    var count: Int {
        return items.count
    }
    subscript(i: Int) -> Int {
        return items[i]
    }
}
```

- IntStack 타입은 `Container` 프로토콜을 따르기 때문에 요구사항인 `append(_:)`, `count`, subcript 를 구현
- 그리고 `typealias Item = Int` 로 연관타입을 명시해 추상적인 타입을 구체적인 타입으로 변환
    - 사실 type inference 덕분에 `append(_:)` 의 아이템 매개변수의 타입 등만 보고도 Swift는 `Item` 이 Int 타입임을 알 수 있음
    - 따라서 `typealias Item = Int` 코드를 지워도 정상 작동됨
    - 물론 그대로 놔두고 Int를 모두 `Item`으로 바꿔도 정상 작동됨

```swift
struct Stack<Element>: Container {
    // ⬇ original Stack<Element> implementation
    var items: [Element] = []
    mutating func push(_ item: Element) {
        items.append(item)
    }
    mutating func pop() -> Element {
        return items.removeLast()
    }

    // ⬇ conformance to the Container protocol
    mutating func append(_ item: Element) {
        self.push(item)
    }
    var count: Int {
        return items.count
    }
    subscript(i: Int) -> Element {
        return items[i]
    }
}
```

- generic 타입으로 만들 수도 있음
    - 여기는 typealias 코드가 제거된 버전

### Extending an Existing Type to Specify an Associated Type

- 기존 타입이 위 `Container` 프로토콜을 준수하도록 해 **associated type**을 가지도록 할 수 있음
- Swift의 Array 타입은 이미 `append(_:)` , `count` 그리고 **subscript** 기능이 있기 때문에 `Container` 를 채택한다고만 명시하면 됨

    ```swift
    extension Array: Container {}
    ```

### Adding Constraints to an Associated Type

- associated type 에 type constrains를 추가할 수 있음

```swift
protocol Container {
    associatedtype Item: Equatable
    mutating func append(_ item: Item)
    var count: Int { get }
    subscript(i: Int) -> Item { get }
}
```

- `Item` 연관타입이 `Equatable` 프로토콜을 따르는 **type constraint**

### Using a Protocol in Its Associated Type’s Constraints

- 프로토콜은 자기 자신의 요구 사항에 나타날 수 있다

```swift
protocol SuffixableContainer: Container {
    associatedtype Suffix: SuffixableContainer where Suffix.Item == Item
    func suffix(_ size: Int) -> Suffix
}
```

- `Suffix` 는 **associated type** 며 두 **contraints** 가 있다
    1. `SuffixableContainer` 를 준수해야 한다 (지금 정의되고 있는 그 프로토콜)
    2. `Suffix`의 `Item` 타입이 컨테이너의 `Item` 타입과 같아야한다 
        - `Suffix`의 `Item` 타입 ⇒ `suffix(_:)` 메서드의 리턴값
            - `Suffix`가 사용된 곳

                ```swift
                func suffix(_ size: Int) -> Suffix
                ```

        - 컨테이너의 `Item` 타입 ⇒ `append(_:)` 메서드의 매개변수와 subscript의 리턴값
            - `Item`이 사용된 곳

                ```swift
                mutating func append(_ item: Item)
                subscript(i: Int) -> Item { get }
                ```

```swift
extension Stack: SuffixableContainer {
    func suffix(_ size: Int) -> Stack {
        var result = Stack()
        for index in (count-size)..<count {
            result.append(self[index])
        }
        return result
    }
}
var stackOfInts = Stack<Int>()
stackOfInts.append(10)
stackOfInts.append(20)
stackOfInts.append(30)
let suffix = stackOfInts.suffix(2)
// suffix contains 20 and 30
```

- 위는 **extension**을 통해 `Stack`타입이 `SuffixableContainer` 를 준수하도록 하는 것
    - `Suffix` **associated type**은 타입 추론에 의해  `Stack` 타입이다
        - `suffix(_:)` 메서드의 리턴값을 보고 추론
    - `Stack`은 `SuffixableContainer` 프로토콜을 따르고 `Stack` 의 `Item`은 `Stack` 의 `Item`
- 하지만 `SuffixableContainer` 를 준수하는 타입은 자신과 다른 `Suffix` 타입을 가질 수 있다
    - `suffix(_:)` 메서드의 리턴값이 자기 자신과 다른 타입일 수 있다는 것

```swift
extension IntStack: SuffixableContainer {
    func suffix(_ size: Int) -> Stack<Int> {
        var result = Stack<Int>()
        for index in (count-size)..<count {
            result.append(self[index])
        }
        return result
    }
    // Inferred that Suffix is Stack<Int>.
}
```

- `IntStack` 타입은 자신의 `Suffix` 타입으로 `Stack<Int>` 타입을 갖는다
    - `suffix(_:)` 메서드의 리턴값을 보고 추론
- `IntStack` 타입은 `SuffixableContainer` 프로토콜을 준수한다
    - `Suffix` 인 `Stack<Int>` 타입은 `SuffixableContainer` 를 준수한다
    - `Stack<Int>`의 `Item` 타입과 `IntStack` 의 `Item` 타입은 Int로 같다

## Generic Where Clauses

- **Type constraints** 는 generic 함수, subscript, 타입과 관련된 **type parameter**의 요구 사항을 명시할 수 있게 해준다 ⇒ 조건을 걸어 제한을 두게 해줌
    - **associated type** 에 조건을 거는 것도 유용한데 이 때 **generic where clause** 를 활용한다

A generic where clause enables you to require that an associated type must conform to a certain protocol, or that certain type parameters and associated types must be the same.

- **generic where clause** 는 **associated type**이 특정 프로토콜을 준수하도록 혹은 특정 **type parameter**와 **associated type**이 같도록 요구할 수 있다

### 표기법

- 타입이나 함수의 바디가 시작하는 `{` 직전에 작성한다
- `where` 키워드로 시작하고 다음이 뒤를 잇는다:
    - **associated type**에 대한 constraints
    - 타입과 **associated type**의 equality relationship

### 예시

- `allItemsMatch()`는 두 컨테이너 인스턴스가 같은 아이템을 같은 순서로 갖고 있는지 확인하는 함수

    ```swift
    func allItemsMatch<C1: Container, C2: Container>
        (_ someContainer: C1, _ anotherContainer: C2) -> Bool
        where C1.Item == C2.Item, C1.Item: Equatable {

            // Check that both containers contain the same number of items.
            if someContainer.count != anotherContainer.count {
                return false
            }

            // Check each pair of items to see if they're equivalent.
            for i in 0..<someContainer.count {
                if someContainer[i] != anotherContainer[i] {
                    return false
                }
            }

            // All items match, so return true.
            return true
    }
    ```

    - 비교할 두 컨테이너는 같은 타입일 필요가 없지만 모두 같은 아이템 타입을 가져야 한다
        - `C1`, `C2` 로 받으니까 달라도 됨 ⇒ **type constraints**
        - 각각의 `Item` 이 같아야함을 명시 ⇒ **generic where clause**
    - `allItemsMatch()` 함수 매개변수의 요구사항은 다음과 같다
        - `C1` 은 `Container` 프로토콜을 준수
        - `C2` 는 `Container` 프로토콜을 준수
        - `C1` 의 `Item` 은 `C2` 의 `Item` 과 같아야함
        - `C1` 의 `Item` 은 `Equatable` 프로토콜을 준수 ⇒ `C2` 의 `Item` 도 `Equatable` 프로토콜을 준수, 즉 아이템들이 `==` 혹은 `!=` 로 비교 가능해야함을 뜻한다
- 위 요구사항에 의해 `allItemsMatch()`는 서로 다른 타입의 컨테이너도 비교할 수 있다

    ```swift
    var stackOfStrings = Stack<String>()
    stackOfStrings.push("uno")
    stackOfStrings.push("dos")
    stackOfStrings.push("tres")

    var arrayOfStrings = ["uno", "dos", "tres"]

    if allItemsMatch(stackOfStrings, arrayOfStrings) {
        print("All items match.")
    } else {
        print("Not all items match.")
    }
    // Prints "All items match."
    ```

    - `Stack<String>` 타입과 `String` 타입은 다르지만 `allItemsMatch()`에 의해 비교가 가능

## Extensions with a Generic Where Clause

- **generic where clause** 를 **extension**에 작성할 수도 있다
- `isTop(_:)` 메서드는 매개변수로 받은 값과 아이템의 마지막 항목이 같은지 확인한다

    ```swift
    extension Stack where Element: Equatable {
        func isTop(_ item: Element) -> Bool {
            guard let topItem = items.last else {
                return false
            }
            return topItem == item
        }
    }
    ```

- 하지만 `Stack` 타입에는 정의되어 있지 않은 `==` 연산을 `isTop(_:)` 메서드가 사용하기 때문에 compile-time 에러가 발생한다

    ```swift
    struct NotEquatable { }
    var notEquatableStack = Stack<NotEquatable>()
    let notEquatableValue = NotEquatable()
    notEquatableStack.push(notEquatableValue)
    notEquatableStack.isTop(notEquatableValue)  // Error
    ```

- 이를 방지하기 위해 **generic where clause**로 아이템이 `Equatable` 할 때만 `isTop(_:)` 메서드를 추가하도록 확장할 수 있다

    ```swift
    var stackOfStrings = Stack<String>()
    stackOfStrings.push("uno")
    stackOfStrings.push("dos")
    stackOfStrings.push("tres")

    if stackOfStrings.isTop("tres") {
        print("Top element is tres.")
    } else {
        print("Top element is something else.")
    }
    // Prints "Top element is tres."
    ```

- **generic where clause** 로 프로토콜을 확장시킬 수도 있다
    - 프로토콜과 타입 모두 확장 가능

    ```swift
    extension Container where Item: Equatable {
        func startsWith(_ item: Item) -> Bool {
            return count >= 1 && self[0] == item
        }
    }
    ```

- `Container` 를 준수하는 모든 타입은 컨테이너의 아이템이 equatable하기만 하면 `startsWith(_:)` 메서드를 사용할 수 있다

    ```swift
    if [9, 9, 9].startsWith(42) {
        print("Starts with 42.")
    } else {
        print("Starts with something else.")
    }
    // Prints "Starts with something else."
    ```

- 위에서는 `Item` 이 특정 프로토콜을 따르도록 제한했지만 `Item` 이 특정 타입이도록 제한할 수도 있다

    ```swift
    extension Container where Item == Double {
        func average() -> Double {
            var sum = 0.0
            for index in 0..<count {
                sum += self[index]
            }
            return sum / Double(count)
        }
    }
    print([1260.0, 1200.0, 98.6, 37.0].average())
    // Prints "648.9"
    ```

- 일반 **generic where clause**처럼 **extension**의 **generic where clause**에도  여러 요구 사항을 추가할 수 있다
    - `,` 로 분리해서 표기하면 됨

## Contextual Where Clauses

You can write a generic where clause as part of a declaration that doesn’t have its own generic type constraints, when you’re already working in the context of generic types. For example, you can write a generic where clause on a subscript of a generic type or on a method in an extension to a generic type.

- 자신의 generic type constraints를 가지지 않은 선언에 **generic where clause**를 사용할 수 있다
    - 이미 generic type 환경에서 작업하고 있는 경우
    - ex. generic type의 subscript에 작성
    - ex. generic type의 extension 내부 메서드에 작성
- 아래 두 메서드는 각각 **generic where clause**를 통해 `Item` 타입에 type constraints를 추가한다
    - `Item`이 Int면 `average()` 메서드, `Item`이 equatable하면 `endsWith()` 메서드를 추가

    ```swift
    extension Container {
        func average() -> Double where Item == Int {
            var sum = 0.0
            for index in 0..<count {
                sum += Double(self[index])
            }
            return sum / Double(count)
        }
        func endsWith(_ item: Item) -> Bool where Item: Equatable {
            return count >= 1 && self[count-1] == item
        }
    }
    let numbers = [1260, 1200, 98, 37]
    print(numbers.average())
    // Prints "648.75"
    print(numbers.endsWith(37))
    // Prints "true"
    ```

- **contextual where clause** 를 사용하고 싶지 않다면 아래처럼 작성할 수도 있다

    ```swift
    extension Container where Item == Int {
        func average() -> Double {
            var sum = 0.0
            for index in 0..<count {
                sum += Double(self[index])
            }
            return sum / Double(count)
        }
    }
    extension Container where Item: Equatable {
        func endsWith(_ item: Item) -> Bool {
            return count >= 1 && self[count-1] == item
        }
    }
    ```

    - 메서드의 **generic where clause**를 **extension**의 **generic where clause**로 옮기면서 두 **extension**으로 분리된다
    - 기능은 똑같다

## Associated Types with a Generic Where Clause

- **associated type**에도 **generic where clause**를 추가해 제한을 둘 수 있음
- iterator를 가진 `Container` 를 만들고 싶을 때
    - `Sequence` 프로토콜이 사용하는 것과 같은

    ```swift
    protocol Container {
        associatedtype Item
        mutating func append(_ item: Item)
        var count: Int { get }
        subscript(i: Int) -> Item { get }

        associatedtype Iterator: IteratorProtocol where Iterator.Element == Item
        func makeIterator() -> Iterator
    }
    ```

    The generic where clause on Iterator requires that the iterator must traverse over elements of the same item type as the container’s items, regardless of the iterator’s type.

    - `Iterator` **associated type**의 **generic where clause**는 iterator가 iterator의 타입과 상관없이 `Iterator` 의 `Element` 가 `Item` 과 같기를 요구한다
    - `makeIterator()` 메서드가 컨테이너의 iterator에 접근할 수 있도록 해준다
- **generic where clause**를 프로토콜 선언에 추가해 상속받은 **associated type**에 constraint를 줄 수도 있다

    For a protocol that inherits from another protocol, you add a constraint to an inherited associated type by including the generic where clause in the protocol declaration.

    ```swift
    protocol ComparableContainer: Container where Item: Comparable { }
    ```

    - `ComparableContainer` 프로토콜은 `Container` 를 준수한다
    - 따라서 `Item` 이라는 associated type을 상속받는다
    - 이 상속받은 `Item` 이 `Comparable` 프로토콜을 준수하도록 type constraint를 줬다

## Generic Subscripts

- subscript도 generic이 될 수 있으며 **generic where 절**로 조건을 걸 수 있다
    - **placeholder type name**을 subscript 키워드 뒤에 `<>` 사이에 작성
    - **generic where clause**를 subscript의 바디의 `{` 직전에 작성
- 다음 subscript 는 indices를 받아 각 index에 해당하는 값을 담은 배열을 반환한다

    ```swift
    extension Container {
        subscript<Indices: Sequence>(indices: Indices) -> [Item]
            where Indices.Iterator.Element == Int {
                var result: [Item] = []
                for index in indices {
                    result.append(self[index])
                }
                return result
        }
    }
    ```

    - 위의 generic subscript는 다음 제약사항을 갖는다
        - `Indices` 라는 generic 매개변수는 `Sequence` 프로토콜을 준수해야한다
        - subscript 매개변수 `indices` 는 `Indices` 타입의 인스턴스다
        - subscript의 iterator가 Int 타입 항목들에 대해 iterate한다
