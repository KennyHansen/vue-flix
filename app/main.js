(function(){

  var fs = new FlixService()  


  new Vue({
    el: '#vue-flix',
    data: function(){
      return {
        category: 'actor',
        query: 'Jack Black',
        movies: [],
        myMovies: [],
        details: {}
      }
    },
    methods:{
      search: function(){
        if(this.category == 'title'){
          fs.getFlix(this.category, this.query, this.setDetails)
          return
        }
        fs.getFlix(this.category, this.query, this.setMovies)
      },
      setMovies: function(movies){
        this.movies = movies
      },
      reset: function(){
        this.query = ''
        this.category = '',
        this.movies = [],
        this.myMovies = []
      },
      setDetails: function(movie){
        this.details = movie
      },
      clearDetails: function(){
        this.details = {}
      },
      addToWatchlist: function(movieName){
        var myMovies = this.myMovies
        var movies = this.movies
        var hasMovie = false

        myMovies.forEach((movie)=>{
          if (movie.show_title == movieName) {
            hasMovie = true
          }
        })
        if (!hasMovie) {
          movies.forEach((movie)=>{
            if (movie.show_title == movieName) {
              myMovies.push(movie)
              return
            }
          })
        }
      },
      removeFromWatchlist(movieName) {
        var myMovies = this.myMovies
        myMovies.forEach((movie,i)=>{
          if (movie.show_title == movieName) {
            myMovies.splice(i, 1)
            return
          }
        })
      }
    }
  })
  
}())