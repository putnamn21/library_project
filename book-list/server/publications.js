Meteor.publish('books', function () {
    return Books.find({});
});


//Meteor.publish('userData', function () {
//    return Meteor.users.find({});
//});

