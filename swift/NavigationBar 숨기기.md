## Navigation Bar 없애기

### 스토리보드에서 없애기

아래 그림에서 `Shows Navigation Bar` 를 체크해제하면 내비게이션 바가 숨겨진다.

![https://images.velog.io/images/jehjong/post/3198b602-e667-4716-9bad-8bee99d55b54/image.png](https://images.velog.io/images/jehjong/post/3198b602-e667-4716-9bad-8bee99d55b54/image.png)

하지만 이 경우 모든 child VC에서도 내비게이션 바가 사라지게 되기 때문에 root VC의 내비게이션 바만 없애고 싶으면 코드로 구현해야 하는 것 같다. 스토리보드 내에서 해결하는 방법은 찾지 못했다.

### 코드로 구현하기

코드로 구현하는 경우 내비게이션 컨트롤러의 `isNavigationBarHidden` 프로퍼티나 `setNavigationBarHidden(_:animated)` 메서드를 사용해 내비게이션바를 숨기거나 보여지게 할 수 있다.

- 다음 코드를 루트뷰에 작성하면 된다. 루트뷰가 보여질 때 내비게이션 바를 숨기고 루트뷰가 사라질 때 내비게이션 바를 다시 보이게 하는 것!

```swift
// 1. 프로퍼티 자체를 바꾸는 경우
class RoorViewController: UIViewController {
    override func viewWillAppear(_ animated: Bool) {
        super.viewWillAppear(animated)
        self.navigationController?.isNavigationBarHidden = true
    }

    override func viewWillDisappear(_ animated: Bool) {
        super.viewWillDisappear(animated)
        self.navigationController?.isNavigationBarHidden = false
    }
}

// 2. 메서드를 사용해 바꾸는 경우
class RoorViewController: UIViewController {
    override func viewWillAppear(_ animated: Bool) {
        super.viewWillAppear(animated)
        self.navigationController?.setNavigationBarHidden(true, animated: false)
    }

    override func viewWillDisappear(_ animated: Bool) {
        super.viewWillDisappear(animated)
        self.navigationController?.setNavigationBarHidden(false, animated: false)
    }
}
```

- `isNavigationBarHidden` 는 Bool 프로퍼티다보니 true인지 false인지 확인할 때 사용하는 것 같고 그 값을 변경하는 것은 `setNavigationBarHidden(_:animated)` 메서드로 하는 것 같은 생각이 들었다.

    ![https://images.velog.io/images/jehjong/post/6af57ad7-4a9c-454a-b7a8-815bf1742a42/image.png](https://images.velog.io/images/jehjong/post/6af57ad7-4a9c-454a-b7a8-815bf1742a42/image.png)

    ![https://images.velog.io/images/jehjong/post/ab4d185e-92c2-4b43-ab11-048c11ef6f19/image.png](https://images.velog.io/images/jehjong/post/ab4d185e-92c2-4b43-ab11-048c11ef6f19/image.png)

    ![https://images.velog.io/images/jehjong/post/20ba7183-bafe-450a-a6ae-ff4380048a45/image.png](https://images.velog.io/images/jehjong/post/20ba7183-bafe-450a-a6ae-ff4380048a45/image.png)

- 하지만 `isNavigationBarHidden` 프로퍼티를 직접 변경할 수 있는 것도 가능하긴 하다. 변경이 가능하다는 말은 변경해서 쓰라는 말일까? 🤔 그리고 Xcode document를 보면 `isNavigationBarHidden` 설명에 다음과 같은 내용이 있다. "If you want to animate the change, use the setNavigationBarHidden(_:animated:)method instead." 이 말을 보면 마치 animated transition을 하고 싶으면 저 메서드를 쓰고 아니면 `isNaviagtionBarHidden` 프로퍼티를 사용하라는 말 같다. 결론은... 잘 모르겠지만 일단은 값을 변경하려면 메서드를 쓰는 것이 더 적절해보인다.

    ![https://images.velog.io/images/jehjong/post/00dc5d6f-e2db-4bd3-a68a-06b5dfdd5d20/image.png](https://images.velog.io/images/jehjong/post/00dc5d6f-e2db-4bd3-a68a-06b5dfdd5d20/image.png)

- `setNavigationBarHidden(_:animated)`에서는 animated transition을 설정해줄 수 있다고하길래 animated transition이 뭔지 확인해봤다. 빌드한 내용을 캡처해보니 다음과 같은 차이가 있었다. (root뷰에서 child뷰로 이동중인 모습을 캡처. 현재 root뷰는 내비게이션바가 없고 child뷰는 있게 설정되어있다)
**좌 animated true, 우 animated false**

    ![https://images.velog.io/images/jehjong/post/6ccd61eb-8440-48b0-ae4a-85facc36f710/image.png](https://images.velog.io/images/jehjong/post/6ccd61eb-8440-48b0-ae4a-85facc36f710/image.png)
