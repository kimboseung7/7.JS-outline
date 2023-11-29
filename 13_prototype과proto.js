function person(name ,age) {
    this.name = name;
    this.age =age;
}
person.prototype.hair = 'black';
let kim = new person('김', 20); //객체 생성
let park = new person('박',30);

console.log(kim.name);//name과 age는 정의 해놓음
console.log(kim.age);
console.log(kim.hair);//부모한테 올라가서 prototype안에 hair가 있는지 확인

console.log(park.name);
console.log(park.age);
console.log(park.hair);

console.log(person.prototype);
console.log(kim.__proto__);
