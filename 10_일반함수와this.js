/* this 키워드 */ 

const people = {
    name: 'gildong',
    say: function(){
        console.log(this)
    }
}
people.say(); //호출 한쪽 people: people

const sayPeople = people.say;
sayPeople(); //호출 한쪽: 전역(global)
