function highlightImage(){
  let images = document.querySelectorAll('#img_container li');
  if(images.length > 1){
    images.forEach(i=>{
      i.classList.remove('add_highlight');
    });
    let img = images[Math.floor(Math.random()*(images.length+1))];
    img.classList.add('add_highlight');
  }
}

var highlight_image = window.setInterval(highlightImage, 2000);

