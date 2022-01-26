// 버튼 0(prodcuts)을 누르면
// 0. 버튼1과 버튼2에 붙은 빨간색 없애기
// 1. 버튼0이 빨간색으로 하이라이트 되어야함
// 2. 내용0이 보여야함.

$(".tab-button")
  .eq(0)
  .click(function () {
    $(".tab-button").removeClass("active");
    $(".tab-content").removeClass("show");

    $(".tab-button").eq(0).addClass("active");
    $(".tab-content").eq(0).addClass("show");
  });

$(".tab-button")
  .eq(1)
  .click(function () {
    $(".tab-button").removeClass("active");
    $(".tab-content").removeClass("show");

    $(".tab-button").eq(1).addClass("active");
    $(".tab-content").eq(1).addClass("show");
  });

$(".tab-button")
  .eq(2)
  .click(function () {
    $(".tab-button").removeClass("active");
    $(".tab-content").removeClass("show");

    $(".tab-button").eq(2).addClass("active");
    $(".tab-content").eq(2).addClass("show");
  });
