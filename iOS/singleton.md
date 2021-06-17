## Singleton
### 특징
- 안티패턴(사용을 지양하자고 하는 패턴)이지만 쓰임새가 있다
- 앱에서 공통적으로 쓰이고 있고 공통적으로 접근할 수 있다
- 앱도 하나의 인스턴스로 존재하는 것
- iOS에서 제공하는 기능들 중 싱글턴인 것들이 많다

```swift
UIApplication.shared
NotificationCenter.default
FileManager.default
URLSession.shared
```

### 단점
- 다양한 곳에서 접근하니까 예측하기가 어렵다
논리적 오류를 트래킹하기 어렵고 그래서 테스트하기도 어려워짐
- 여러군데에서 동시 자원에서 접근하기 위해 만들어진 디자인 패턴인데 그것때문에 문제가 된다
  - 고려해야될 사항들이 굉장히 많아짐
- 메모리 공격을 당하게 되면 항상 존재하는 애라 중요한 정보가 실려있으면 그게 전부 노출되기 쉽다

### 코드 예시

- 싱글턴으로 작성된 Referee 클래스

```swift
class Referee {
    static private(set) var shared: Referee = Referee.init()
    
    var leftScore: Int = 0
    var rightScore: Int = 0
    
    func reset() {
        Referee.shared = Referee.init()
    }
    
    private init() {
    }
}

/// 외부 접근
let referee = Referee.shared
```
