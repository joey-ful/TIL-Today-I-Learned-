# Access Control

모듈 > 소스 파일

## Entity의 access levels

**Entity** - access control이 적용될 수 있는 모든 것 (프로퍼티, 타입, 함수 등)

- Open access - 다른 모듈의 파일에서 사용 가능. 클래스와 클래스 멤버에만 해당되는 것으로 다른 모듈에서 상속을 받아 subclass를 만들거나 override하는 것이 가능
- Public access - 다른 모듈의 소스 파일에서 사용 가능
- Internal access - default. 같은 모듈 내에서만 사용 가능
- File-private access - 같은 소스 파일 내에서만 사용 가능
- Private access - 같은 파일의 같은 선언? 및 익스텐션에서 사용 가능
