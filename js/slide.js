// section1 slide 시작 하단 사진 번호
const slide1_button = document.querySelector(".slide-1");
const slide2_button = document.querySelector(".slide-2");
const slide3_button = document.querySelector(".slide-3");

const slide_container = document.querySelector(".slide-container");
slide1_button.addEventListener("click", function () {
  현재이미지 = 1;
  slide_container.style.transform = "translateX(0vw)";
});
slide2_button.addEventListener("click", function () {
  현재이미지 = 2;
  slide_container.style.transform = "translateX(-100vw)";
});
slide3_button.addEventListener("click", function () {
  현재이미지 = 3;
  slide_container.style.transform = "translateX(-200vw)";
});

// section1 slide 왼쪽 오른쪽 이동 버튼
const slide_left = document.querySelector(".slide-left");
const slide_right = document.querySelector(".slide-right");
let 현재이미지 = 1;

// 확장성 없이 짠 코드 (제이쿼리 미사용)
// slide_right.addEventListener("click", function () {
//   if (현재이미지 == 1) {
//     현재이미지 = 2;
//     slide_container.style.transform = "translateX(-100vw)";
//   } else if (현재이미지 == 2) {
//     현재이미지 = 3;
//     slide_container.style.transform = "translateX(-200vw)";
//   }
// });

// 사진 이미지 추가할때마다 수정할 필요 없도록 수정함
$(slide_right).click(function () {
  if (현재이미지 < 3) {
    $(slide_container).css("transform", "translateX(-" + 현재이미지 + "00vw)");
    현재이미지 = 현재이미지 + 1;
  }
});

// 이전 버튼
$(slide_left).click(function () {
  if (현재이미지 > 1) {
    $(slide_container).css(
      "transform",
      "translateX(-" + (현재이미지 - 2) + "00vw)"
    );
    현재이미지 = 현재이미지 - 1;
  }
});

// 왼쪽 nav menu 버튼
$("#show-menu").click(function () {
  $(".left-menu").animate({ marginLeft: "0px" });
});
