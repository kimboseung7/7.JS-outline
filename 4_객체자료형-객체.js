/*object(객체)*/ 

const user ={
    name : '둘리',
    age: 10,
    get_name: function(){ //함수
        console.log(This.name);
    }
};

//객체의 포로퍼티를 꺼내기
console.log(user.name); //도트연산자 사용
console.log(user["age"]); //대괄호 사용