let image1 = document.getElementById("img-1");
let image2 = document.getElementById("img-2");
let image3 = document.getElementById("img-3");
let image4 = document.getElementById("img-4");
image1.addEventListener("click",changeImage);
image2.addEventListener("click",changeImage);
image3.addEventListener("click",changeImage);
image4.addEventListener("click",changeImage);


function changeImage() {
    let imgPos = this.alt;
    let imgSrc = this.src;
    let imgNo = getImgNo(imgSrc);
    let imgNext = (imgNo + 1)%3;
    this.src = "images/" + imgPos + "/" + imgNext + ".jpg"
    checkForMatch();
}
function checkForMatch() {
    let noMatchStyle = "2px solid gray";
    let matchStyle = "5px solid red";
    let img1No = getImgNo(image1.src);
    let img2No = getImgNo(image2.src);
    let img3No = getImgNo(image3.src);
    let img4No = getImgNo(image4.src);
    if (img1No === img2No && img2No === img3No && img3No === img4No) {
        image1.style.border = matchStyle;
        image2.style.border = matchStyle;
        image3.style.border = matchStyle;
        image4.style.border = matchStyle;
    } else {
        image1.style.border = noMatchStyle;
        image2.style.border = noMatchStyle;
        image3.style.border = noMatchStyle;
        image4.style.border = noMatchStyle;
    }
}
function getImgNo(imgSrc) {
    let imgSrcLength = imgSrc.length;
    let imgNo = imgSrc.substring(imgSrcLength-5,imgSrcLength-4);
    return parseInt(imgNo);
}