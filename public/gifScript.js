
    // JavaScript to show the GIF when the static image is clicked
    const container = document.querySelector('.backgroundImage');
    const gifOverlay = container.querySelector('.gif-overlay');

    container.addEventListener('click', () => {
      gifOverlay.style.visibility = 'visible';
    });
