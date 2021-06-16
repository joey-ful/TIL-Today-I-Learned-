### 딕셔너리와 옵셔널 체이닝

- 처음 시도했던 코드는 아래와 같다. 첫줄은 key가 존재하면 amount로 값을 덮어씌우고 key가 없다면 새로운 key-value 쌍을 딕셔너리에 저장한다.

```swift
fruitList[fruit] = amount
fruitList[fruit] += amount // 에러
```

- 하지만 두 번째 줄은 에러가 발생한다. 딕셔너리의 값을 열어볼 때는 옵셔널 바인딩을 해줘야한다. 그래서 그런지 `+=` 기호를 사용할 수가 없었다. 왜냐하면 기존 값에 일정 값을 더하는 것이니까 어쨌든 기존값을 보려면 옵셔널 바인딩이 필요하기 때문이다. 따라서 이 경우는 아래처럼 딕셔너리의 값을 옵셔널 바인딩을 통해 구한 뒤 새 값을 더한 것을 value에 담아줬다.

```swift
guard let stock = fruitList[fruit] else {
    return
}
fruitList[fruit] = stock + amount
```

- 하지만 옵셔널 체이닝을 통하면 아래처럼 간결하게 바로 처리할 수 있다. key가 존재하면 의도한대로 될 것이고 존재하지 않는다면 아무일도 일어나지 않는다.
    - 다만 key가 존재하지 않아서 아무일도 일어나지 않았을 때 아무 처리를 안 해도 될지 해야할지는 상황에 맞게 판단해야할 것 같다. 우리는 key가 없으면 invalidFruit 에러를 반환하도록 따로 처리를 해주었다.

```swift
fruitList[fruit]? += amount
```

- 테리의 설명을 듣기론 값을 세팅하는 함수가 생략되어 있는 것 같았다. 그래서 옵셔널체이닝인지 눈치채기 쉽지 않았다고 한다!

```swift
func += (lhs: inout Int, rhs: Int)
value?.+=(lhs: &value, rhs: 1)
```
