# Struct vs Class

## [Structures vs Classes](https://docs.swift.org/swift-book/LanguageGuide/ClassesAndStructures.html#ID83)

"As a general guideline, **prefer structures** because they’re easier to reason about, and use classes when they’re appropriate or necessary. In practice, this means most of the custom data types you define will be structures and enumerations."

- 클래스의 추가적인 기능
    - 상속
    - 타입 캐스팅으로 런타임 때 인스턴스의 타입을 확인하거나 변환
    - Deinitializer로 할당했던 자원 해제
    - Reference counting 으로 여러 참조 인스턴스를 둠

## [Choosing Between Structures and Classes](https://developer.apple.com/documentation/swift/choosing_between_structures_and_classes)

`idendity` - 같은 프로퍼티 값을 지닌 두 인스턴스도 서로 다른 identity로 취급

- identity operator `===`

### 스트럭트

- Default는 스트럭트를 사용
- "Use Structures When You Don't Control Identity" → 내가 관리하지 않는 entity에 관한 데이터를 모델링할 때 struct 사용
- protocol inheritance로도 struct에 class 상속과 같은 구조를 만들 수 있다
    - 데이터의 모델화
    - 데이터 타입의 상하관계 설계

### 클래스

- 클래스 인스턴스를 변경하면 그것을 참조한 다른 인스턴스도 변경
- "Use Classes When You Need to Control Identity" → 위에서 말한 "인스턴스를 변경하면 그것을 참조한 다른 인스턴스도 변경"된다는게 identity라는 것 같은데 무슨 말일까 🤔

## identity operator

- [클래스와 구조체 비교 문서](https://developer.apple.com/documentation/swift/choosing_between_structures_and_classes)에서 "Use Classes When You Need to Control Identity" 라는 말을 보고 이해가 잘 안 갔는데 이번에 identity가 identity operator의 identity가 아닐까 추측해보았다!
- identity operator 항등 연산자라는 것이 있는데 바로 `===` 혹은 `!==` 를 뜻하며 값과 그 값이 저장된 주소까지 같아야 같다고 할 수 있다.
- 우선 swift에는 **참조타입**(reference type)과 **값타입**(value type) 이 있다
    - 참조타입은 **클래스와** **클로저**가 있다
    - 값타입은 **구조체**, **enum**이 있다 (Int, String등의 기본 타입과 Collection Type은 모두 구조체로 구현되어있어 이들 역시 값타입이라고 볼 수 있다. 그냥 **클래스랑 클로저 아니면 전부 값타입**)
- 값 타입은 `a = b`라고 하면 `a` 에 `b`의 값이 복사된다. 그래서 `a`를 막 바꿔도 `b`는 안 바뀐다. 그리고 `a` 는 `b` 의 복사본이기 때문에 주소가 다르다. 즉, 값은 같고 주소는 다르다

    ```swift
    a = b            // 복사됨
    a == b           // true
    a === b          // false
    ```

- 참조타입은 `c = d`라고 했을 때 `c`가 `d`의 주소와 값을 갖게 된다. (클래스의 값은 Heap에 저장되고 그 주소는 Stack에 저장됨) 그럼 여기서 `c`와 `d`는 값이 같고 주소도 같아서 `c` 를 바꾸면 `d` 도 바뀐다 참조되었으니까. 즉,  `c` 와 `d` 는 값과 주소가 같다

    ```swift
    c = d           // 참조됨
    c == d          // true
    c === d         // true
    ```
