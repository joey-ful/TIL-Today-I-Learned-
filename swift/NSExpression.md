- [NSExpression](https://developer.apple.com/documentation/foundation/nsexpression), [expressionValue()](https://developer.apple.com/documentation/foundation/nsexpression/1410363-expressionvalue)

    - 문자열로 된 수식을 계산하기 위해 `NSExpression()` 과 `expressionValue()` 를 활용할 수 있다
    - JavaScript의 `eval()` 과 비슷한 역할을 하는 것 같다
    - 다만 가독성이 좀 떨어지는 것 같다

    ```swift
    let equation = "1+2"
    let expression = NSExpression(format: equation)
    guard let operationResult = expression.expressionValue(
            with: nil, context: nil
    ) as? Double else {
        return
    }
    print(operationResult)
    // 3.0
    ```
