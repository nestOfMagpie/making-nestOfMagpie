const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg"];

const bgImage = images[Math.floor(Math.random()*images.length)];

const creatImgElement = document.createElement("img");

creatImgElement.src = `img/${bgImage}`

document.body.querySelector(".parentTag ").prepend(creatImgElement);


//class 추가//

const BG = "backgroundImage"
function addClassName() {
    document.querySelector("img").classList.add("BG");
}

addClassName();