var body = document.getElementById('gradient'); // body의 그라디언트 색상 변경 위해
var color1 = document.querySelector('.color1'); // 컬러입력창1
var color2 = document.querySelector('.color2'); // 컬러입력창2
var h3 = document.querySelector('h3'); // 빈태그h3



// 이벤트 연결하기.
function grad() {
    body.style.background = "linear-gradient(to right, " + color1.value + " , " + color2.value + ")"
    h3.textContent = body.style.background;
}

color1.addEventListener('input', grad);
color2.addEventListener('input', grad);