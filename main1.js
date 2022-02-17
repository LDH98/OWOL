'use strict'; //중요

//2. Variable = 변경될 수 있는 값 (변수)
//let (ES6에서 추가됨)


let globalName = 'global name';
{
    let name = 'ellie';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
}
console.log(name);
console.log(globalName);

// var 쓰지마셈
// var hoisting ★중요 중요 중요★
// var no block scope

{
    age = 4;
    var age;
}
console.log(age);


// 3. Contants 절대 바뀌지 않는 값
// 보안상 이유
// 다른 개발자가 변경할때 편함

// 4. Variable types

// 5. Number

// 6. String
