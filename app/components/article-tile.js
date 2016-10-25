import Ember from 'ember';

export default Ember.Component.extend({
  function getSummary({{article.text}}){
    return {{article.text}}.split(/\s+/).slice(0,20).join(" ");
  }
});
