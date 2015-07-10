MessageBoard.Router.map(function() {
  this.resource('home', {path: '/'});
  this.resource('about');
  this.resource('contact', function() {
    this.resource('phone');
    this.resource('email');
  });
});
