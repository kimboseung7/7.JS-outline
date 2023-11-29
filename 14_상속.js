//객체 만들기

const animal = {
    leg: 4,
    tial: 1,
}

const dog = { 
    sound: 'wang'
}

dog.__proto__=animal; //부모 animal 자식 dog // proto--> 부모를 가르키는 속성 부모가 가진 속성 사용 가능

console.log(dog.leg);
console.log(dog.tail);
console.log(dog.sound);