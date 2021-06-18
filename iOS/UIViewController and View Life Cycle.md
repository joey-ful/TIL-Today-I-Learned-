## [UIViewController](https://developer.apple.com/documentation/uikit/uiviewcontroller)

- 뷰컨트롤러의 공통된 역할을 정의
- UIViewController 인스턴스를 생성하기보다는 subclass를 만들고 메서드랑 프로퍼티를 추가
- 보통 한번에 하나의 뷰컨트롤러의 뷰들만 보임
- 다른 뷰컨트롤러를 present해서 그것의 뷰들을 보이게 하거나 자신이 다른 뷰컨트롤러들의 container 역할을 할 수 있음

### 책임

- 주로 데이터를 바탕으로 뷰의 내용을 업데이트
- 뷰와 관련된 사용자 인터렉션에 반응
- 뷰의 사이즈 변경 및 전반적인 인터페이스의 레이아웃 관리
- 다른 객체들(다른 뷰컨트롤러의 객체들 포함)과 소통

### Subclassing

- 모든 앱은 최소 하나의 UIViewController의 custom subclass를 가짐
- Custom VC는 앱의 전반적인 behavior를 정의
    - 앱의 생김새와 사용자 인터렉션에 대한 반응 등

### View Management

- 각각의 VC는 view hierarchy(루트뷰)를 가짐
- 루트뷰는 나머지 view hierarchy의 커네이너 역할을 수행
- 루트뷰의 사이즈와 position은 그것을 소유한 객체에 의해 결정됨
    - ex. parent view, app's window view
    - 윈도우가 소유한 VC는 앱의 루트 VC로 그것의 뷰들의 크기는 윈도우를 채우는 크기
    - 루트뷰는 지정받은 공간을 다 채우는 크기를 갖게됨
- VC는 뷰들과 sub 뷰들의 유일한 소유자로 뷰들을 생성하고 그것의 소유권을 필요할 때 포기할 책임을 짐 (ex. VC이 release됐을 때?)
- 스토리보드에서 뷰를 만들면 어떤 VC든 요청하면 해당 뷰들의 복사본을 가질 수 있음
- 하지만 뷰들을 manually 만들면 (programmatically를 뜻하는 듯) 각 VC는 고유한 뷰들을 갖게되며 뷰들을 다른 VC과 공유할 수 없음

### 뷰 생성방벙

- VC는 뷰들을 lazy하게 로드 - 뷰를 처음 접근할 때 뷰를 로드하거나 생성

**1. 스토리보드에 생성**

- 뷰를 만들고 VC과 연결 가능
- VC간의 관계와 segue 정의
- 앱의 behavior를 확인하고 수정하는 것이 쉽다
- 스토리보드의 VC을 로드하기 위해 `instantiateViewController(withIdentifier:)`를 호출

**2. Nib file로 뷰를 생성**

- segue나 VC간의 관계는 지정할 수 없다
- VC에 대한 최소한의 정보만 저장
- nib file로 VC 객체를 초기화하기 위해서는 VC 클래스를 코드로 만들고 `init(nibName:bundle:)`로 초기화

**3. `loadView()`로 뷰 생성**

- view hierarchy를 코드로 작성하고 해당 hierarchy의 루트뷰를 VC의 뷰 속성에 지정

### Handlig View-Related Notifications

- VC는 뷰의 visibility에 변화가 생기면 관련 메서드를 호출해 자신의 subclass들이 알 수 있도록 함
- `viewWillAppear(_:)` - 뷰를 화면에 나타내기 위한 준비
- `viewWillDisappear(_:)` - 상태나 변화 등을 저장
- `will`메서드의 호출을 시작했으면 해당 `did` 메서드와 반대되는 `will` 메서드로 끝내야함

    ![https://images.velog.io/images/jehjong/post/b6365ffe-73b4-48a0-828b-15d869e864cb/image.png](https://images.velog.io/images/jehjong/post/b6365ffe-73b4-48a0-828b-15d869e864cb/image.png)

    출처: [https://developer.apple.com/documentation/uikit/uiviewcontroller](https://developer.apple.com/documentation/uikit/uiviewcontroller)

### Implementing a Container View Controller

- 커스텀 UIViewController subclass는 VC의 컨테이너 역할도 수행
- 자신의 소유한 다른 VC들(child VC)의 뷰의 presentation도 관리

### Memory Management

- 자동으로 필요없는 메모리를 해제하는 `didReceiveMemoryWarning()`를 제공

### State Preservation and Restoration

- VC의 `restorationIdentifier` 프로퍼티에 값을 지정하면
