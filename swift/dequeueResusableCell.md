# TableView

```swift
class ItemCell: UITableViewCell {}
```

ItemCell이라는 커스텀 셀을 사용하는 경우 다음과 같이 재사용셀을 가져온다

```swift
guard let cell = tableView.dequeueReusableCell(withIdentifier: "itemCell", for: indexPath) as? ItemCell else {
    return UITableViewCell()
}
```

위 코드는 사실 아래 두 가지로 분리할 수 있다

```swift
let reusableCell = tableView.dequeueReusableCell(withIdentifier: "itemCell", for: indexPath)

guard let cell as? ItemCell else {
    return UITableViewCell()
}
```

- `dequeueReusableCell(withIdentifier:for:)는 UITableViewCell을 리턴한다
- 하지만 여기서 사용할 것은 그 자식인 ItemCell이기 때문에 다운캐스팅을 해줘야 하는 것!
