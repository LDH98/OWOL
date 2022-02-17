 //함수 calc()선언과 구현을 하고 있다.
function calc(){
    let currentYear = 2022; //올해 년도를 변수에 저장함.

    //사용자로부터 입력을 받은 값으로 변수에 저장함.
    let birthYear = prompt("태어난 년도를 입력하세요.","YYYY");

    //실제 나이를 구하기 위한 코드
    let age = currentYear - birthYear + 1;
    
    //document는 현제 웹브라우저의 페이지를 의미함
    //querySelector()는 id가 result인 웹 요소(div)를 의미한다.
    //innerHTML은, 대입한 값으로 html문서에 변경한다.
    document.querySelector("#result").innerHTML = 
    "당신의 나이는 " + age + "세 입니다."
}