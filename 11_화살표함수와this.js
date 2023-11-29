/* this 키워드 */ 

const people = {
    name: 'gildong',
    say: ()=>{ // 화살표는 function키워드 생략 가능
        console.log(this)
    }
}

console.log(this); 

people.say(); //호출 한쪽: 전역 --> 상위 스코프를 빌려서 
//윈도우객체를 가르킴

const sayPeople = people.say;
sayPeople(); //호출 한쪽: 전역(global)
