/* 클릭 이벤트 추가하기 */
const boxE1 = document.querySelector('.box');

//addEventListener 메소드는 클릭 이벤트가 발생할때까지 기다렸다가 이벤트가 발생하면 연결된 함수를 실행함
//div를 클릭하면 click 메세지가 출력됨
boxE1.addEventListener('click',function() //이벤트 이름, 수행할 함수
{
    console.log('Click!!');
});