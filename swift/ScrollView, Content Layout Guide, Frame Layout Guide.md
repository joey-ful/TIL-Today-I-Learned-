# ScrollView

**상위뷰뿐 아니라 하위 뷰에도 contraints를 걸 것!** 이 부분 때문에 특히나 어려웠는데 잘 기억해둬야겠다.

## Content view

ScrollView 안에는 content view가 필요하다. 뷰를 여러개 넣고 싶다면 하나의 content view로 묶으면 된다

- View나 stackView 등을 content view로 정하고 그 내부에 다른 뷰들을 넣는 것
- Label 하나만 넣어 스크롤해도 작동은 잘 된다
- ScrollView와 `content view`는 상위 뷰뿐 아니라 하위 뷰에게도 제약조건을 설정해줘야한다. (ex. 스크롤뷰를 만들어 superview에 contraints를 다 걸어봤자 `content view`에 contrainst를 걸지 않으면 에러가 발생한다)

## Content Layout Guide and Frame Layout Guide

ScrollView에는 `Content Layout Guide`와 `Frame Layout Guide`가 있다. 옛날에는 하나였는데 분리되었다고 한다.
`Content Layout Guide`는 `content view` **배치하기**, `Frame Layout Guide`는 **스크롤 방향 설정하기**라고 보면 된다. 근데 굳이 구분하지 않고 모든 제약조건을 전부 Scroll View에 걸어도 된다. (Scroll View에 `top`, `bottom`, `leading`, `trailing` 그리고 `Equal Heights`/`Equal Widths`)

- `Content Layout Guide` - `Content view`에서 `Content Layout Guide`에는 `top`, `bottom`, `leading`, `trailing` 제약조건을 걸어주면 된다

    ![https://images.velog.io/images/jehjong/post/03fc68d2-0375-46db-a86c-bab3d99cedef/image.png](https://images.velog.io/images/jehjong/post/03fc68d2-0375-46db-a86c-bab3d99cedef/image.png)

- `Frame Layout Guide` - `Content view`에서 `Frame Layout Guide`에는 `Equal Widths` 나 `Equal Heights` 제약조건을 걸어 스크롤 방향을 결정하면 된다.
    - 위아래 스크롤할거면 `content view`의 `Equal Widths`로 가로를 고정, 좌우 스크롤할거면 `Equal Heights`로 높이를 고정하면 된다

        ![https://images.velog.io/images/jehjong/post/f7956711-1caf-4b3a-b4c7-faa6a4bc103a/image.png](https://images.velog.io/images/jehjong/post/f7956711-1caf-4b3a-b4c7-faa6a4bc103a/image.png)
