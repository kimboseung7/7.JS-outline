/* Arrray(배열) */
const arr1 = ['Apple', 'Banana','Cherry'];
console.log(arr1[0]); //인덱스 사용하여 배열의 값
console.log(arr1[1]);
console.log(arr1[2]);

const arr2 = ['a','b',1,2,true] // 자료형이 달라도 
arr2.push(3) //배열의 push메소드로 새로운 요소 추가


console.log(arr2)

const objArr = [];

// const인데 왜 값을 변경할 수 있을까?
objArr.push({name:'Americano'})
objArr.push({name:"Latte"});

console.log(objArr);
console.log(objArr);
console.log(objArr.length);