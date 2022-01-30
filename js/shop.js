var products = [
  { id: 0, price: 70000, title: "Blossom Dress" },
  { id: 1, price: 50000, title: "Springfield Shirt" },
  { id: 2, price: 60000, title: "Black Monastery" },
];

// const title = document.querySelectorAll(".card-body h5");
// const price = document.querySelectorAll(".card-body p span");

const title = $(".title");
const price = $(".price");

function reset() {
  for (var i = 0; i <= products.length; i++) {
    let template = ` 
    <div class="card">
    <img src="https://via.placeholder.com/600" />
    <div class="card-body">
      <h5 class="title">${products[i].title}</h5>
      <p>가격 : <span class="price">${products[i].price}</span></p>
      <button class="btn btn-danger">주문하기</button>
    </div>
  </div>`;
    $(".card-group").append(template);
  }
}
reset();

/*
for (i = 0; i <= products.length; i++) {
  $(title).eq(i).html(products[i].title);
  $(price).eq(i).html(products[i].price);
}
*/
// 정렬

$("#price-sort-button").click(function () {
  products.sort(function (a, b) {
    return a.price - b.price;
  });
  // 정렬은 이제 끝났고 다시 html에 데이터바인딩
  화면출력();
});

// 정렬
var 어레이 = [2, 3, 5, 7, 1, 4, 8, 22];
어레이.sort(); // sort() 문자 정렬

어레이.sort(function (a, b) {
  return a - b;
});
/* 
   sort()함수 
   1. a,b는 array안에 데이터들 
   2. +를 return하면 a는 오른쪽 b는 왼쪽
   3. -를 return하면 b는 오른쪽 b는 왼쪽

   내림차순일경우 b-a 
*/

/* 
   filter()함수
   array자료에 필터를 주고 싶을때 return 조건식
   filter함수는 사용 시 새로운 변수에 선언하고 넣어줘야함
   filter()는 기존 array자료를 변형 X
   sort()는 기존 array 자료를 변형 O
*/
var 어레이 = [2, 3, 5, 7, 1, 4, 8, 22];
var 뉴어레이 = 어레이.filter(function (a) {
  return a < 4;
});

/* 
   map()함수
   array자료에 전부 뭐 해주고 싶으면 map()
   map함수도 사용 시 새로운 변수에 선언 후 넣어준다. 신문법이래... 
*/
var 뉴어레이 = 어레이.map(function (a) {
  return a * 2;
});
// products 갯수 만큼 상품 배열하기
function productsHTML() {}

// 이름순정렬 버튼 기능
/*
   sort()함수 
   1. a,b는 array안에 데이터들 
   2. +를 return하면 a는 오른쪽 b는 왼쪽
   3. -를 return하면 a는 왼쪽 b는 오른쪽
   내림차순일경우 b-a 

*/
$("#price-sort-name").click(function () {
  products.sort(function (a, b) {
    if (a.title < b.title) {
      return -1;
    } else {
      return 1;
    }
  });
  화면출력();
});

// 역이름순정렬 버튼
$("#price-resort-name").click(function () {
  products.sort(function (a, b) {
    if (a.title > b.title) {
      return -1;
    } else {
      return 1;
    }
  });
  화면출력();
});
/*
const 상품명템플릿 = `<h5>${products[i].title}</h5>`;
const 상품가격템플릿 = `
  <p>
    가격 <span>${products[i].price}</span>
  </p>`;
*/
/* 내가 한방법 
$("#price-fliter").click(function () {
  let 오만원이하제품 = products.filter(function (a) {
    return a.price <= 50000;
  });
  $(".card-group").html(" ");
  for (i = 0; i < 오만원이하제품.length; i++) {
    let 오만원이하제품템플릿 = ` 
    <div class="card">
    <img src="https://via.placeholder.com/600" />
    <div class="card-body">
      <h5 class="title">${오만원이하제품[i].title}</h5>
      <p>가격 : <span>${오만원이하제품[i].price}</span></p>
      <button class="btn btn-danger">주문하기</button>
    </div>
  </div>`;
    $(".card-group").append(오만원이하제품템플릿);
  }
});
*/

// 선생님 방법
$("#price-fliter").click(function () {
  var 새상품 = products.filter(function (a) {
    return a.price <= 60000;
  });
  $(".card-group").html(" ");
  for (i = 0; i < 새상품.length; i++) {
    let template = ` 
    <div class="card">
    <img src="https://via.placeholder.com/600" />
    <div class="card-body">
      <h5 class="title">${새상품[i].title}</h5>
      <p>가격 : <span class="price">${새상품[i].price}</span></p>
      <button class="btn btn-danger">주문하기</button>
    </div>
  </div>`;
    $(".card-group").append(template);
  }
});

// input 입력 가격으로 검색하기
const price_search_button = document.getElementById("button-addon2");
const price_input = document.getElementById("price-input");

price_search_button.addEventListener("click", function () {
  const search_price = price_input.value;
  $(".card-group").html(" ");
  if (search_price.length == 0) {
    alert("가격을 입력해주세요.");
  } else {
    var 검색상품목록 = products.filter(function (a) {
      return a.price <= search_price;
    });
    for (i = 0; i <= search_price.length; i++) {
      let template = ` 
      <div class="card">
      <img src="https://via.placeholder.com/600" />
      <div class="card-body">
        <h5 class="title">${검색상품목록[i].title}</h5>
        <p>가격 : <span class="price">${검색상품목록[i].price}</span></p>
        <button class="btn btn-danger">주문하기</button>
      </div>
    </div>`;
      $(".card-group").append(template);
    }
  }
});

// 검색 초기화 버튼

document.getElementById("reset").addEventListener("click", function () {
  reset();
});
