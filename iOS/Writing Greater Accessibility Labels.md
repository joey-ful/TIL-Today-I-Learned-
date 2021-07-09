# [Writing Greater Accessibility Labels](https://developer.apple.com/videos/play/wwdc2019/254/)

![https://images.velog.io/images/jehjong/post/b32845dc-94dd-4e98-954a-a52a2250fae9/image.png](https://images.velog.io/images/jehjong/post/b32845dc-94dd-4e98-954a-a52a2250fae9/image.png)

- 버튼과 같은 것은 마지막에 "버튼"이라고 읽어주기 때문에 Label에 추가하지 않는 것이 좋다
    - Accessibility Inspector에서 Trait을 확인해보면 알 수 있음
- 토글이나 좋아요 버튼처럼 하나의 항목이 여러 상태를 갖는 경우 상태에 따라 Label을 변경해줘야 한다
    - ex. favorite에 추가, favorite에서 제거
- 불필요한 내용은 피해야하지만 이해하기 쉽도록 충분히 설명해줘야 한다
    - 현재 화면에 카트에 추가 버튼이 하나라면 "카트에 추가"라고 이름을 지으면 되지만 한 화면에 여러 제품이 있고 제품별로 카트에 추가 버튼이 있다면 "피넛버터 카트에 추가", "우유 카트에 추가"처럼 더 자세한 label을 가져야 한다
- 로딩중과 같은 의미있는 애니메이션에도 label을 더해주는 것이 좋다
- 특별한 이유가 없다면 길게 설명할 필요 없다 (이모지같은 경우는 재미를 위해 길게 설명해줘도 된다)
