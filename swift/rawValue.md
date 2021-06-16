### rawValue

rawValue 사용이 지양된다는 이야기를 다른 캠퍼들 풀리퀘의 리뷰나 TIL에서 봤다. key, value에서 value에 접근해서 key를 식이라 권장되지 않는 것 같다. 이 부분을 해결하기 위해 여러 TIL에서 CustomStringConvertable 프로토콜을 활용하는 것을 봤는데 이것은 String 타입을 리턴할 때 사용되는 것 같다. 

- 기존에는 묵찌빠 enum을 만들어 그에 해당하는 숫자를 원래는 rawValue로 접근했었다

    ```swift
    enum MukJJiPPa: Int {
      case muk = 1
      case jji
      case ppa
    }

    let userHand = MukJJiPPa.muk
    let computerHand = MukJJiPPa.jji

    let numberGap = userHand.rawValue - computerHand.rawValue
    ```

- 하지만 rawValue를 사용되는 부분을 고치면 좋겠다는 생각이 들었다. 실제로 생각해보면 enum에 가보지 않는 이상 rawValue에 무엇이 담겨있는지 알 수 없으니까 가독성이 떨어진다는 생각도 들었다. (1, 2, 3이 담겼을지 스트링이 담겼을지 혹은 또 다른게 담겼을지) 따라서 `menuNumber`라는 연산 프로퍼티로 처음 입력 때 소개했던 1, 2, 3 메뉴의 번호임을 한 번 알려주어 가독성을 높였다. 사실 큰 차이는 없어보이지만 만약 enum이 엄청 많아서 각 enum의 rawValue가 무엇인지 바로 떠오르지 않는다면 이 방법이 유용하지 않을까 싶다

    ```swift
    enum MukJJiPPa: Int {
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

    let userHand = MukJJiPPa.muk
    let computerHand = MukJJiPPa.jji

    let numberGap = userHand.menuNumber - computerHand.menuNumber
    ```

- 하지만 쿠마가 switch문을 없애는 것이 좋겠다고 피드백을 줬고 결국 rawValue를 사용해야겠다는 생각이 들어 아래처럼 바꿨다. rawValue가 key를 구하는 것이니까 권장되지는 않겠지만 일단 코드가 굉장히 간결해져서 이 정도면 rawValue를 쓰는 것이 낫지 않을까 하는 생각을 했다. 게다가 enum 내에서 rawValue를 사용하는 것은 바로 rawValue가 무엇인지 보이니까 가독성에도 문제가 없다고 생각했다. (어차피 self.rawValue를 보고 있는 사람은 바로 위의 case에 Int가 부여된 것이 보이니까)

    따라서 가독성 문제는 잘 해결된 것 같다. 아직 아래 방식에 대한 피드백은 받지 못해서 혹시 더 좋은 방법은 없을지 무척 궁금하다

    ```swift
    enum MukJJiPPa: Int, CaseIterable {
      case muk = 1
      case jji
      case ppa

    	var menuNumber: Int {
    	  return self.rawValue
    	}
    }

    let userHand = MukJJiPPa.muk
    let computerHand = MukJJiPPa.jji

    let numberGap = userHand.menuNumber - computerHand.menuNumber
    ```
