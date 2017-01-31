function FlixService() {
    let base = 'http://netflixroulette.net/api/api.php'

    this.getFlix = function(category, query, cb) {
        var url = `${base}?${category}=${query}`
        fetch(url).then(res => res.json().then(cb))
    }

    
}