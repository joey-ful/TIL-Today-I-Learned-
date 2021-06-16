## Navigation Controller

### 특징

- 이해하는데 많이 도움된 내용
- 이어지는 정보의 흐름을 시작할 때 사용한다
- push/pop 트랜지션으로 화면이 전환된다
    - 화면은 Navigation Stack이라는 배열로 관리
    - 가장 처음에 추가된 VC는 rootVC
    - 가장 마지막에 추가된 VC는 top VC
- SHOW(push) segue로 구현되어야 한다
    - 내비게이션 바는 root view에서만 수정 가능하다
    - child view에는 parent view로 가는 백버튼이 자동으로 생성된다
    - Navigation Controller에서 루트뷰 외의 뷰는 모두 Back 버튼이 추가됨
    - 내비게이션 바를 바꾸고 싶으면 새로운 Navigation Controller를 생성해야 한다
- drill-down 방식으로 점점 depth가 깊어지는 화면 이동
    - 이전 화면과 이후 화면은 parent-child 관계를 갖게 된다
    - 이후 화면에서는 대부분 이전 화면으로 돌아간다
- 내비게이션은 정보의 흐름이 이어질 때, 모달은 흐름이 새로 시작될 때
    - 정보의 흐름이 이어지지 않으면 모달로 새로운 창을 띄운다
    - 새로운 drill-down을 시작하려면 새로운 Naviagtion Controller를 연결한다

### Navigation Bar

- parent view로 돌아가는 버튼이 백버튼으로 보통 왼쪽에 표시된다
- 내비게이션의 버튼은 항상 UIBarButtonItem 인스턴스로 추가해야한다
    - leftBarButtonItems, rightBarButtonItems
    - Switch나 일반 UI버튼도 UIBarButtonItem 형태로 매핑해서 추가해야한다
- 내비게이션 바 중앙은 Title
    - ios11부터 라지 타이틀모드가 추가됨
    - Large Title - 타이틀이 커지고 아래쪽에 표시되는 것 (알람창의 타이틀) 그리고 네비바의 써치바를 직접 추가할 수 있음
- Prompt는 옵션으로 title 위에 넣는 작은 문자열
- 타이틀과 버튼은 Navigation Item 객체에 저장되며 모든 VC는 이 객체를 하나씩 갖는다
    - 여기에 표시할 버튼과 타이틀을 저장해두면 Navigation Controller가 이 값을 기반으로 내비게이션 바를 업데이트 한다
- 툴바는 top VC 랑 관련된 버튼을 표시
    - VC에 저장된 툴바 아이템에 따라 자동으로 업데이트

### 코드로 구현하기

- 내비바에 백버튼을 표시하는 것과 이전 화면으로 돌아가는 기능은 내비게이션 컨트롤러가 담당하므로 구현 필요X
    - 루트뷰 스토리보드에서 가져오기
    - 내비게이션 컨트롤러를 코드로 생성
    - 내비게이션 컨트롤러를 모달 방식으로 present

```swift
guard let rootVC = self.storyboard?.instantiateViewController(
		withIdentifier: "root"
) else {
		return
}
let nav = UINavigationController(rootViewController: rootVC)
present(nav, animated: true, completion: nil)
```

- 이미 Navigation Controller가 스토리보드에 만들어져있다면 스토리보드의 Navigation Controller를 불러와서 그것을 모달 방식으로 present

```swift
guard let fruitStoreNav = self.storyboard?.instantiateViewController(withIdentifier: "fruitStoreNav") else {
            return
        }
present(fruitStoreNav, animated: true, completion: nil)

```

## 기타

- enum에 UILabel 타입을 rawValue로 넣을 수 없었다. 추가 처리가 필요한 것인지 아예 안되는 것인지는 모르겠다.

# 문제점 / 고민한 점

---

- Navigation Controller와 segue가 어떻게 다른지 궁금했는데 많이 해소된 것 같다
    - Navigation Controller는 show 방식으로 구현되는 것으로 내비바의 백버튼에 이전 화면이 나타나는 drill-down 방식. 정보의 흐름이 이어질 때 하나의 Navigation Controller 에서 push/pop으로 화면들이 쌓이고 제거되는 식으로 트랜지션이 이루어진다. 그리고 또다른 정보의 흐름이 새로 시작될 때 그리고 새로운 navigation bar가 필요할 때 새로운 Navigation Controller를 만들어 추가하면 되는 것 같다
    - segue는 show 외의 모달 방식 트랜지션으로 화면들이 부모-자식 관계가 아니라 source-destination 관계를 가진다. 정보의 흐름이 바뀔 때의 트랜지션
