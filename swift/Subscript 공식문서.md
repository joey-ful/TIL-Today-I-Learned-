# Subscripts

Classes, structures, and enumerations can define subscripts, which are shortcuts for accessing the member elements of a collection, list, or sequence. You use subscripts to set and retrieve values by index without needing separate methods for setting and retrieval.

- 타입의 항목에 접근
- 하나의 타입에 여러 subscript 정의 가능

## Subscript Syntax

- `subscript` 를 정의할 때 최소 한개의 매개변수와 리턴값 정의 필요
    - 메서드와 연산 프로퍼티랑 비슷한 형태
- `read-write` or `read-only` 만 가능 ⇒ 실행할 수는 없다는 뜻인 것 같음
- 연산 프로퍼티처럼 getter, setter 활용

    ```swift
    subscript(index: Int) -> Int {
        get {
            // Return an appropriate subscript value here.
        }
        set(newValue) {
            // Perform a suitable setting action here.
        }
    }
    ```

    As with computed properties, you can choose not to specify the setter’s (newValue) parameter. A default parameter called newValue is provided to your setter if you don’t provide one yourself.

    - set의 매개변수 이름을 따로 명시하지 않으면 default로 `newValue` 라는 이름을 사용
        - `newValue` 의 타입은 subscript의 리턴 타입과 같음
- read-only 의 경우 다음과 같이 작성 가능

    ```swift
    subscript(index: Int) -> Int {
        // Return an appropriate subscript value here.
    }
    ```

- read-only 예시

    ```swift
    struct TimesTable {
        let multiplier: Int
        subscript(index: Int) -> Int {
            return multiplier * index
        }
    }
    let threeTimesTable = TimesTable(multiplier: 3)
    print("six times three is \(threeTimesTable[6])")
    // "six times three is 18"
    ```

    - `threeTimesTable`에 3과의 곱셈을 나타내는 인스턴스 생성 ⇒ `multiplyer: 3`
    - subscript 로 받은 index는 3과 곱한 결과를 리턴 ⇒ `3 x index`
        - 곱하기는 고정된 규칙을 따르기 때문에 setter 로 `newValue`를 지정할 필요가 없다

## Subscript Usage

- 클래스나 구조체의 기능에 따라 다르게 적용 가능
- 딕셔너리의 경우 key로 value에 접근하는 형태 ⇒ value를 set할 수 있음

    ```swift
    var numberOfLegs = ["spider": 8, "ant": 6, "cat": 4]
    numberOfLegs["bird"] = 2
    ```

    - 위과 같이 key를 `[]` 사이에 제공하고 거기에 저장할 값을 지정

## Subscript Options

### 특징

- subscript의 매개변수는 여러개일 수도 있다
- 매개변수의 타입이 다 다를 수도 있다
- 어떤 리턴 타입도 가능하다
- 다른 개수의 매개변수를 받을 수도 있다 ([Variadic Parameters](https://docs.swift.org/swift-book/LanguageGuide/Functions.html#ID171)) ⇒ varying number of parameters
- 매개변수에 기본 값을 주는 것도 가능 ([Default Parameter Values](https://docs.swift.org/swift-book/LanguageGuide/Functions.html#ID169))
- in-out 매개변수는 사용 불가 (I[n-Out Parameters](https://docs.swift.org/swift-book/LanguageGuide/Functions.html#ID173))

### Subscript Overloading

- 클래스나 구조체는 필요한 만큼의 subscript를 정의할 수 있다
- 이 경우 subscript가 사용되는 시점의 `[]` 사이의 값을 바탕으로 어떤 subscript를 사용할지 추론한다 ⇒ subscript overloading

### 예시 - Matrix 구조체

- subscript에 하나의 매개변수를 받는 것이 일반적이지만 여러개를 받아도 된다
- 다음 예시는 Double 값들의 2차 matrix
- subscript로 두 Int 매개변수를 받는다 `subscript(row: Int, column: Int)`

```swift
struct Matrix {
    let rows: Int, columns: Int
    var grid: [Double]
    init(rows: Int, columns: Int) {
        self.rows = rows
        self.columns = columns
        grid = Array(repeating: 0.0, count: rows * columns)
    }
    func indexIsValid(row: Int, column: Int) -> Bool {
        return row >= 0 && row < rows && column >= 0 && column < columns
    }
    subscript(row: Int, column: Int) -> Double {
        get {
            assert(indexIsValid(row: row, column: column), "Index out of range")
            return grid[(row * columns) + column]
        }
        set {
            assert(indexIsValid(row: row, column: column), "Index out of range")
            grid[(row * columns) + column] = newValue
        }
    }
}
```

- `init()`은 `rows`와 `columns` 두 매개변수를 받아 `rows * columns` 크기의 Double 배열을 생성
- 2 * 2 매트릭스 생성 예시

    ```swift
    var matrix = Matrix(rows: 2, columns: 2)
    ```

    ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5d89bac3-4a22-49a6-8a17-24ad57919721/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5d89bac3-4a22-49a6-8a17-24ad57919721/Untitled.png)

- 매트릭스에 subscript로 값 추가 `subscript(row: Int, column: Int)`

    ```swift
    matrix[0, 1] = 1.5
    matrix[1, 0] = 3.2
    ```

    ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/96cf04e8-0964-4394-9538-b32b3b6765ef/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/96cf04e8-0964-4394-9538-b32b3b6765ef/Untitled.png)

- subscript의 getter와 setter에서 `indexIsValid()` 로 row와 column 이 유효한 값인지 체크

    ```swift
    let someValue = matrix[2, 2]
    // This triggers an assert, because [2, 2] is outside of the matrix bounds.
    ```

## Type Subscript

- 타입 자체의 subscript도 정의 가능 ⇒ type subscript
- static 으로 지정

```swift
enum Planet: Int {
    case mercury = 1, venus, earth, mars, jupiter, saturn, uranus, neptune
    static subscript(n: Int) -> Planet {
        return Planet(rawValue: n)!
    }
}
let mars = Planet[4]
print(mars)
```
