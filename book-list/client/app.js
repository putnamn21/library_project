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

    //beginning v--add book search results helper
    searchresults: function () {
            return Session.get('searchresult');
        }
        //end v--add book search result helper
});

Template.bookList.events({
    "submit .add-book": function (event) {
        event.preventDefault(); // this prevents built-in form submission
        Meteor.call('addBook', {
            title: event.target.title.value,
            author: event.target.author.value,
            isMissing: false,
            isNotLost: true,

            //becconk changes
            copyright: event.target.copyright.value,
            publisher: event.target.publisher.value,
            bookOwner: event.target.bookOwner.value,
            bookCategory: event.target.bookCategory.value,
            //end becconk
            imgPath: '/book-covers/'+event.target.bookImageFile.value
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

    // putnam changes 02222016
    "submit .reservation": function (event) {
        event.preventDefault();
        var reservationDate = event.target.date.value;

        var reservation = {
            date: reservationDate,
            user: Meteor.user().username,
        }
        Meteor.call('addReservation', reservation, this);

        event.target.date.value = '';
    },
    //end putnam

    //begin v--add book search
    "submit .bookSearch": function (event) {
        // Prevent default browser form submit
        event.preventDefault();

        // Get value from form element
        var searchInput = event.target.bookSearchInput.value;
        var searchCrit = event.target.searchCrit.value;

        // Clear form
        event.target.bookSearchInput.value = '';

        Meteor.call('bookSearch', searchCrit, searchInput, function (err, result) {
            Session.set('searchresult', result);
        });
    },
    //end v--add book search
});