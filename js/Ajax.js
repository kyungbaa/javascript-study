$.ajax({
  url: "https://codingapple1.github.io/hello.txt",
  type: "GET",
}).done(function (데이터) {
  console.log(데이터);
});

$(".hi").click(function () {
  $.ajax({
    url: "https://codingapple1.github.io/hello.txt",
    type: "GET",
  }).done(function (인삿말) {
    $("#hello").html(인삿말);
  });
});
/*
$(".hi").click(function () {
  $.ajax({
    url: "https://codingapple1.github.io/hello.txt",
    type: "GET",
  }).fail(function (인삿말) {
    $("#hello").html(인삿말);
  });
}); // 요청 실패 .fail

$("hi").click(function () {
  $.ajax({
    url: "https://codingapple1.github.io/hello.txt",
    type: "GET",
  }).always(function (인삿말) {
    $("#hello").html(인삿말);
  });
}); // 성공여부와 상관없이 언제나 실행  .always 예:로딩
*/

$(".contents").click(function () {
  $.ajax({
    url: "https://codingapple1.github.io/data.json",
    type: "GET",
  }).done(function (데이터) {
    console.log(데이터);
    $(".card-title").html(데이터.model);
    $(".card-text").html(데이터.price);
    $(".card-img-top").attr("src", 데이터.img);
  });
});
