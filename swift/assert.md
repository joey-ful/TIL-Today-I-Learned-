### `[assert()](https://docs.swift.org/swift-book/LanguageGuide/TheBasics.html#ID335)`

- 디버깅 모드에서만 동작하는 조건 검증 함수
    - 실제 배포환경에서는 `precondition()` 활용
    - `precondition()` 은 `false` 의 가능성이 있긴 하지만 `true` 여야만 하는 경우 사용
- `true` / `false` 조건문과 `false`시 반환할 메시지를 입력

```swift
assert("조건", "조건 실패시 메시지")
assert(isTrue(), "This is not true")
assert(age >= 0, "A person's age can't be less than zero") // 공식문서 예시
```
