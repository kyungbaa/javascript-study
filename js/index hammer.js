const 이미지1 = document.querySelectorAll(".slide-box img")[0];

const 매니저 = new Hammer.Manager(이미지1);
매니저.add(new Hammer.Pan({ threshold: 0 }));
// threshold: 0  사용자가 슬라이드 하는 양 0이라고 하면 터치
매니저.on("pan", function (e) {
  console.log(e.deltaX);
  if (e.deltaX < -1) {
    $(slide_container).css("transform", "translateX(" + e.deltaX + "px)");
  }
});
