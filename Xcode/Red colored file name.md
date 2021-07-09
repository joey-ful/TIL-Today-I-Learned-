# Xcode 내 빨갛게 표시된 파일/디렉토리

- Xcode는 파일이나 폴더의 reference를 갖고 있다
- 하지만 reference는 있는데 해당 파일이나 디렉토리가 존재하지 않는다면 빨간색으로 표시된다
    - Xcode가 아닌 finder에서 파일/디렉토리를 삭제 후 push하고 이를 다른 사람이 pull 받은 경우

        ⇒ reference가 있었는데 파일/폴더가 지워짐

    - Xcode에 빈 디렉토리를 생성해서 push하고 이를 다른 사람이 pull 받은 경우

        ⇒ git은 파일을 트랙하는 것이지 디렉토리를 트랙하지 않기 때문에 빈 디렉토리는 add 되지 않기때문

        [git FAQ](https://git.wiki.kernel.org/index.php/GitFaq#Can_I_add_empty_directories.3F)
