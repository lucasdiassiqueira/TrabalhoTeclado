<script>
    let currentIndex = 0;

    function moveSlide(direction) {
        const container = document.querySelector('.carousel-container');
        const totalSlides = document.querySelectorAll('.carousel-item').length;
        currentIndex += direction;

        if (currentIndex < 0) {
            currentIndex = totalSlides - 1;
        } else if (currentIndex >= totalSlides) {
            currentIndex = 0;
        }

        const offset = -currentIndex * 100; // Calcula o deslocamento
        container.style.transform = `translateX(${offset}%)`;
    }
</script>
