MessageBoard.Answer = DS.Model.extend({
  text: DS.attr(),
  user_name: DS.attr(),
  question: DS.belongsTo('question', {async: true})
});
