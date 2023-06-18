function handleFileSelect(event) {
    const file = event.target.files[0];
    if (file.type.startsWith('video/')) {
      const videoURL = URL.createObjectURL(file);
      const videoPlayer = document.getElementById('video');
      videoPlayer.src = videoURL;

      const loadingText = document.getElementById('loadingText');
      loadingText.style.display = 'block';

      const showAlert = () => {
        alert('Video cargado correctamente.');
        document.getElementById('hideshowVideo').style.display = 'block';
      };

      videoPlayer.addEventListener('loadedmetadata', () => {
        loadingText.style.display = 'none';
        showAlert();
      });

      videoPlayer.addEventListener('error', () => {
        alert('Se produjo un error al cargar el video.');
      });
    } else {
      alert('El archivo seleccionado no es un video válido.');
    }
  }