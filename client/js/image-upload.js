const dropArea = document.getElementById('drop-area'),
    fileInput = document.getElementById('input-file'),
    imageView = document.getElementById('img-view'),
    loadingSvg = document.getElementById('loading'); // Assuming you have an element with id 'loading-svg' for the loading animation

fileInput.addEventListener('change', uploadImage);

loadingSvg.style.display = 'none';

const uploadImage = ()=>{
  // Show the loading SVG
  loadingSvg.style.display = 'block';


  let imgLink = URL.createObjectURL(fileInput.files[0]);
  imageView.style.backgroundImage = `url(${imgLink})`;
  imageView.textContent = '';
  imageView.style.border = 0;

  // Create a FormData object
  let formData = new FormData();

  // Add the file to the FormData object
  formData.append('image', fileInput.files[0]);

  // Define the request options
  let requestOptions = {
    method: 'POST',
    body: formData,
  };

  // Make the request to your API
  fetch('https://api.example.com/analyzeImage', requestOptions)
    .then(response => response.json())
    .then(result => {
      console.log(result);
      // Hide the loading SVG after the image is uploaded and response is received
      loadingSvg.style.display = 'none';
    })
    .catch(error => {
      console.log('Error:', error);
      // Hide the loading SVG if there's an error
      loadingSvg.style.display = 'none';
    });
}
