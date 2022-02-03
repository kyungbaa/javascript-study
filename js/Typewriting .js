// 버튼을 누르면
// h1을 빈칸으로 만들고
// 0.5초후에 a를 h1안에 입력  (h1안에 a를 더함)
// 0.5초후에 ab를 h1안에 입력 (h1안에 b를 더함)
// 0.5초후에 abc를 h1안에 입력 (h1안에 c를 더함)

setTimeout(function () {
  console.log(111);
}, 1000);

$("button").click(function () {
  const h1태그 = document.querySelector("h1");
  const 글씨 = document.querySelector("h1").innerHTML;
  h1태그.innerHTML = ""; // $("h1").html("");
  //   setTimeout(function () {
  //     h1태그.innerHTML = h1태그.innerHTML + 글씨[0];
  //   }, 500);
  //   setTimeout(function () {
  //     h1태그.innerHTML = h1태그.innerHTML + "b";
  //   }, 1000);
  //   setTimeout(function () {
  //     h1태그.innerHTML = h1태그.innerHTML + "c";
  //   }, 1500);
  //   setTimeout(function () {
  //     h1태그.innerHTML = h1태그.innerHTML + "d";
  //   }, 2000);
  //   setTimeout(function () {
  //     h1태그.innerHTML = h1태그.innerHTML + "e";
  //   }, 2500);
  for (let i = 0; i < 글씨.length; i++) {
    setTimeout(function () {
      h1태그.innerHTML = h1태그.innerHTML + 글씨[i];
    }, 500 * i);
  }
});
