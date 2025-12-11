let arr = [2, 3, 455, 6];
let strArr = arr.join(" ");

localStorage.setItem("arr", strArr);
localStorage.getItem("arr").split(" ");

console.log(localStorage.getItem("arr").split(" "));
