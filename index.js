window.onload = () => {
  let images = document.querySelectorAll(".item");
  for(let i = 0; i < images.length; i++) {
    images[i].style.gridRowEnd = `span ${Math.floor(images[i].children[0].height / 10)}`;
  }
}
