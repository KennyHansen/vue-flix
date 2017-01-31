(function(){

  var fs = new FlixService()  


  Vue.component('movie-details', {
    props:['detail'],
    template: 
      `<div><img :src="detail.poster" width="100">
          <h3>{{detail.show_title}}</h3>
          <p>
            <b>Director:</b> {{detail.director}},
            <b>Runtime:</b> {{detail.runtime}},
          </p>
          <p>
            <b>Ratings:</b> {{detail.rating}},
            <b>Released:</b> {{detail.release_year}},
            <b>Category:</b> {{detail.category}}
          </p>
          <p>
            <b>Summary:</b> {{detail.summary}}
          </p>
          <p>
            <b>Cast:</b> {{detail.show_cast}}
          </p>
      </div>`
  })


  var vm = new Vue({
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
      addToWatchlist: function(movie){
        if(!movie.isOnWatchlist){
          this.myMovies.push(movie)
          movie.isOnWatchlist = true
        } 
      },
      removeFromWatchlist(movie) {
        var i = this.myMovies.indexOf(movie)
        this.myMovies.splice(i, 1)
        movie.isOnWatchlist = false
      }
    }
  })

}())