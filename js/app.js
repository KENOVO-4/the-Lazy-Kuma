// Fetch Anime Data from GitHub
fetch('https://raw.githubusercontent.com/your-username/your-repo/main/anime-data.json')
    .then(response => response.json())
    .then(data => {
        const animeList = data.anime;
        const animeContainer = document.querySelector('.anime-list');
        animeList.forEach(anime => {
            const animeItem = document.createElement('div');
            animeItem.classList.add('anime-item');
            animeItem.innerHTML = `
                <img src="assets/images/${anime.thumbnail}" alt="${anime.title}">
                <a href="anime${anime.id}.html">${anime.title}</a>
            `;
            animeContainer.appendChild(animeItem);
        });
    });
