function searchMovies() {
    const query = document.getElementById('search-bar').value.toLowerCase();
    const movieCards = document.querySelectorAll('.movie-card');

    movieCards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        if (title.includes(query)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}
