document.querySelector(".버튼1").addEventListener("click", function(){
  document.querySelector(".inner-list").style.transform = "translate(0vw)";
  document.querySelector(".버튼1").style.backgroundColor = "aqua";
  document.querySelector(".버튼2").style.backgroundColor = "white";
  document.querySelector(".버튼3").style.backgroundColor = "white";
})
document.querySelector(".버튼2").addEventListener("click", function(){
  document.querySelector(".inner-list").style.transform = "translate(-100vw)";
  document.querySelector(".버튼1").style.backgroundColor = "white";
  document.querySelector(".버튼2").style.backgroundColor = "aqua";
  document.querySelector(".버튼3").style.backgroundColor = "white";
})
document.querySelector(".버튼3").addEventListener("click", function () {
  document.querySelector(".inner-list").style.transform = "translate(-200vw)";
  document.querySelector(".버튼1").style.backgroundColor = "white";
  document.querySelector(".버튼2").style.backgroundColor = "white";
  document.querySelector(".버튼3").style.backgroundColor = "aqua";
});