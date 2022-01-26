/*
            document
              .getElementById("inputBtn")
              .addEventListener("click", function () {
                let inputValue = document.getElementById("input").value;
                console.log(inputValue);
                if (inputValue == "안녕") {
                  document.getElementById("black-background").style.display = "block";
                } else {
                  alert("다시 입력해주세요.");
                }
              });

              */

//   $("#loginBtn").on("click", function () {
//     if ($("#input").val() == "안녕") {
//       $("#white-background-text").html("아 맞게 잘 썼다.");
//       $(".black-background").fadeIn();
//     } else {
//       $("#white-background-text").html("다시 입력해주세요.");
//       $(".black-background").fadeIn();
//     }
//   });
/*
      버튼이 클릭 됐을때, email이 공칸이면 전송이 되지 않음.
            $(".btn-submit").on("click", function () {
              if (
                $("#email").val() === " " ||
                $("#email").val() === null ||
                $("#email").val().length === 0
              ) {
                $("#white-background-text").html("이메일을 입력해 주세요.");
                return false;
              }
            });
            */

// 폼이 전송될 때,
// 이메일이 공칸일 경우 폼의 전송을 막고, 안내문
// 비밀번호가 공칸일 경우 폼의 전송을 막고, 안내문

// on.("submit")**

// var 이메일안내창 = $("#emailAlert");

// $("#form").on("submit", function (e) {
//   if ($("#email").val() == "") {
//     e.preventDefault();
//     이메일안내창.css("display", "block");
//   }
//   if ($("#password").val() == "") {
//     e.preventDefault();
//     $("#passwordAlert").show();
//   }
// });

// 이메일 형식 검증하기
//  /\S@/.test("ㅅㅅㅅ@");
//  /\S+@\S+\.\S+/.test("dddd@ddd.sdf");

$("#form").on("submit", function (e) {
  // 만약에 지금 이메일 input에 입력된 값이 정규식과 비교했을 때 false인 경우 폼 전송 막기, 안내창 띄우기
  var 입력한이메일 = $("#email").val();
  var 입력한비밀번호 = $("#password").val();
  if (
    false ==
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(입력한이메일)
  ) {
    e.preventDefault();
    $("#emailAlert").html("이메일이 정확하지 않습니다.").show();
  } else if (입력한이메일 == " ") {
    e.preventDefault();
    $("emailAlert").html("이메일칸이 빈칸입니다.").show();
  }
  if (false == /[A-B0-9]+/.test(입력한비밀번호)) {
    e.preventDefault();
    $("#passwordAlert").html("비밀번호에 대문자와 숫자를 섞어주세요.").show();
  } else if (입력한비밀번호.length < 8) {
    e.preventDefault;
    $("#passwordAlert").html("비밀번호를 9글자 이상 적어주세요.").show();
  }
});
// $("#close").on("click", function () {
//   $(".black-background").fadeOut();
//   $(".white-background").animate({
//     marginTop: "-200px",
//   });
// });

// $("#loginBtn").on("click", function () {
//   $(".black-background").fadeIn();
//   $(".white-background").animate({
//     marginTop: "200px",
//   });
// });

$("#loginBtn").on("click", function () {
  $(".black-background").addClass("slide-down");
});

$("#close").on("click", function () {
  $("#passwordAlert").hide();
  $("#emailAlert").hide();
  $(".black-background").removeClass("slide-down");
});

$("#productLink").on("click", function () {
  $(".nav-sub").slideToggle();
});
