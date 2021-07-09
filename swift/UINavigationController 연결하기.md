# UINavigationController

## Navigation Controller 연결하기

나는 Navigation Controller를 끌어서 가져오는 방법밖에 몰랐고 이 방법은 좀 불편했는데 완전 편한 방법 두 가지를 ! 🥳

1. 루트뷰컨트롤러로 설정하고 싶은 뷰컨트롤러를 클릭한 채 아래 버튼을 누르면 된다

    ![https://images.velog.io/images/jehjong/post/c169fdeb-d059-4c99-823e-2f46ab036ddd/image.png](https://images.velog.io/images/jehjong/post/c169fdeb-d059-4c99-823e-2f46ab036ddd/image.png)

2. 루트뷰컨트롤러로 설정하고 싶은 뷰컨트롤러를 클릭한 채 Editor > Embed In > Navigation Controller를 누르면 된다

    ![https://images.velog.io/images/jehjong/post/1564f1a4-e7ca-4b5a-b2ed-442e5e90bb7d/image.png](https://images.velog.io/images/jehjong/post/1564f1a4-e7ca-4b5a-b2ed-442e5e90bb7d/image.png)

3. 내가 알던 방법은 cmd + shift + L 을 누르고 Navigation controller를 가져와서 뒤의 루트뷰를 지우고 navigation controller를 현재 뷰에 연결하는 것... 🙄  Navigation controller를 이렇게 생성하면 뒤에 테이블뷰가 들어간 뷰컨트롤러가 한 쌍으로 같이 딸려와서 Navigation Controller만 가져오고 싶을 때는 적절하지 않다.

    ![https://images.velog.io/images/jehjong/post/6fd7b15f-a539-4e56-9d71-3e7856d4022d/image.png](https://images.velog.io/images/jehjong/post/6fd7b15f-a539-4e56-9d71-3e7856d4022d/image.png)
