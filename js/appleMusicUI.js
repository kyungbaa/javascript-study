$(window).scroll(function () {
  const 높이 = $(window).scrollTop();
  console.log(높이);
  // 650 ~ 1150까지 스크롤바를 내리면 첫째카드의 opacity를 1~0으로 서서히 변경합시당
  // 높이가 650~1150일때 0~1일 되는 y
  // y= a*높이+b; a= -1/500  b=115/50
  const y = (-1 / 500) * 높이 + 115 / 50;
  $(".card-box").eq(0).css("opacity", y);
  var z = (-1 / 5000) * 높이 + 565 / 500;
  $(".card-box").eq(0).css("transform", `scale( ${z} )`);
});
