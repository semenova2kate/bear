var sample = document.getElementsByClassName("sample")[0];
console.log(sample);

var bear = document.getElementsByClassName("bear")[0];
var container = document.getElementsByClassName("container")[0];

bear.addEventListener("click", function() {
  var clone = sample.cloneNode(true);
  clone.style.visibility = "visible";
  var size = (Math.random() * 7) + 10;
  var positionX = Math.random() * 100;
  var positionY = Math.random() * 100;
  if (positionX > 25 && positionX < 75 && positionY > 35 && positionY < 65) {
    positionX = Math.random() * 100;
    positionY = Math.random() * 100;
  }
  clone.style.width = size.toString() + "%";
  clone.style.height = size.toString() + "%";
  clone.style.top = positionX.toString() + "%";
  clone.style.left = positionY.toString() + "%";
  container.appendChild(clone);  
});



