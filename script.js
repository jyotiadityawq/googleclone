document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const query = document.getElementById('search-box').value;
    window.location.href = 'https://www.google.com/search?q=' + encodeURIComponent(query);
});
