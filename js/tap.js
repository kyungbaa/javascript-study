// 버튼 0(prodcuts)을 누르면
// 0. 버튼1과 버튼2에 붙은 빨간색 없애기
// 1. 버튼0이 빨간색으로 하이라이트 되어야함
// 2. 내용0이 보여야함.

// $(".tab-button")
//   .eq(0)
//   .click(function () {
//     $(".tab-button").removeClass("active");
//     $(".tab-content").removeClass("show");

//     $(".tab-button").eq(0).addClass("active");
//     $(".tab-content").eq(0).addClass("show");
//   });

// $(".tab-button")
//   .eq(1)
//   .click(function () {
//     $(".tab-button").removeClass("active");
//     $(".tab-content").removeClass("show");

//     $(".tab-button").eq(1).addClass("active");
//     $(".tab-content").eq(1).addClass("show");
//   });

// $(".tab-button")
//   .eq(2)
//   .click(function () {
//     $(".tab-button").removeClass("active");
//     $(".tab-content").removeClass("show");

//     $(".tab-button").eq(2).addClass("active");
//     $(".tab-content").eq(2).addClass("show");
//   });

// 반복문 사용해서 만들기
// 반복한다고 해도 어차피 클릭 안하면 실행안됨
// val i 라고 선언시 다른 코드가 참조할 수 있는 범위가 너무 넓어짐

// const tab_length = document.getElementsByClassName("tab-button").length;
// for (let i = 0; i < tab_length; i++) {
//   $(".tab-button")
//     .eq(i)
//     .click(function () {
//       $(".tab-button").removeClass("active");
//       $(".tab-content").removeClass("show");

//       $(".tab-button").eq(i).addClass("active");
//       $(".tab-content").eq(i).addClass("show");
//     });
// }

// for문 안에 실행 내용 함수로 만들었움.

// for (let i = 0; i < $(".tab-button").length; i++) {
//   $(".tab-button")
//     .eq(i)
//     .click(function () {
//       탭열기(i);
//     });
// }

// 이벤트 버블링을 이용해서 만들기.
// html에 정보심기 data -작명= 값
// 정보 꺼내려면 html요소,dataset.작명
$(".list").click(function (e) {
  탭열기(e.target.dataset.id);
  // 내가 누른 요소의 dataset의 id 값
});

// jQuery문법으로 html에 정보 저장하기
$(".list").data("작명", "값");
// 제이쿼리로 저장한 정보 꺼내기
$(".list").data("작명");

function 탭열기(숫자) {
  $(".tab-button").removeClass("active");
  $(".tab-content").removeClass("show");
  $(".tab-button").eq(숫자).addClass("active");
  $(".tab-content").eq(숫자).addClass("show");
}
