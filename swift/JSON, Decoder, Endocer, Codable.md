# JSON

- 객체를 문자열로 나타내는 문법
    - string으로도 이미지를 표현가능하지만 그렇게까지는 하지 않고 이미지는 보통 다른 곳에 저장해놓고 이미지 주소만 전달하는 형식을 취함
    - `{}`, `[]`, 문자열, 숫자 등으로 구성됨
- 옛날에는 컴퓨터 성능이 좋지 않아서 XML을 사용했음
    - XML이 더 빠르고 기계친화적이지만 사람이 읽기 어려움

### JSONDecoder

- JSON 문자열의 `{}` 는 객체를 뜻하지만 Swift는 이를 알 수 없기 때문에 매칭되는 객체를 만들고 해당 타입으로 decode 해야함

> CodingKey - A type that can be used as a key for encoding and decoding.

- JSON 객체의 키 이름을 바꾸고 싶을 때 CodingKey 활용

### Codable = Encodable & Decodable

### Encoder

다른 표현 형태로 바꾸는 것
메모리에 있던 상태 그대로 저장할 수도 있지만 사람이 읽을 수 있고 다른 컴퓨터도 읽을 수 있도록 특별한 번역기를 거쳐 내보낸 형태로 저장

- 번역기가 JSON Encoder면 JSON 스트링으로 변환해서 저장

### Decoder

타입이름에 self를 붙이면 => 타입을 표현하는 타입의 인스턴스

- 타입을 표현하는 타입의 인스턴스는 메타 타입의 인스턴스

data 타입은 바이너리

- 다른 컴퓨터에서 정보를 받아올 때 JSON을 많이 사용 (ex. 서버에서)
    - 서버에서는 JSON 형태가 어떤지 문서를 제공 API
- 그러면 그건 바이너리 형태로 들어옴
- 그래서 JSON decoder는 0과 1로 들어온 것을 디코딩해줌
- JSON 파일을 읽거나 네트워크에서 받아와도 String타입이 아니라 data 타입이다 (0과 1)
