MessageBoard.NewQuestionController = Ember.Controller.extend({
  actions: {
    save: function() {
      var newQuestion = this.store.createRecord('question', {
        text: this.get('text'),
        user_name: this.get('user_name')
      });

      newQuestion.save();
      this.transitionToRoute('questions');
    }
  }
});
