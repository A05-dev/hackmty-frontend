const dropArea = document.getElementById('drop-area'),
    fileInput = document.getElementById('input-file'),
    imageView = document.getElementById('img-view');

inputFile.addEventListener('change', (e)=>{ uploadImage});

const uploadImage = ()=>{
  let imgLink = URL.createObjectURL(inputFile.files(0));
  imageView.style.baccgroundImage = `url(${imgLink})`;
  imageView.textContent = '';
  imageView.style.border = 0;
}