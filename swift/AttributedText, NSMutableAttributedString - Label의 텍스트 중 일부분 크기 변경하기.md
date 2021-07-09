# Label의 텍스트 중 일부분의 크기 변경하기

미션에서 텍스트의 일부분만 크기를 키워야할 일이 있었다. [블로그 글](https://zeddios.tistory.com/300)을 참고했다

![https://images.velog.io/images/jehjong/post/3492316c-f52c-43ee-abb6-f9e1702adac5/image.png](https://images.velog.io/images/jehjong/post/3492316c-f52c-43ee-abb6-f9e1702adac5/image.png)

NSMutableAttributedString은 자신의 일부분을 다르게 스타일링할 수 있는 문자열이다. 문자열의 일부분에 새로운 크기, 색, 볼드, 하이퍼링크 등을 적용할 수 있다.

- 다음 코드는 어떤 `label` 이라는 UILabel의 텍스트에서 `textToModify` 라는 특정 부분을 원하는 폰트사이즈 `fontSize` 로 바꾸는 것이다

```swift
let text = label.text!
let fontSize = UIFont.systemFont(ofSize: 40)
let textToModify = "blabla"

let attributedString = NSMutableAttributedString(string: text)
attributedString.addAttribute(.font, value: fontSize, range: (text as NSString).range(of: textToModify))
label.attributedText = attributedString
```
