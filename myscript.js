var heading = document.querySelector('#heading');
heading.onclick = function(){
    heading.style.color = "red";
}

//알림창
//alert("hi")


//확인창
//var reply = confirm("정말 바꿀거임?")


//기본값 삽입
//var name = prompt("이름을 입력하세요", "임동현")


//기본값 제외
var name = prompt("이름을 입력하세요")
document.write("<strong><big>" + name + "</big></strong>님, 환영합니다.<br>")

var currentyear = 2021;
var birthyear;
var age;

birthyear = prompt("태어난 연도를 입력하세요. (YYYY)");
age = currentyear - birthyear + 1;
document.write(currentyear + "년 현재<br>");
document.write("당신의 나이는" + age + "세 입니다.");