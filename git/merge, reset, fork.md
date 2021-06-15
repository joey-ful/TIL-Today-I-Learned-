- A 브랜치에서 `git merge B` 를 하면 A에 B를 병합한다
    - 대부분의 경우 master나 main에 브랜치에서 병합하고자하는 브랜치를 merge하면 될 것 같다
- 충돌이 생기려면 두 브랜치에서 같은 파일의 같은 부분을 각각 수정하고 커밋해야 한다
    - 한쪽 브랜치에서만 수정 후 머지하면 덮어씌워져 버린다
- `git reset` 옵션에 대해 복습했다
    - `--hard` 지난 커밋 이후의 모든 활동이 사라진다. 생성한 파일, 수정한 내역, add한거, 그냥 커밋 안 한 모든게 싹 사라짐
    - `--mixed` 리셋의 default 옵션으로 stage된 내역 (add한 것들)이 사라지고 지난 커밋이 취소된다. 지난 커밋 이후에 작업한 것을 남겨두고는 싶은데 stage할지 말지 고민일 때 사용
    - `--soft` 지난 커밋 이후의 활동은 남긴채 커밋만 취소한다. add한 것들도 남아있는다. 지난 커밋 내역과 그 이후 변경 내역을 합쳐 새로운 버전을 커밋할 수 있다
- pull request 를 연습해보았다
    - 수정하고자 하는 원격 저장소를 fork 한다
    - fork한 저장소를 로컬에 clone한다
    - 새로운 브랜치를 생성해서 수정, 커밋, 푸쉬한다
    - 원격 저장소에서 풀리퀘스트를 생성 후 충돌이 있다면 해결한다
    - merge 버튼을 누르면 머지 완료!

- 미션 도중에 git reset을 사용해야할 일이 있었는데 `--soft, --mixed, --hard` 의 차이를 설명하려고 보니 말문이 막혔다. 대충 안다고 생각했는데 하나도 모르는 것과 별 다를 바가 없어서 복습을 했다. 이 외에도 git revert, rebase, cherry-pick 등 제대로 알지 못하는 기능들이 많은데 이것들을 구분지어 정리할 필요가 있을 것 같다.
- 미션에서 원격 저장소를 FORK 또는 CLONE 하라고 되어있었는데 clone을 해서 푸쉬하면 권한이 없다며 아래와 같은 에러가 뜬다. fork는 되는데 왜 clone은 안되는지 모르겠다. 😣 fork도 권한을 안 주면 안돼야하는게 아닌가..? fork와 clone의 차이에 대해서도 정리할 필요가 있을 것 같다..

    remote: Permission to `원격저장소` denied to `내가만든브랜치`.
    fatal: unable to access `'https://github.com/원격저장소주소'`: The requested URL returned error: 403

    clone은 왠지 아래 페이지에서 collaborator를 초대하는 식으로 권한을 주면 될 것 같은데 시도해보진 않았다

    ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/993ffb47-7b4a-426a-9c34-89889ec7501c/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/993ffb47-7b4a-426a-9c34-89889ec7501c/Untitled.png)

- `git checkout -t origin/브랜치명` 의 기능을 잘 모르겠다 😖
