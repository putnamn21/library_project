Meteor.subscribe('books');

Template.bookList.helpers({
    books: function () {
        return Books.find();
        //    return Session.get('books');
    },
    isAdmin: function () {
        if (Meteor.user().username == "libadmin") {
            return true;
        } else {
            return false;
        }
    },
    isSameUser: function () {
        if (this.user == Meteor.user().username) {
            return true;
        } else {
            return false;
        }
    },
    calcDateDue: function () {

        
//        var hour = date.getHours();
//        var minute = date.getMinutes();
//        var seconds = date.getSeconds();


        
    }
});

Template.bookList.events({
    "submit .add-book": function (event) {
        event.preventDefault(); // this prevents built-in form submission
        Meteor.call('addBook', {
            title: event.target.title.value,
            author: event.target.author.value,
        })
    },
    "click .deleteBook": function () {
        Meteor.call('deleteBook', this._id)
    },
    "click .checkOut": function () {
        Meteor.call('checkOut', this._id, Meteor.user().username, Date.now())
    },
    "click .checkIn": function () {
        Meteor.call('checkIn', this._id, Meteor.user().username, Date.now())
    },
    "submit .bookComment": function (event) {
        event.preventDefault();
        var text = event.target.comment.value;
        var rating = event.target.rating.value;
        var user = Meteor.user().username;

        var comment = {
            text: text,
            rating: rating,
            user: user
        };

        Meteor.call('addComment', comment, this);

        event.target.comment.value = '';
    }
});