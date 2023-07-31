# typescript-chain 💰⛓️

<br>![스크린샷 2023-07-31 오전 4 45 07(2)](https://github.com/widrns15/typescript-chain/assets/85780501/d12a2b23-21a6-433d-9952-7490bf194058)

</br>

> #### 타입스크립트로 블록체인 만들기

</br>

## 1. 제작 기간

- 2023/07/26 ~ 2023/07/31

</br>

## 2. 사용 기술

<p>

<img src="https://img.shields.io/badge/-TypeScript-05122A?style=flat&logo=TypeScript&logoColor=1572B6"/>

<img src="https://img.shields.io/badge/-JavaScript-05122A?style=flat&logo=JavaScript"/>

</p>

</br>

## 3. 프로젝트 목표

- TypeScript를 사용하여 간단한 블록체인 구현
- 블록체인 블록의 체인 & 해시 개념 이해하기

</br>

## 4. 주요 기능

#### 1. 블록 형태 정의 (BlockShape)

- 블록의 구조를 정의한 인터페이스
- 각 블록은 해시 값(hash), 이전 블록의 해시 값(prevhash), 블록의 높이(height), 그리고 저장할 데이터(data)로 구성

#### 2. 블록 클래스 정의 (Block)

- BlockShape 인터페이스를 구현한 블록 클래스
- 블록 클래스는 생성자를 통해 이전 블록의 해시(prevhash), 블록의 높이(height), 데이터(data)를 받아와 새로운 블록을 생성
- 생성자에서는 Block.calculateHash 정적 메서드를 호출하여 블록의 해시 값을 계산하고, 이 값을 현재 블록의 해시 값으로 저장
- calculateHash 메서드는 이전 블록의 해시 값, 블록의 높이, 데이터를 이용하여 새로운 블록의 해시 값을 계산
- 해시 값은 SHA-256 알고리즘을 사용하여 계산

#### 3. 블록체인 클래스 정의 (Blockchain)

- 블록들의 배열을 관리하는 블록체인 클래스
- 생성자에서는 블록 배열을 초기화
- getPrevHash 메서드: 이전 블록의 해시 값을 가져오는 메서드 & 블록체인에 아직 블록이 없을 경우 빈 문자열을 반환
- addBlock 메서드: 새로운 데이터를 입력받아 새 블록을 생성하고 블록체인에 추가
- getBlocks 메서드: 현재 블록체인의 모든 블록들의 배열을 반환

#### 4. 코드 실행

- 코드의 마지막 부분에서 블록체인 인스턴스를 생성하고, addBlock 메서드를 통해 데이터를 갖는 새 블록들을 차례로 생성하고 블록체인에 추가
