MessageBoard.Questions.Controller = Ember.ArrayController.extend({
  actions: {
    sortByTitle: function() {
      this.set('sortProperties', ['text'])
    }
  }
});
