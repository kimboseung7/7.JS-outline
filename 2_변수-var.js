// console.log(puppy); //변수를 선언하기 전에 사용할 수 없음

let puppy = "cute"; //전역변수
{
    let puppy = "so cute"; //지역변수
}

console.log(puppy) // cute

var cat ="cute";
{
    var cat = "so cute" ;
}
console.log(cat)
//블록스코프 무시하고 마지막 변수 출력