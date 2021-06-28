### 세자리 수마다 comma 넣기

```swift
let numberformatter = NumberFormatter()
let price = 123456789

numberformatter.numberStyle = .decimal
print(numberformatter.string(for: price)!)
// 123,456,789
print(numberformatter.string(for: decimalPrice)!)
// 123,456,789.123
```

### spellOut

```swift
numberformatter.numberStyle = .spellOut
print(numberformatter.string(for: price)!)
// one hundred twenty-three million four hundred fifty-six thousand seven hundred eighty-nine
```
