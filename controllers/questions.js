MessageBoard.QuestionsController = Ember.ArrayController.extend({
  actions: {
    sortByText: function() {
      this.set('sortProperties', ['text'])
    }
  }
});
