## 01장 :octopus: HTTP 개관
<br>

### Table of Contents

**Table of Contents**

[TOC](#toc)

1. [What is TOC](#11-what-is-toc)

2. [Making TOC](#12-how-to-make-toc)


[1.1 　 HTTP: Internet's Multimedia Courrier　 `mihykim`](#11---http--internet-s-multimedia-courrier)

[1.2 　 웹 클라이언트와 서버　 `mihykim`](#12---웹-클라이언트와-서버---mihykim-)

[1.3 　 리소스　 `mihykim`](#13---------mihykim-)

[1.4 　 트랜잭션　 `daelee`](#14----------daelee-)

[1.5 　 메시지　 `daelee`](#15---------daelee-)

[1.6 　 TCP 커넥션　 `secho`](#16---tcp-------secho-)

[1.7 　 프로토콜 버전　 `jehong`](#17-------------jehong-)

[1.8    웹의 구성요소 `jehong`](#18-----------jehong-)

[1.9 　 시작의 끝　 `jehong`](#19-----------jehong-)

[1.10 　추가 정보　 `taelee`](#110----------taelee-)

<br>

# TOC

## 1.1 What is TOC

## 1.2 Making TOC

### 1.1 　 HTTP: Internet's Multimedia Courrier
1. HTTP 통신에서 데이터를 전송할 경우, 개발자는 전송 중 데이터가 파괴되거나, 중복되거나, 왜곡될 수 있기 때문에 이에 유의해야 한다. (O/X)
<br>

### 1.2 　 웹 클라이언트와 서버　 `mihykim`
1. 크롬, 인터넷 익스플로러는 웹 서버에 해당한다 (O/X)
1. 클라이언트는 서버에게 HTTP 요청을 보내고 서버는 요청된 데이터를 HTTP 응답으로 돌려준다. (O/X)
<br>

### 1.3 　 리소스　 `mihykim`
1. 웹서버에서 관리하는 웹 리소스는 텍스트파일, HTML파일, AVI 동영상파일 등 정적파일로 제한된다. (O/X)
1. 사용자가 누구인지, 어떤 정보를 요청했는지, 몇 시인지 등에 따라 다른 콘텐츠를 생성하는 것을 동적콘텐츠 리소스라고 한다. (O/X)
1. MIME 타입은 클라이언트가 서버로부터 객체를 돌려받을 때, 다룰 수 있는 객체인지 확인하기 위한 목적으로 사용된다. (O/X)
1. image/jpeg, image/gif와 같은 MIME 타입은 수백 가지가 넘는다. (O/X)
1. URI(Uniform Resource Identifier, 통합 자원 식별자)는 URL과 URN 두 가지가 있다. (O/X)
1. 대부분의 URL(Uniform Resource Locator, 통합 자원 지시자)은 스킴 + 서버의 인터넷주소 + 웹서버의 리소스 이렇게 세 가지 부분으로 이루어진 표준포맷을 따른다. (O/X)
1. URN(Uniform Resource Name, 통합 자원 이름)은 고유한 이름으로 리소스의 위치에 상관없이 접근할 수 있다는 장점으로 널리 채택되고 있다. (O/X)
<br>

### 1.4 　 트랜잭션　 `daelee`
1. 모든 HTTP 요청 메세지는 한 개 이상의 메서드를 갖는다. (O/X)
1. POST 메서드의 뜻은 "서버에서 클라이언트로 지정한 리소스를 보내라" 이다. (O/X)
1. HTTP 응답 메시지의 302 상태코드는 문서가 바르게 반환되었음을 의미한다. (O/X)
1. 각 상태코드는 텍스트로 된 사유구절을 가지는데, 이는 응답 처리에 영향을 미치지 않는다. (O/X)
1. 한 웹페이지는 하나의 HTTP 트랜젝션, 즉 여러 리소스의 모음이다. (O/X)
<br>

### 1.5 　 메시지　 `daelee`
1. HTTP 메시지는 이진 형식으로 구성된다. (O/X)
1. HTTP 메시지는 `헤더` / `본문` 의 두 부분으로 이루어진다. (O/X)
1. HTTP 메시지의 헤더는 빈 줄로 끝난다. (O/X)
1. 각 헤더필드는 쉬운 구문분석을 위해 쉼표(,)로 구분되어 있는 하나의 이름과 하나의 값으로 구성된다. (O/X)
1. HTTP 메시지의 본문에는 비디오, 오디오 데이터가 담길 수 있다. (O/X)

<br>

### 1.6 　 TCP 커넥션　 `secho`
1. 자유롭게
1. 내용 작성
1. 해주세욘
<br>

### 1.7 　 프로토콜 버전　 `jehong`
여러가지 HTTP 프로토콜 버전이 존재

- **HTTP/0.9**

  - 1991년에 나온 프로토콜.

  - GET 메서드만 지원하는 등 기능적 및 디자인적 결함이 다수 있어 금새 HTTP/1.0으로 대체됐다.

- **HTTP/1.0**

  - 처음으로 널리 쓰이기 시작한 프로토콜로 그 당시 최고 기능들의 집합을 칭한다.
  - 웹페이지와의 상호작용하는 폼으로 월드 와이드 웹을 널리 퍼트리는데 일조했다.

- **HTTP/1.0+**

  - 1990년대 중반, 월드 와이드 웹의 성공과 함께 HTTP에 "keep-alive" 커넥션, 가상 호스팅 지원, 프락시 연결 지원 등의 많은 기능들이 비공식적으로 추가되었는데 이를 HTTP/1.0+라 칭한다.

- **HTTP/1.1**

  - 현재 쓰이는 HTTP로 기존 버전의 구조적 결함, 두드러진 성능 최적화, 잘못된 기능 제거에 집중했다. 
  - 1990년 중반 당시 이미 사용되고 있던 복잡해진 웹 애플리케이션과 배포를 지원한다. 

- **HTTP-NG (a.k.a. HTTP/2.0)**

  - HTTP/1.1 성능 최적화 등을 위해 제안된 것으로 구글의 SPDY프로토콜을 기반으로 설계가 진행 중이다. (10장 참고)



**퀴즈**

```
1. 현재 사용되고 있는 HTTP 버전은?
[] HTTP/0.9   [] HTTP/1.0   [] HTTP/1.0+   [] HTTP/1.1   [] HTTP/2.0
```
<br>

### 1.8  웹의 구성요소 `jehong`

이 장에서 살펴본 웹브라우저와 웹서버 외에도 웹 애플리케이션이 여러가지 있으며 그 중에는 프락시, 캐시, 게이트웨이, 터널, 에이전트가 있다. 

- **프락시 (Proxies)** - HTTP 프락시 서버

  - 클라이언트의 모든 HTTP요청을 받아 서버에 전달 (6장 참고)

  - 웹 보안, 애플리케이션 통합, 성능 최적화를 위해 중요한 요소

  - 바이러스나 성인 컨텐츠 차단 등 요청과 응답을 모두 필터링

    

- **캐시 (Caches)**

  - 많이 찾는 웹페이지를 클라이언트 가까이에 보관하는 HTTP창고 (7장 참고)
  
  - 웹캐시나 캐시 프락시는 자신을 거쳐가는 문서들 중 자주 찾는 것의 사본을 저장해두는 HTTP 프락시 서버
  
  - 클라이언트가 같은 문서를 요청 시 훨씬 빠르게 문서 다운 가능
  
  - HTTP는 캐시된 컨텐츠를 최신으로 유지하며 프라이버시도 보호하기 위한 기능 제공
  

- **게이트웨이 (Gateways)**

  - 다른 애플리케이션과 연결된 특별한 웹 서버로 다른 서버들의 중개자로 동작 (8장 참고)
  
  - HTTP 트래픽을 다른 프로토콜로 변환
  
  - 게이트웨이는 언제나 스스로가 리소스를 갖고 있는 진짜 서버인 것처럼 요청을 다뤄 때로 클라이언트는 상대가 게이트웨이인 것을 알아채지 못함
  

- **터널 (Tunnels)**

  - 두 커넥션 사이에서 테이타를 열어보지 않고 받은 그대로 전달하는 HTTP 애플리케이션
  
  - 주로 HTTP가 아닌 데이타를 하나 이상의 HTTP 커넥션을 통해 전송
  
  - 대표적인 예로 암호화된 SSL(Secure Sockets Layer) 트래픽을 HTTP 커넥션으로 전송해 웹 트래픽만 허용하는 사내 방화벽 통과


- **에이전트 (Agents)**

  - 사용자를 위해 자동화된 HTTP 요청을 만드는 준지능적(semi-intelligent) 웹클라이언트 (9장 참고)
  
  - 웹 요청을 만드는 애플리케이션은 뭐든 HTTP 에이전트로 대표적인 예는 웹브라우저
  
  - 스스로 검색엔진의 데이타베이스 등의 웹 컨텐츠를 보관하거나 웹페이지를 수집하는 등의 자동화된 에이전트도 존재 (스파이더, 웹로봇 등)


**퀴즈**

```
1. 프락시, 캐시, 게이트웨이, 터널, 에이전트는 웹서버다. (O / X)
2. 프락시는 사용자의 HTTP request를 받아 서버에 전달하지만 서버로부터 받은 response는 클라이언트에게 전달하지 않는다. (O / X)
2. 캐시는 문서의 사본을 저장해두는 서버로 캐시된 컨텐츠를 최신으로 유지하는 기능까지 제공한다. (O / X)
4. 게이트웨이는 스스로가 리소스를 보유한 진짜 서버인 것처럼 요청을 다뤄 클라이언트는 상대가 게이트웨이인 것을 알 수 없다. (O / X)
5. 터널은 HTTP가 아닌 데이타도 전송할 수 있어 웹트래픽만 허용하는 사내 방화벽도 통과할 수 있다. (O / X)
6. 웹브라우저는 웹 요청을 만드는 애플리케이션으로 HTTP 에이전트다. (O / X)
```
<br>

### 1.9 　 시작의 끝　 `jehong`
- 1장 내용
  - HTTP의 멀티미디어 전송 프로토콜로서의 역할
  
  - HTTP가  어떻게 URI로 원격 서버에 있는 멀티미디어 리소스에 이름 붙이는지
  
  - HTTP를 사용하는 웹 애플리케이션
  
- 다음 내용

  - HTTP 프로토콜, 애플리케이션, 리소스의 구조
  
<br>

### 1.10 　추가 정보　 `taelee`
1. 자유롭게
1. 내용 작성
1. 해주세욘
<br>
