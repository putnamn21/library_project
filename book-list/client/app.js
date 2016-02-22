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
    //maher's additions
    "click .reportLost": function () {
        Meteor.call('reportLost', this._id, Meteor.user().username)
    },
    "click .reportMissing": function () {
        Meteor.call('reportMissing', this._id)
    },
    "click .reportFound": function () {
        Meteor.call('reportFound', this._id)
    },
    //end maher
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
    },
    // putnam changes
    "submit .reservation": function (event) {
        event.preventDefault();
        var reservationDate = event.target.date.value;

        var reservation = {
            date: reservationDate,
            user: Meteor.user().username,
        }
        Meteor.call('addReservation', reservation, this);

        event.target.date.value = '';
    }
    //end putnam
});