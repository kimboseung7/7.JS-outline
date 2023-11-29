const child = {
    age : 10
}

const parent = {
    firstName: '이',
    country: "한국"
}

child.firstName = '김'; //자식. --> 변경가능
child.country = '미국';
child.age = 20;

child.__proto__ = parent;
console.log(child.age);
console.log(child.firstName);
console.log(child.country);