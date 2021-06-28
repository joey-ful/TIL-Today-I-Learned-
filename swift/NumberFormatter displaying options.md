### [maximumIntegerDigits](https://developer.apple.com/documentation/foundation/numberformatter/1407284-maximumintegerdigits)

- 소수점 위만 적용
- 소수점 위를 시작으로 maximumIntegerDigits 개수만큼만 표현

```swift
let numberFormatter = NumberFormatter()

numberFormatter.maximumIntegerDigits = 42 // default
numberFormatter.string(from: 12345) // 12345

numberFormatter.maximumIntegerDigits = 3
numberFormatter.string(from: 12345) // 345
numberFormatter.string(from: 12.345) // 12
```

### [maximumFractionDigits](https://developer.apple.com/documentation/foundation/numberformatter/1415364-maximumfractiondigits)

- 소수점 아래만 적용
- 소수점 아래부터 maximumFractionDigits 개수만큼만 표현

```swift
let numberFormatter = NumberFormatter()

numberFormatter.maximumFractionDigits = 0 // default
numberFormatter.string(from: 123.456) // 123

numberFormatter.maximumFractionDigits = 3
numberFormatter.string(from: 123.456789) // 123.457
```

### [useSignificantDigits](https://developer.apple.com/documentation/foundation/numberformatter/1417793-usessignificantdigits)

- 이 값을 true로 세팅하면 minimumSignificantDigits 와 maximumSignificantDigits 속성으로 표현할 최소/최대 significant digit 개수를 지정할 수 있다
- default 로 minimumSignificantDigits = 1, maximumSignificantDigits = 6이다

```swift
var numberFormatter = NumberFormatter()

// Using significant digits
numberFormatter.usesSignificantDigits = true
numberFormatter.string(from: 12345678) // 12345700
numberFormatter.string(from: 1234.5678) // 1234.57
numberFormatter.string(from: 100.2345678) // 100.235
numberFormatter.string(from: 1.230000) // 1.23
numberFormatter.string(from: 0.00000123) // 0.00000123

// Using integer and fraction digits
numberFormatter.usesSignificantDigits = false
numberFormatter.string(from: 12345678) // 12345678
numberFormatter.string(from: 1234.5678) // 1235
numberFormatter.string(from: 100.2345678) // 100
numberFormatter.string(from: 1.230000) // 1
numberFormatter.string(from: 0.00000123) // 0
```

- 소수점 이후의 의미없는 0들은 모두 사라진다

### [maximumSignificantDigits](https://developer.apple.com/documentation/foundation/numberformatter/1412008-maximumsignificantdigits)

- 소수점 위아래 상관없이 significant digit만 표현
    - default 값은 6
- useSignificantDigits가 true여야 사용할 수 있는 옵션

```swift
let numberFormatter = NumberFormatter()

numberFormatter.usesSignificantDigits = true

numberFormatter.maximumSignificantDigits = 5
numberFormatter.string(from: 123456) // 123460
numberFormatter.string(from: 123.456) // 123.46
numberFormatter.string(from: 100.234) // 100.23
numberFormatter.string(from: 1.230000) // 1.23
numberFormatter.string(from: 0.00012345) // 0.00012345
```

- 소수점 위의 숫자가 maximum 개수를 넘어가면 나머지는 0으로 바꾼다
- 소수점 아래의 의미없는 0은 제거한다
