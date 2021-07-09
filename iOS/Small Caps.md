## Small Caps

acronyms, 숫자, punctuation을 작게 만드는 것
create subtle information hierarchy by de-emphasizing text

![https://images.velog.io/images/jehjong/post/923b264b-83d0-4768-9055-71a6a99acb0f/image.png](https://images.velog.io/images/jehjong/post/923b264b-83d0-4768-9055-71a6a99acb0f/image.png)

대문자로만 이루어진 텍스트는 다른 텍스트들에 비해 너무 크다

![https://images.velog.io/images/jehjong/post/3f95582e-04ef-451f-b7fb-2e85bf619cb5/image.png](https://images.velog.io/images/jehjong/post/3f95582e-04ef-451f-b7fb-2e85bf619cb5/image.png)

하지만 폰트크기를 줄이면 다른 텍스트들에 비해 글씨가 더 light해지고 더 dense해진다

![https://images.velog.io/images/jehjong/post/fc215c72-45fc-4007-91e1-4366bf6691fd/image.png](https://images.velog.io/images/jehjong/post/fc215c72-45fc-4007-91e1-4366bf6691fd/image.png)

Small Caps를 사용하면 크기도 다른 텍스트들과 비슷해지면서 stroke thickness와 density도 이전과 같게 유지할 수 있다

![https://images.velog.io/images/jehjong/post/d66ffc39-04b0-4b25-9ba7-99802d8a9b95/image.png](https://images.velog.io/images/jehjong/post/d66ffc39-04b0-4b25-9ba7-99802d8a9b95/image.png)

### Small Caps from Uppercase

대문자를 small caps로 바꾸는 것

- 모두 upper 케이스일 때 모두 small caps가 된다 => 보기 좋음
- mixed케이스일 때 대문자는 small caps, 소문자는 소문자로 남는다 => 더 보기 안 좋아진다
- 모두 lower케이스일 때는 전부 소문자가 된다 => 적용하기 전과 차이가 없음

코드적으로 구현

    ![https://images.velog.io/images/jehjong/post/51d12080-4096-462e-ad0d-db89d7658515/image.png](https://images.velog.io/images/jehjong/post/51d12080-4096-462e-ad0d-db89d7658515/image.png)

    ![https://images.velog.io/images/jehjong/post/b9afecf1-4c42-4526-b05c-c2c6966e9609/image.png](https://images.velog.io/images/jehjong/post/b9afecf1-4c42-4526-b05c-c2c6966e9609/image.png)

### Small Caps from Lowercase

소문자를 small caps로 바꾸는 것

- 모두 upper 케이스일 때는 전부 대문자가 된다 => 적용하기 전과 차이가 없음
- mixed케이스일 때는 대문자는 대문자, 소문자는 small caps가 된다 => 모두 대문자임에도 대문자와 소문자를 구분할 수 있어서 좋다. 애플은 주로 지도에서 사용한다
- 모두 lower 케이스일 때는 전부 small caps가 된다 => 이것도 보기 좋다

코드로 구현

    ![https://images.velog.io/images/jehjong/post/53a742b2-eb49-42d8-a6fc-5f17d7640d8f/image.png](https://images.velog.io/images/jehjong/post/53a742b2-eb49-42d8-a6fc-5f17d7640d8f/image.png)

    ![https://images.velog.io/images/jehjong/post/eba4775f-e260-4e82-bb17-a0118dd2129d/image.png](https://images.velog.io/images/jehjong/post/eba4775f-e260-4e82-bb17-a0118dd2129d/image.png)
