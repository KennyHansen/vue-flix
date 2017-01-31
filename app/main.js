(function(){

  var fs = new FlixService()  


  new Vue({
    el: '#vue-flix',
    data: function(){
      return {
        category: 'actor',
        query: '',
        movies: [],
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
        this.movies = []
      },
      setDetails: function(movie){
        this.details = movie
      },
      clearDetails: function(){
        this.details = {}
      }
    }
  })

  


}())