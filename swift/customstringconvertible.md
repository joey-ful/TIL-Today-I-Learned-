### CustomStringConvertible의 연산프로퍼티 표기법?

오늘 Nala 날라 에게 신기한 것을 배웠다!

- 열거형에서 CustomStringConvertible을 채택하면 description을 써주지 않아도 해당 값이 리턴된다
    - juice변수에 열거형 케이스를 담아 선언했다면 `juice`라고만 쳐도 해당 케이스의 description이 나온다. `juice.description`이라 작성할 필요가 없다는 뜻! 🤩

```swift
enum Juice: String, CustomStringConvertible {
    case strawberryJuice = "딸기"
    case bananaJuice = "바나나"
    case kiwiJuice = "키위"
    case pineappleJuice = "파인애플"
    case strawberryBananaJuice = "딸바"
    case mangoJuice = "망고"
    case mangoKiwiJuice = "망키"

    var description: String {
        self.rawValue
    }
}

let juice = Juice.strawberryBananaJuice
print(juice)
// 딸바
```
