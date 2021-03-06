Hummingbird.UserReviewsRoute = Ember.Route.extend(Hummingbird.Paginated, {
  fetchPage: function(page) {
    return this.store.find('review', {
      user_id: this.modelFor('user').get('id'),
      page: page
    });
  },
  
  afterModel: function() {
    return Hummingbird.TitleManager.setTitle(this.modelFor('user').get('username') + "'s Reviews");
  }
});
