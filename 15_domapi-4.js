/* html 요소에 클래스 속성 추가하기 */
const boxE1 = document.querySelector('.box');

boxE1.addEventListener('click', function(){

    boxE1.classList.toggle('active'); //없으면 엑티브를 추가

    let hasActive = boxE1.classList.contains('active');
    console.log(hasActive)
});