
//익명함수를 만들고 변수에 저장하여 사용
const hello = function() { 
    console.log('hello~');
}
hello();

//HTML문서를 클릭시 이벤트 호출하는 코드 작성하기
function handler(){
    alert('Clicked!');
}
document.addEventListener('click',handler);

// 이벤트리스너는 특정이벤트가 일어나면 코드를 수행하는 함수이다
// 인자: 이벤트종류, 수행할 함수
document.addEventListener('click',

function(){
    alert('Clicked!');
}


// 익명함수를 인자로 사용
document.addEventListener('click', function (){
    alert('Clicked!');
});