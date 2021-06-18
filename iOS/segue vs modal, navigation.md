## Segue

- 스토리보드에서 두 VC가 연결된 방향을 나타내는 선으로 화면 전환 방법일뿐
    - segue는 방향이 있는 화살표
- 이것을 modal로 띄울지 navigation으로 띄울지 선택하는 것

### segue identifier

화면이 A, B, C가 있다고 할 때 다음 A 화면으로부터 다음 두 가지 segue가 존재한다고 해보자

- A → B: toB segue
- A → C: toC segue

segue를 탈건데 toB segue를 탈지 toC segue를 탈지 골라서 실행하기 위해 segue에 이름을 붙인다.

### segue kind

- segue 타입을 show로 한다고 navigation인 것은 아니다
    - 그냥 그것과 같은 transition처럼 보일뿐이다
- navigation의 segue 타입을 modal로 해도 그건 navigation이다
- 아이폰에서는 show와 present modally 정도만 구분이 가능하다
- show detail과 present as popover는 아이패드를 위한 화면 전환 방식

### segue kind 차이 - 아이폰 vs 아이패드

- [gif 출처](https://stackoverflow.com/questions/25966215/whats-the-difference-between-all-the-selection-segues)
    - show - 좌우 움직임 (navigation의 부모 자식 이동 방식의 기본 전환 방식)

        ![show](https://user-images.githubusercontent.com/52592748/122518039-b142c600-d04b-11eb-9a3a-39bd5ea96ab0.gif)


    - show detail - 아이패드에서 구분 가능
        - 이건 아이폰 화면이 show 처럼 동작한다.
        - show detail은 모달처럼 아래에서 위로 올라오는 방식이다.

        ![show detail](https://user-images.githubusercontent.com/52592748/122518071-ba339780-d04b-11eb-88fd-6ac2a578d027.gif)


    - present modally - 아래에서 위로 뜨는 방식 (정보 흐름이 다른 화면을 잠깐 띄웠다 닫기 위한 용도)

        ![present modally](https://user-images.githubusercontent.com/52592748/122518082-bd2e8800-d04b-11eb-9c2c-80830b6b5657.gif)


    - present as popover - 아이패드에서 구분 가능

        ![present as popover](https://user-images.githubusercontent.com/52592748/122518096-c0c20f00-d04b-11eb-9119-c3ab6dbbb5aa.gif)


## 화면 전환 기법

### Modal

- 임시로 보여주기 위한 화면을 띄울 때 사용
    - Swift H.I.G.를 보면 화면을 띄우고 액션 하나를 하면 닫히는 용도로 사용
- 모달을 띄운 뒤에 모달을 또 띄우는건 안됨 (안되는건지 지양되는건지는 아직 모르겠음)
- modal의 기본은 아래에서 위로 뜨는 방식
- 내비바를 뜨게 하고 싶으면 Navigation Controller를 사용해야 한다

```swift
self.present()
```

### Navi

- Navigation Controller를 가지고 drill-down 기법을 사용
    - Navigation Controller를 가지고 있어야함
    - ex. 설정 > 일반 > 소리 처럼 점점 depth가 깊어지는 구조
        - 소리에서 바로 설정으로 점프는 불가능
    - Naviagation 스택에 쌓이는 구조
    - child view를 나가면 스택에서 pop이 되는 구조
- show로 segue를 선택하면 stack에 안 쌓일 것 같다고 하심
- Navigation Controller를 새로 띄우고 거기서 새로 drill down을 하는건 권장하지 않음
    - drill-down하다가 또 새로운 drill-down 시작하는건 지양. 하지만 아예 안 쓰이는 건 아닌 것 같은게 알람 앱에서 새로운 알람을 만들기 위한 모달을 띄운 후 거기서 반복, 레이블 등을 설정할 때의 화면이동이 navigation 같다

```swift
self.navigationController.push()
```

---

## 그림 예시

편의상 줄임말
`vc` - view controller
`navicon` - navigation controller

- `첫 vc`에서 `둘째 navicon`으로 이동 → modal
- `첫 vc`에서 `둘째 vc`로 이동 → modal
- `첫 navigon` 에서 `둘째 navicon` 으로 이동 → crash
- `첫 navicon`에서 `둘째 vc`를 코드적으로 push 하는 것 → navigation (코드적으로로 구현하는 navigation으로 `둘째 vc` 는 navigation stack에 topVC로 쌓인다)
- `navicon`에서 `vc`로 이동 → navigation (리보드상으로 구현된 navigation)

![image](https://user-images.githubusercontent.com/52592748/122518132-cc153a80-d04b-11eb-8725-fba461d69ea6.png)
