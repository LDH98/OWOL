        //heading이라는 변수 선언하고 h1 태그를 저장함.
        let heading = document.querySelector("#heading");

        //heading = h1, h1을 클릭하면 글 색을 red로 변경해라.
        heading.onclick = function(){
            heading.style.color = "red";
        }