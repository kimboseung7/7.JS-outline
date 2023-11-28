/* while문 */

//조건을 만족하는 동안 코드를 반복 실행 (반복횟수가 명확하지 않을때 사용)
let i = 1;
while (i <= 10){
    console.log(i);
    i++
}

/* for문 */
//조건을 만족하는 동안 코드를 반복 실행 (반복횟수가 명확할 때 사용)
for (let i = 1; 1<=10; i++){ //초기식; 조건식; 증감식
    console.log(i);
}

/* for-in문 */
let arr =[3,4,5];

for(let i in arr){
    console.log(i+','+ arr[i]); 
}