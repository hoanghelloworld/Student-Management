const dropContainers = document.querySelectorAll('.dropContainer');
const fileInputs = document.querySelectorAll('.fileInput');
const thumbnails = document.querySelectorAll('.thumbnail');
const selectedFileNames = document.querySelectorAll('.selectedFileName');

dropContainers.forEach((dropContainer, index) => {
  dropContainer.addEventListener('click', () => {
    fileInputs[index].click();
  });

  dropContainer.ondragover = dropContainer.ondragenter = function(evt) {
    evt.preventDefault();
    dropContainer.style.border = '2px dashed #666666';
  };

  dropContainer.ondragleave = function(evt) {
    evt.preventDefault();
    dropContainer.style.border = '2px dashed #cccccc';
  };

  dropContainer.ondrop = function(evt) {
    evt.preventDefault();
    dropContainer.style.border = '2px dashed #cccccc';

    const files = evt.dataTransfer.files;

    if (files.length > 0) {
      const selectedFile = files[0];
      selectedFileNames[index].textContent = selectedFile.name;

      if (selectedFile.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = function(event) {
          thumbnails[index].src = event.target.result;
          thumbnails[index].style.display = 'block';
        };
        reader.readAsDataURL(selectedFile);
      } else {
        thumbnails[index].style.display = 'none';
      }

      fileInputs[index].files = files;
    }
  };

  fileInputs[index].addEventListener('change', () => {
    const files = fileInputs[index].files;

    if (files.length > 0) {
      const selectedFile = files[0];
      selectedFileNames[index].textContent = selectedFile.name;

      if (selectedFile.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = function(event) {
          thumbnails[index].src = event.target.result;
          thumbnails[index].style.display = 'block';
        };
        reader.readAsDataURL(selectedFile);
      } else {
        thumbnails[index].style.display = 'none';
      }
    }
  });
});
