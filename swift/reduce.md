### `reduce`

- 사실 reduce랑 map의 표기법을 자세히 알지 못 했다. 하지만 인터넷에서 본 것을 토대로 간략 표기법을 과제에서 사용했었다.

```swift
let arr = [1, 2, 3]
let sum = arr.reduce(0, +)

print(sum)
// 6
```

- 하지만 오늘 갑자기 다른 표기법을 이해하려고보니 헷갈렸다. 다행히 동료의 코드를 보고 조금 정리가 되었다
- `in` 때문에 조금 헷갈리지만 다양한 표기법에 조금 더 익숙해진 것 같다

```swift
let sum = arr.reduce(0) {x, y in x + y}
```

- 다른 사람의 코드를 읽고 이해하려면 여러 표기법을 알고 있어야하는 것 같아서 아래 표기법들을 테스트해봤고 모두 같은 결과를 도출하는 것을 알게 되었다.

```swift
arr.reduce(0, {(x: Int, y: Int) -> Int in
	return x + y
})

arr.reduce(0, {(x, y) in
	return x + y
})

arr.reduce(0) {x, y in x + y}

arr.reduce(0) {$0 + $1}

arr.reduce(0, +)
```
