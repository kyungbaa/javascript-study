어레이.sort(function (a, b) {
  return a - b;
});

var products = [
  { id: 0, price: 70000, title: "Blossom Dress" },
  { id: 1, price: 50000, title: "Springfield Shirt" },
  { id: 2, price: 60000, title: "Black Monastery" },
];

const title = document.querySelectorAll(".card-body h5");
const price = document.querySelectorAll(".card-body p span");

// title[0].innerHTML = products[0].title;
// price[0].innerHTML = products[0].price;

$(title).eq(0).html(products[0].title);
$(price).eq(0).html(products[0].price);

$(title).eq(1).html(products[1].title);
$(price).eq(1).html(products[1].price);

$(title).eq(2).html(products[2].title);
$(price).eq(2).html(products[2].price);

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
  $(title).eq(0).html(products[0].title);
  $(price).eq(0).html(products[0].price);

  $(title).eq(1).html(products[1].title);
  $(price).eq(1).html(products[1].price);

  $(title).eq(2).html(products[2].title);
  $(price).eq(2).html(products[2].price);
});

// 정렬
var 어레이 = [2, 3, 5, 7, 1, 4, 8, 22];
어레이.sort(); // sort() 문자 정렬
/* sort()함수 
   1. a,b는 array안에 데이터들 
   2. +를 return하면 a는 오른쪽 b는 왼쪽
   3. -를 return하면 b는 오른쪽 b는 왼쪽

   내림차순일경우 b-a 
*/

// array자료에 필터를 주고 싶을때
