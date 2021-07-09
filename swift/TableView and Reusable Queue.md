# TableView

- 뷰의 객체를 만들어내는 일은 자원을 많이 소모하는 일
    - 그래서 이미 만든 셀을 재사용
    - 맨 처음 셀을 보여주거나 아니면 스크롤을 너무 빨리하는 등 재사용하고 있는 셀의 개수가 부족할 때 셀을 새로 생성
- 어떤 cell이 선택되었는지 알려주는 것은 Table View가 Table View Delegate에게 하는 것
- Table View가 Table View Data Source에게 indexPath에 보여줄 cell을 달라고 하는데 만약 스크롤을 하게 되면 indexPath가 계속 바뀌기 때문에 스크롤 내릴때마다 cell을 달라고 하는 과정이 연속적으로 수십번 일어남
- Delegate는 없어도 되지만 DataSource는 없으면 TableView는 돌아가지 않는다
    - 따라서 DataSource와 Table View가 어떻게 인터렉션 하는지 먼저 파악하는 것이 좋다

### **Cell Reuse Queue**

- 메모리 관리를 위해 iOS에는 `Reuse Queue` (재사용 큐)가 돌아가고 있다
    - 대표적인 예시: 테이블 뷰의 `cell`과 콜렉션 뷰의 `cell`
    - 화면에 보여줄 셀 + ⍺ 개의 셀을 내용물만 바꿔 재사용하는 것
    - 하지만 처음 화면에 셀을 보여줄 때 OR 스크롤을 너무 빠르게 해서 재사용 셀로는 셀이 부족할 때 새로 만든다
- 화면이 스크롤되면 화면에서 사라지는 `cell`과 새로 생기는 `cell`이 존재
    - 화면 밖으로 나간 `cell` 을 `Reuse Queue`에 저장시킨다
    - 화면에서 새로운 `cell` 을 필요로 할 때:
        - 필요로 하는 `cell`이 `Reuse Queue`에 있다면 재사용해서 메모리를 관리
        - 없다면 새로 생성
- `dequeueResusableCell()`
    - **UITableView**의 `dequeueResusableCell()` 메서드로 특정 indexPath에 보여줄, 특정 identifier를 가진 **UITableViewCell**을 반환
    - tableView가 dataSource 객체한테 indexPath에 해당하는 cell을 달라고하면 dataSource가 reuse queue 에게 cell 있는지 물어본다. `dequeueResusableCell()` 이 TableView의 메서드긴하지만 그래도 재사용 큐에서 재사용 셀을 꺼내거나 새로 만드는 주체는 cell reuse queue다.
    - Table View랑 연관된 Cell Reuse Queue 가 무엇인지 알기 위해 Table View에 해당 메서드가 있는 것일뿐

    ```swift
    func dequeueReusableCell(withIdentifier identifier: String, 
                         for indexPath: IndexPath) -> UITableViewCell

    let cell = tableView.dequeueResusableCell(withIdentifier: "셀identifier", for: indexPath)
    ```
