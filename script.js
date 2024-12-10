function toggleOptions() {
    const optionsBody = document.getElementById('optionsBody');
    if (optionsBody.style.display === 'none' || optionsBody.style.display === '') {
      optionsBody.style.display = 'grid';
    } else {
      optionsBody.style.display = 'none';
    }
  }
  