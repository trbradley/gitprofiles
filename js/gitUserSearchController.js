githubUserSearch.controller('GitUserSearchController', ['Search', function(Search) {
  var self = this;

  self.doSearch = function (){
    Search.query(self.searchTerm)
      .then(function(response) {
        console.log(response);
        self.searchResult = response.data;
      });
  };
}]);
