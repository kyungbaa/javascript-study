const 이미지1 = document.querySelectorAll(".slide-box img")[0];
const 매니저1 = new Hammer.Manager(이미지1);

const 이미지2 = document.querySelectorAll(".slide-box img")[1];
const 매니저2 = new Hammer.Manager(이미지2);

매니저1.add(new Hammer.Pan({ threshold: 0 }));
// threshold: 0  사용자가 슬라이드 하는 양 0이라고 하면 터치
매니저1.on("pan", function (e) {
  // 만약에 이사람이 왼쪽으로 그림 슬라이드 했을때
  if (e.deltaX < -1) {
    $(slide_container).css("transform", "translateX(" + e.deltaX + "px)");

    if (e.isFinal && 현재이미지 == 1) {
      // 만약에 이사람이 마우스를 놓으면 두번째 슬라이드로 쇽 변햐여함
      $(slide_container).addClass("transforming");
      $(slide_container).css("transform", "translateX(-100vw)");
      setTimeout(function () {
        $(slide_container).removeClass("transforming");
        // 단 0.5초 후에 클래스 삭제 잠깐 있다 없어지는거지 뭐
      }, 1000);
    }
  }
});

매니저2.add(new Hammer.Pan({ threshold: 0 }));
매니저2.on("pan", function (e) {
  if (e.deltaX < -1) {
    $(slide_container).css("transform", "translateX(" + e.deltaX + "px)");

    if (e.isFinal && 현재이미지 == 2) {
      // 만약에 이사람이 마우스를 놓으면 두번째 슬라이드로 쇽 변햐여함
      $(slide_container).addClass("transforming");
      $(slide_container).css("transform", "translateX(-200vw)");
      setTimeout(function () {
        $(slide_container).removeClass("transforming");
        // 단 0.5초 후에 클래스 삭제 잠깐 있다 없어지는거지 뭐
      }, 1000);
    }
  }
});
