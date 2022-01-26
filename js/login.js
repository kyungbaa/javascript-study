$(".black-background").click(function (e) {
  //만약에 지금 실제로 클릭한게 검은 배경일때만 모달창을 닫아주세요. (이벤트 버블링을 막아주세요)
  //  e.target; 지금 실제로 클릭한 요소
  //  e.currentTarget; 지금 이벤트 리스너가 달린곳  >> (".black-background")  >> $(this)제이쿼리 or this 바닐라 자바스크립트
  //  e.preventDefault(); 기본 동작을 막기 위한 함수

  // 실제 클릭한곳 == 이벤트리스터를 단곳(검은배경)
  if (e.target == this) {
    $("#emailAlert").hide();
    $("#passwordAlert").hide();
    $(".black-background").removeClass("slide-down");
  }
});
