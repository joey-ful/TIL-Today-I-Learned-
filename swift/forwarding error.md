### 에러 전달하기

- 에러를 전달해주는 함수에 do-catch를 써야하는 줄 알아서 고민이 많았다. 전달만 해주는 함수인데 do-catch를 써야하니 에러를 한번 전달할 때마다 코드가 마구마구 늘어나버리기 때문이다 😱
- 심지어 에러를 또 던져줘야하는 줄 알고 나는 아래와 같은 코드를 작성했었다. 에러를 받아서 또 던지기 위해 catch한 걸 바로 throw하는 것!

```swift
order() throws {
    do {
        try checkStock()
    } catch FruitStoreError.invalidFruit {
        throw FruitStoreError.invalidFruit
    } catch FruitStoreError.outOfStock {
        throw FruitStoreError.outOfStock
    }
}
```

- 하지만 아래처럼 try만 하면 된다 😱 이럴수가!! 아니 이런 말은 공식문서에 없었잖아요... 😫 엄청나게 간단해져서 충격적이기도 하고 너무 골치아팠던 문제가 말끔히 해결돼서 무척 기뻤다! 😆 🥳 

```swift
order() throws {
    try checkStock()
}
```

- 해당 내용을 어떻게 찾아야하나 어제 고민이 많았는데 마침 Coden에게 도움을 받은 직후 **적절한 검색어**를 발견했다. 그것은 바로 forward error! 이 검색어를 몰라서 흐윽...😭 검색어를 알면 금방 해결될 때가 많은데 뭐라고 검색해야할지 몰라서 쩔쩔매는 경우가 참 많은 것 같다. 아무튼 swift forward error 라고 치면 [나랑 같은 고민을 했던 사람의 질문](https://stackoverflow.com/questions/33350360/forwarding-an-error-in-swift)을 stackoverflow에서 볼 수 있다. 심지어 에러를 캐치해서 다시 던지는 코드 형태가 내가 했던거랑 똑같다 ㅋㅋㅋㅋㅋㅋ..... 😂

    ![https://images.velog.io/images/jehjong/post/02c5a876-85c3-4d6d-8fed-12f1894ad246/image.png](https://images.velog.io/images/jehjong/post/02c5a876-85c3-4d6d-8fed-12f1894ad246/image.png)
