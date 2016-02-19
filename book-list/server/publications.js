//Meteor.publish('books', function() {
//  return Books.find({}, {limit:3});
//});

Meteor.publish('books', function () {
    return Books.find({});
});


Meteor.publish('userData', function () {
    return Meteor.users.find({});
});

// server
//Meteor.publish("userData", function () {
//    if (this.userId) {
//        return Meteor.users.find({
//            _id: this.userId
//        }, {
//            fields: {
//                'other': 1,
//                'things': 1
//            }
//        });
//    } else {
//        this.ready();
//    }
//});