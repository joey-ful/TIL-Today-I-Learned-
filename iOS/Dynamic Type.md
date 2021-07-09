## Accessibility

모든 사람이 앱에서 제공하는 정보에 동등하게 접근할 수 있어야 한다
접근성을 구현하지 않으면 법적인 제재를 받을 수 있다

### Dynamic Type

- Accessibility의 한 가지 기능
- 시스템 폰트는 고정된 폰트로 사용자가 글자 크기를 변경해도 바뀌지 않는다
    - 앱에 전역으로 사용되는 기본 글꼴. 버전마다 글꼴이 바뀔때가 있음. 글꼴도 몇 개 있어 선택할 수 있음. 사용자가 선택한 system font를 사용. 이 중에 사이즈를 몇으로 하겠다는 고정을 해두는 것. 사용자가 이 설정에서 아무리 사이즈를 늘리고 줄여도 고정되어있어 움직이지 않음
    - 앱에서 글씨 크기를 바꿀 수 없기 때문에 접근성 (accessibility)이 좋지 않다
- text size가 아닌 text style을 사용하면 미리 구현되어있는 dynamic type을 손쉽게 사용할 수 있다. => Preferred Font (ex. .title, .body)
    - size category에 맞는 font size가 구현되어있다
    - body는 제일 작은 size category에서 어떤 폰트크기로 하고 제일 큰 카테고리는 어떻게 하고 등등
- 앱에서 바꾸면 바로 글씨 크기가 바뀌는 것이 dynamic type

    ![https://images.velog.io/images/jehjong/post/2bf7e6d7-d88b-46f7-9d8d-702ecf1210df/image.png](https://images.velog.io/images/jehjong/post/2bf7e6d7-d88b-46f7-9d8d-702ecf1210df/image.png)

- Custom Font를 사용하고 싶으면 사이즈별로 크기, 스타일 이름, leading, tracking을 다 매핑해줘야 한다

    ![https://images.velog.io/images/jehjong/post/f2746b32-e9d9-4bd6-b6a2-715c99dccacb/image.png](https://images.velog.io/images/jehjong/post/f2746b32-e9d9-4bd6-b6a2-715c99dccacb/image.png)

- 하지만 preferred 스타일은 애플에서 size category별로 미리 정의를 해뒀다

    ![https://images.velog.io/images/jehjong/post/1cb192b8-9437-4fc3-ae10-65f72c524de1/image.png](https://images.velog.io/images/jehjong/post/1cb192b8-9437-4fc3-ae10-65f72c524de1/image.png)

    - "더 큰 텍스트"를 활성화시키면 더더 큰 사이즈까지도 지원을 해준다 Larger Accessibility Type Sizes

        ![https://images.velog.io/images/jehjong/post/1ce743b6-ae25-4efd-8aa1-599ecc639d96/image.png](https://images.velog.io/images/jehjong/post/1ce743b6-ae25-4efd-8aa1-599ecc639d96/image.png)

**1. Label에 dynamic type 적용하기**

스토리보드에서 Label의 Attribute Inspector에서

```swift
Automatically Adjusts Font
```

를 체크해주면 dynamic type이 적용된다

![https://images.velog.io/images/jehjong/post/2b429f10-652c-4f8e-942f-808244c6fdbe/image.png](https://images.velog.io/images/jehjong/post/2b429f10-652c-4f8e-942f-808244c6fdbe/image.png)

아니면 코드로 해당 label의

```swift
adjustsFontForContentSizeCategory
```

프로퍼티를 true로 설정해줘도 된다

```swift
label.adjustsFontForContentSizeCategory = true
```

**2. Preferred style이 아닌 텍스트에 dynamic type 적용하기**
Dynamic type은 preferred style 폰트에 적용할 수 있다. 하지만 간혹 preferred style에서 제공하는 사이즈보다 더 작거나 더 큰 사이즈로 텍스트를 지정하고싶을 때가 있다. 이 경우 어쩔 수 없이 system font나 custom font를 사용해야한다. 하지만 그러면 dynamic type을 바로 사용할 수 없다. 해결방법은 UIMetrics와 scaledFont(for:)를 사용하는 것! [시스템폰트/커스텀폰트에 Dynamic Type 적용하기](https://zeddios.tistory.com/1236)

```swift
let systemFont = UIFont.systemFont(ofSize: 70)
label.font = UIFontMetrics.default.scaledFont(for: systemFont)
```

- 라벨의 `adjustsFontForContentSizeCategory` 프로퍼티를 true로 설정하거나 스토리보드에서 `Automatically Adjusts Font`를 체크해서 Dynamic Type을 활성화해준다

**3. 버튼 텍스트에 dynamic type 적용하기**
버튼은 스토리보드에서 바로 dynamic type을 활성화해줄 수 없다
따라서 코드적으로 구현해줘야하는데 이때 button의 titleLabel에 접근해서 해주면 된다

- 버튼에서 titleLabel 속성을 사용해본 적이 있는데 이것이 라벨이라는 것을 오늘 깨달았다! 😲 (이름이 라벨인데 왜 라벨이라고 생각을 안 했을까 🤔 그냥 아무 생각이 없었던 걸로..)

```swift
button.titleLabel.adjustsFontForContentSizeCategory = true
```

### 언제 Dynamic Type

Dynamic Type을 모든 곳에 적용해보니 글씨가 너무 커서 화면이 다 망가지고 글씨가 제대로 보이지 않게 됐다.

![https://images.velog.io/images/jehjong/post/5600549d-33fe-460c-9636-78cd64062d0c/image.png](https://images.velog.io/images/jehjong/post/5600549d-33fe-460c-9636-78cd64062d0c/image.png)

- 아이폰에서 큰 텍스트 카테고리를 설정한 후 아이폰 앱들을 확인해보니 스크롤뷰가 많았는데 스크롤뷰에서는 텍스트의 사이즈가 커져도 스크롤해서 보면 되니까 별로 문제가 되지 않았다.
- 그리고 생각보다 dynamic type이 적용되지 않은 텍스트들이 많았는데 이는 사이즈가 커져서 문제가 되기 때문에 일부러 적용하지 않은 것 같았다. 텍스트가 커졌을 때를 확인해보고 적절한 경우에만 dynamic type을 적용해야 하는 것이 좋은 것 같았다.

### 기타

internalization vs localization
지역화를 통해 그 사람이 들을 수 있는 언어로 지원해줘야한다

systemfont를 고정했을 때
다른 요소들이 커지거나 화면이 줄어들면 해당 글씨가 작아지는데
auto shrink 옵션을 줘서 minimum font scale을 줄 수 있다
UIFont.systemFont(ofSize: 70)로 하면 된다
UIFont(name: "Kefa", size: 70)! => 이건 커스텀 폰트
