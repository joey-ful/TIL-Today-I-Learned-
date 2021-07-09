## 프레임워크

asset의 데이터를 디코딩을 하기 위해 NSDataAsset()을 사용하려고보니 UIKit 프레임워크를 import해야했다. Foundation과 함께 import하려다가 생각해보니 이런 프레임워크들에 대해 알아본 적이 없다는 것을 깨달아서 찾아봤다

### UIKit

![https://images.velog.io/images/jehjong/post/c8abb134-0949-40dd-b9f9-efd869191a4b/image.png](https://images.velog.io/images/jehjong/post/c8abb134-0949-40dd-b9f9-efd869191a4b/image.png)

iOS와 tvOS의 그래픽과 이벤트 기반의 유저 인터페이스를 만들고 관리하는 프레임워크

- 인터페이스를 적용하기 위한 window와 view 구조, 멀티터치와 다른 인풋을 전달하기 위한 이벤트 핸들링, 사용자와 앱 그리고 시스템 간의 인터렉션을 관리하기 위한 main run loop 을 제공
- 그 외에도 애니메이션, 문서, 그리기, 인쇄, 현재 장치의 정보, 텍스트 관리와 디스플레이, 검색, 접근성, 앱 확장, 자원 관리 등이 있다
- UIKit을 import 하면 Foundation도 함께 import 되기 때문에 Foundation은 따로 import할 필요 없다

```swift
import UIKit
```

### Foundation

![https://images.velog.io/images/jehjong/post/0dadbcb8-7ae2-4c13-849e-62627a9813ee/image.png](https://images.velog.io/images/jehjong/post/0dadbcb8-7ae2-4c13-849e-62627a9813ee/image.png)

데이터를 저장하고 텍스트를 가공, 날짜와 시간 계산, 정렬과 필터링, 네트워킹 등의 기초 기능들을 제공하는 프레임워크
기본 데이터 타입에 접근할 수 있게 해준다.

- Foundation도 import 하면 Swift(Swift Standard Library)도 함께 import 되기 때문에 Swift는 따로 import할 필요 없다

```swift
import Foundation
```

### Swift Standard Library

![https://images.velog.io/images/jehjong/post/80a11e11-71eb-4bdd-a22a-df6eca941bd8/image.png](https://images.velog.io/images/jehjong/post/80a11e11-71eb-4bdd-a22a-df6eca941bd8/image.png)

기본 타입들, 전역 함수들 그리고 일부 프로토콜을 제공하는 프레임워크

```swift
import Swift
```
