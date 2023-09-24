const dropArea = document.getElementById('drop-area'),
    fileInput = document.getElementById('input-file'),
    imageView = document.getElementById('img-view');

fileInput.addEventListener('change', uploadImage);

const uploadImage = ()=>{
  let imgLink = URL.createObjectURL(fileInput.files[0]);
  imageView.style.backgroundImage = `url(${imgLink})`;
  imageView.textContent = '';
  imageView.style.border = 0;

  // Crea un objeto FormData
  let formData = new FormData();

  // Agrega el archivo al objeto FormData
  formData.append('image', fileInput.files[0]);

  // Define las opciones de la solicitud
  let requestOptions = {
    method: 'POST',
    body: formData,
  };

  // Realiza la solicitud a tu API
  fetch('https://api.example.com/analyzeImage', requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('Error:', error));
}
