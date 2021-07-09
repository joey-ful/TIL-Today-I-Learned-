# [Accessibility Inspector](https://developer.apple.com/videos/play/wwdc2019/257/)

접근성을 잘 구현했는지 검증해주는 툴

**Xcode에**

서 Xcode > Open Developer Tool > Accessibility Inspector

![https://images.velog.io/images/jehjong/post/69dc692b-6613-4114-bf10-1278aaafe0e8/image.png](https://images.velog.io/images/jehjong/post/69dc692b-6613-4114-bf10-1278aaafe0e8/image.png)

앱을 실행하고 접근성 검사를 하고 싶은 시뮬레이터를 지정한다

![https://images.velog.io/images/jehjong/post/820b35b6-27e3-48ba-b9c6-ef0ded5855da/image.png](https://images.velog.io/images/jehjong/post/820b35b6-27e3-48ba-b9c6-ef0ded5855da/image.png)

우측 세모 카테고리에서 "Run Audit"을 누르면 현재 앱 화면에서 접근성을 개선할 수 있는 항목들을 나열해준다

![https://images.velog.io/images/jehjong/post/0a87dc44-2cb2-4f2c-a4c0-61c2aae1ff2e/image.png](https://images.velog.io/images/jehjong/post/0a87dc44-2cb2-4f2c-a4c0-61c2aae1ff2e/image.png)

우측 info 카테고리에서 Voice Over를 직접 들어볼 수 있다. Label, Value, Traits, Identifier 등도 확인할 수 있다.

- Label에는 뭔지 설명
- Value에는 값을 넣어준다. "2개"라고 넣어주면 "두 개"로 읽어준다
- Traits에는 해당 항목이 어떤 종류인지 설정 (버튼, 이미지). 버튼으로 설정하면 뒤에 버튼을 붙여 읽어준다
ex. Label: "바나나 재고", Value: "2개", Traits: None => 바나나 재고 두 개
ex. Label: "바나나", Value: None, Traits: 이미지 => 바나나 이미지

![https://images.velog.io/images/jehjong/post/4421759b-71f4-4377-b790-8ee587b824d4/image.png](https://images.velog.io/images/jehjong/post/4421759b-71f4-4377-b790-8ee587b824d4/image.png)

```swift
favoriteButton.accessibilityLabel = data.favorite ? "Remove Favorite" : "Favorite"
```

standard uikit or appkit control은 알아서 접근성이 적용되지만 CATextLayer는 안되기 때문에 직접 접근성을 활성화하고 설정해줘야 Voice Over를 사용할 수 있다 => 안되는 것들은 `isAccessibilityElement` 프로퍼티를 true로 설정
CATextLayer => responsible for handling our own accessiblity

```swift
let textLayer = CATextLayer()
textLAyer.frame = brandTitleBackgroundView.bounds

brandTitleBackgoundView.isAccessibilityElement = true
if let brandName = textLayer.string as? String {
    brandTitleBackgroundView.accessibilityLabel = brandName
}
```

### Color Contrast

Color contrast 비율을 계산해주는 툴

**Accessibility Inspector**

에서 Window > Show Color Contrast Calculator

![https://images.velog.io/images/jehjong/post/48791813-72fc-45e2-aa38-c8265ec12d78/image.png](https://images.velog.io/images/jehjong/post/48791813-72fc-45e2-aa38-c8265ec12d78/image.png)

색을 고르면 Color Contrast ratio를 계산해준다. 3.0 이상을 권장한다고 한다

![https://images.velog.io/images/jehjong/post/92219e03-cfe3-4e07-8b33-f289efa1993f/image.png](https://images.velog.io/images/jehjong/post/92219e03-cfe3-4e07-8b33-f289efa1993f/image.png)
