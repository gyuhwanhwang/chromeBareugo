# BareuGo Chrome App

# 인공지능을 활용한 유해언어 차단 크롬 앱

## 1. Background 배경

-   With the development of the Internet, the incidence of cyber violence increases, and among them, verbal violence is the biggest problem.
-   Language violence adversely affects legal issues and personal psychological aspects.
-   We intend to present a solution to this problem by developing a service using machine learning and deep learning.

-   악플로 인한 사회적 문제가 연예인의 극단적인 선택으로까지 이어지는 것을 보고 유해언어의 심각성을 느끼게 되었습니다.
-   또한, 유해언어에 취약한 아동/청소년 계층들에게 조금이나마 노출의 정도를 줄이고자 해당 프로젝트를 기획하고 진행하게 되었습니다.

## 2. Technologies Used 사용 기술

-   보편성을 확보하기 위해 웹 환경에서의 적용을 고려하여 클라이언트 프로그램으로 크롬 확장프로그램을 개발하였습니다.
    -   JavaScript
    -   XMLHttpRequest 등 Web API
-   크롬 앱의 요청을 받아 유해언어를 분류해주는 자연어처리 인공지능 모델과, 웹 요청을 처리해주는 서버를 개발했습니다.
    -   Python
    -   Pytorch
    -   BERT
    -   Django

## 3. Demonstration 데모

-   UI

<img src="images\ui.JPG" width="50%" height="20%" alt="UI"></img>

-   적용 전

<img src="images\before.JPG" width="70%" height="30%" alt="적용 전"></img>

-   적용 후

<img src="images\after.JPG" width="70%" height="30%" alt="적용 후"></img>
