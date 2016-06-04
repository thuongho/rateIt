var Constants = {
  CHANGE_EVENT: 'change',
  ADD_COMMENT: 'comments.add'
};

var Store = new _.extend({}, EventEmitter.prototype, {
  _comments: [],

  addComment: function(comment) {
    this._comments[comment.id] = comment;
  },

  comments: function() {
    return this._comments;
  },

  // add some boiler code
  addChangeListener: function(callback) {
    // the listeners will know through here
    this.on(Constants.CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    // unsubscribing
    this.removeListener(Constants.CHANGE_EVENT, callback);
  },

  emitChange: function() {
    // emit the message to all that are listening to
    this.emit(Constants.CHANGE_EVENT);
  }
});

// dispatcher
var AppDispatcher = new Flux.Dispatcher();

AppDispatcher.register(function(payload) {
  var action = payload.actionType;
  // app dispatcher is registered
  console.log('payload', payload);
  switch(action) {
    case Constants.ADD_COMMENT:
      Store.addComment(payload.comment);
      // emit the change once we added the comment
      Store.emitChange();
      break;
    default: 
    // NO-OP
  }
});

// Actions
var Actions = new _.extend({}, {
  addComment: function(params) {
    AppDispatcher.dispatch({
      actionType: Constants.ADD_COMMENT,
      comment: params
    });
  }
});