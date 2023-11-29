//DomContentLoaded --> 문서가 만들어질 때 처리하겠다
document.addEventListener('DOMContentLoaded',
    () => {

        const btn1 = document.getElementById("btn1");
        const btn2 = document.getElementById("btn2");
        // getElementById
        // 특정 id를 가진 요소를 검색합니다
        btn1.onclick = function(){
            alert(this); //this는 버튼
            this.textContent = '버튼이름변경';
            //일반함수
        }
        btn2.onclick = () => {
            alert(this); //this는 전역 객체 (화살표 함수)
            //화살표함수
        }
    });

    // 차이점 

