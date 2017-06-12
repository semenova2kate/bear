var sample = document.getElementsByClassName("sample")[0];

var bear = document.getElementsByClassName("bear")[0];
var cat = document.getElementsByClassName("cat")[0];
var container_bear = document.getElementsByClassName("container-bear")[0];
var container_cat = document.getElementsByClassName("container-cat")[0];
var counter = 0;

container_cat.style.display = "none";
var container = container_bear;
var b = true;


function listener(event) {
  event.preventDefault();
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
  clone.addEventListener("click", function(event) {
    container.removeChild(event.currentTarget);
    counter++;
    if (counter > 10) {
       if (b) {
         container = container_cat;
         container_bear.style.display = "none";
         container_cat.style.display = "block";
         b = false;
       }
       else {
         container = container_bear;
         container_cat.style.display = "none";
         container_bear.style.display = "block";
         b = true;
       }
       counter = 0;
    }
  });  
}

bear.addEventListener("click", listener);
cat.addEventListener("click", listener);



