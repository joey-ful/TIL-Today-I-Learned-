# Struct vs Class

### [Structures vs Classes](https://docs.swift.org/swift-book/LanguageGuide/ClassesAndStructures.html#ID83)

"As a general guideline, **prefer structures** because they’re easier to reason about, and use classes when they’re appropriate or necessary. In practice, this means most of the custom data types you define will be structures and enumerations."

- 클래스의 추가적인 기능
    - 상속
    - 타입 캐스팅으로 런타임 때 인스턴스의 타입을 확인하거나 변환
    - Deinitializer로 할당했던 자원 해제
    - Reference counting 으로 여러 참조 인스턴스를 둠

### [Choosing Between Structures and Classes](https://developer.apple.com/documentation/swift/choosing_between_structures_and_classes)

`idendity` - 같은 프로퍼티 값을 지닌 두 인스턴스도 서로 다른 identity로 취급

- identity operator `===`

$**스트럭트**$

- Default는 스트럭트를 사용
- "Use Structures When You Don't Control Identity" → 내가 관리하지 않는 entity에 관한 데이터를 모델링할 때 struct 사용
- protocol inheritance로도 struct에 class 상속과 같은 구조를 만들 수 있다
    - 데이터의 모델화
    - 데이터 타입의 상하관계 설계
    - 이게 다 무슨 소리야

$클래스$

- 클래스 인스턴스를 변경하면 그것을 참조한 다른 인스턴스도 변경
- "Use Classes When You Need to Control Identity" → 위에서 말한 "인스턴스를 변경하면 그것을 참조한 다른 인스턴스도 변경"된다는게 identity라는 것 같은데 무슨 말일까 🤔
