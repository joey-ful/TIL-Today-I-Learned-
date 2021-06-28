## [Synthesized Comparable conformance for simple enum types](https://github.com/kelvin13/swift-evolution/blob/patch-5/proposals/0000-synthesized-comparable-for-enumerations.md)
- enum이 rawValue와 rawValue를 지정하지 않은 채 Comparable 프로토콜을 따르게 하면 case 끼리 비교할 수 있다.
    - rawValue가 있거나 이미 비교연산자 오버로딩을 하는 등의 열거형에는 적용 안됨
- 첫 케이스가 가장 작고 마지막 케이스가 가장 크다
- `case plus, minus` 라고 해도 plus 가 minus보다 작게 나와서 좀 아쉽다

```swift
enum Operator: Comparable {
    case plus, minus
    case multiply, divide
}

Operator.plus > Operator.multiply
// false
Operator.minus > Operator.plus
// true
```
