//산술연산자
console.log(10+2);
console.log(10-2);
console.log(10*2);
console.log(10/2);
console.log(10%2);

//대입연산자
let x = 1;

//증감연산자
console.log(++x);// 2
console.log(x++);// 2
console.log(--x);// 2
console.log(x--);// 2

//비교연산자
console.log(1 == "1"); // 값이 같으면 참
console.log(1 === "1"); // 값과 자료형이 모두 같으면 참
console.log(1 != 2);// 값이 다르면 참
console.log(1>2);
console.log(1 >= 2);
console.log(1 < 2);
console.log(1 <= 2);

//논리연산자
console.log(true && ture); //모두 참이면 참
console.log(true && false); 
console.log(true || true); // 둘 중 하나라도 참이면 참
console.log(true || false);
console.log(true || false);
console.log(!ture) // 참이면 거짓, 거짓이면 참

//문자열결합연산자
console.log("좋은" + "하루되세요")

//typeof 연산자
console.log(typeof '42'); //'String'
console.log(typeof 42); // nu
console.log(typeof 1.123);
console.log(typeof true);
console.log(typeof function(){});
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof {});
console.log(typeof []);