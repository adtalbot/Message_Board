MessageBoard.Question = DS.Model.extend({
  text: DS.attr(),
  user_name: DS.attr(),
  answers: DS.hasMany('answer', {async: true})
});
