# 20210503

- `layoutIfNeeded` method changes the view immediately when there are updates
  - Used to animate constraints
- Auto layout constraints can be brought as @IBOutlet variables
- `viewDidLoad()` doesn't show the view yet
- `viewDidAppear()` shows the view
- An animation requires three elements: beginning, end, duration


## UICollectionView

```swift
class BountyViewController: UIViewController, UICollectionViewDataSource, UICollectionViewDelegate, UICollectionViewDelegateFlowLayout {

}
```

### UICollectionViewDataSource
- Return how many cells to show
```swift
func collectionView(_ collectionView: UICollectionView, numberOfItemsInSection section: Int) -> Int {
    return viewModel.numOfBountyInfoList
}
```

- Define how to present the cell (structure)
```swift
func collectionView(_ collectionView: UICollectionView, cellForItemAt indexPath: IndexPath) -> UICollectionViewCell {
    guard let cell = collectionView.dequeueReusableCell(withReuseIdentifier: "GridCell", for: indexPath) as? GridCell else {
        return UICollectionViewCell()
    }
    
    let bountyInfo = viewModel.bountyInfo(at: indexPath.item)
    cell.update(info: bountyInfo)
    
    return cell
}
```

### UICollectionViewDelegate
- Define action when the cell is clicked
```swift
func collectionView(_ collectionView: UICollectionView, didSelectItemAt indexPath: IndexPath) {
    print("--> \(indexPath.row)")
    performSegue(withIdentifier: "showDetail", sender: indexPath.row)
}
```

### UICollectionViewDelegateFlowLayoutlayout
- Calculate the size of the cell so that the View layout remains consistent throughout different devices
- Bring collection width with `collectionView.bounds.width`

```swift
func collectionView(_ collectionView: UICollectionView, layout collectionViewLayout: UICollectionViewLayout, sizeForItemAt indexPath: IndexPath) -> CGSize {
    let itemSpacing: CGFloat = 10
    let textAreaHeight: CGFloat = 65

    let width: CGFloat = (collectionView.bounds.width - itemSpacing) / 2
    let height: CGFloat = width * 10/7 + textAreaHeight
    
    return CGSize(width: width, height: height)
}
```