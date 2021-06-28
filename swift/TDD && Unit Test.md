# TDD (Test-Driven Development)

Kent Beck

## 방법

- Writing a Failing Test
- Write just enough code to pass it
- Change code for better without changing the behavior

## 목적

- 테스트는 훌륭한 스펙 정의 문서가 된다
    - 테스트만 보더라도 이 프로그램의 기대치, 요구사항을 파악할 수 있다
- 테스트를 하지 않으면 코드 수정이 어렵고 두려워진다
- 테스트를 고려하는 코드를 작성하면 명확하고 구체적인 목표를 갖고 진행이 가능

## 왜 현업에서 적용하는 곳이 적을까?

- 해본 사람이 적다
- 처음부터 TDD로 작성된 것이 아니라면 당장 적용하기 쉽지 않다

## Unit Test

- 코드의 특정 부분이 의도된 대로 정확히 작동하는지 검증하는 절차
- 테스트 케이스를 서로 독립적이어야 한다
    - 타입들의 결합도를 낮추면 테스트가 용이해진다

### 어떤 테스트

- FIRST
Fast, Independent, Repeatable, Self-validating, Timely
- Right - BICEP
right 결과가 올바른지
boundary 경계 조건이 맞는지
inverse 역의 관계를 확인할 수 있는지
corss-check 다른 수단을 사용해서 결과를 교차 확인 할 수 있나
error condition 에러 조건을 강제로 만들 수 있나
performance 성능 특성이 한도내에 있나

## 새 프로젝트에 테스트 추가

- Include Tests를 클릭해서 프로젝트 생성
- UnitTest와 UITest가 있는데 UITest는 잘 안 쓰임
- 퍼포먼스 테스트 - self.measure를 통해 함수 실행에 얼마나 걸리는지 확인해줌
### Test

- 테스트 할 타입 생성
- 함수 앞에 test를 붙여 테스트 케이스라는 것을 명시
- cmd + U 로 테스트

```swift
struct Calculator {
	func calculate(with string: String) -> Int {
    	return 0
    }
}

class StringCalculatorTests: XCTestCase {
  let sut = Calculator()

  func test_문자열1절달하면_1이나온다() {
      XCTAssertEqual(sut.calculate(with: "1"), 1)
//      XCTAssert(sut.calculate(with: "1") == 1)
  }
}

```

### 일부러 틀리는 이유

- 테스트를 맞게 설정해두면 코드가 틀려도 테스트가 맞게 되니까 일부러 틀렸다고 설정
- 내가 이 요구사항을 제대로 이해했다는 반증

## 기존 프로젝트에 테스트 추가하기

![https://images.velog.io/images/jehjong/post/7092778b-d669-4b08-8b9b-b211f671959c/image.png](https://images.velog.io/images/jehjong/post/7092778b-d669-4b08-8b9b-b211f671959c/image.png)

- 마름모 모양 아이콘 Show the Test Navigator로 간다
- 아래 `+` 를 눌러 `New Unit Test Target..` 클릭

![https://images.velog.io/images/jehjong/post/2dbe2b8f-e2ef-4281-ba58-3dbe32119549/image.png](https://images.velog.io/images/jehjong/post/2dbe2b8f-e2ef-4281-ba58-3dbe32119549/image.png)

- `Unit Test Bundle` 선택

![https://images.velog.io/images/jehjong/post/df1f964d-221f-4d40-ae30-e08c79e0877e/image.png](https://images.velog.io/images/jehjong/post/df1f964d-221f-4d40-ae30-e08c79e0877e/image.png)

- 테스트 이름 작성

![https://images.velog.io/images/jehjong/post/df206916-7e07-47a8-b367-99a1c57a9ebc/image.png](https://images.velog.io/images/jehjong/post/df206916-7e07-47a8-b367-99a1c57a9ebc/image.png)

- 테스트 파일에 다음과 같이 프로젝트이름 import
- 처음부터 Test를 추가하면 할 필요 없지만 도중에 추가하면 저 문구 작성 필요

```swift
@testable import 프로젝트이름

```
