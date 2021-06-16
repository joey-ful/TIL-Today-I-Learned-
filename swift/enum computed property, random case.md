### Computed Property 연산 프로퍼티

- 호출될 때마다 계산되는 프로퍼티
    - 다른 데이터에 의존하는 경우 많이 사용
        - 가장 최신의 프로그램 상태를 반영하기 때문에 유용하다
    - 저장 공간과 시간을 단축하기 위해 사용
        - 값이 변하지 않고 자주 조회된다면 Stored 프로퍼티가 더 빠르다
        - 하지만 값이 거의 혹은 아예 조회되지 않으면 computed 프로퍼티가 더 효율적이다

```swift
enum MukJJiPPa: Int, CaseIterable {
    case muk = 1
    case jji
    case ppa
    
    var menuNumber: Int {
        switch self {
        case .muk:
            return 1
        case .jji:
            return 2
        case .ppa:
            return 3
        }
    }
}

let userHand = MukJJiPPa.ppa
userHand.menuNumber = 3
```

### Enum의 랜덤 케이스

저번에 혼자서는 알 수 없는 에러 속에서 구현에 실패했는데 오늘 조스트가 작동되는 코드를 알려줬다

- 저번엔 옵셔널 처리를 안 해서 에러가 났었는데 TIL에도 옵셔널 처리를 안 하고 적어버려서 수정했다...

```swift
enum MukJJiPPa: Int, CaseIterable {
    case muk = 1
    case jji
    case ppa
}

if let randomHand = MukJJiPPa.allCases.randomElement() {
	print(randomHand)
}
//muk, jji, ppa 중 랜덤하게 출력
```
