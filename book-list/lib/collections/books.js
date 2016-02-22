Books = new Meteor.Collection("books");

Meteor.methods({
    addBook: function (bookData) {
        var bookID = Books.insert(bookData);
        return bookID;
    },
    deleteBook: function (bookData) {
        var bookID = Books.remove(bookData);
        return bookID;
    },
    checkOut: function (bookData, user, timestamp) {
        var date = new Date(timestamp + 1209600000);
        var strDD = date.toLocaleDateString();

        var bookID = Books.update({
            _id: bookData
        }, {
            $set: {
                bookOut: true,
                user: user,
                dateOut: timestamp,
                tsDateDue: (timestamp + 1209600000),
                //                strDateDue: month + "/" + day + "/" + year
                strDateDue: strDD,
                isNotLost: true,
                reservationDate: '',
                reservationUser: '',
                reserved: false
                
            }
        });
        return bookID;
    },
    checkIn: function (bookData, user, timestamp) {
        var bookID = Books.update({
            _id: bookData
        }, {
            $set: {
                bookOut: false,
                user: null,
                dateIn: timestamp,
                isNotLost: true
            },
            $push: {
                prevUsers: user
            }
        });
        return bookID;
    },
    reportLost: function (bookData, user) {
        var bookID = Books.update({
            _id: bookData
        }, {
            $set: {
                isNotLost: false
            }
        });
        return bookID;
    },
    reportMissing: function (bookData) {
        var bookID = Books.update({
            _id: bookData
        }, {
            $set: {
                isMissing: true
            }
        });
        return bookID;
    },
    reportFound: function (bookData) {
        var bookID = Books.update({
            _id: bookData
        }, {
            $set: {
                isMissing: false
            }
        });
        return bookID;
    },
    addComment: function (comment, book) {
        if (Meteor.userId()) {

            Books.update(book._id, {
                $push: {
                    comments: comment
                }
            });

        }
    },
    // putnam changes
    addReservation: function (reservation, book) {
        if (Meteor.userId()) {
            Books.update(book._id, {
                $set: {
                    reservationDate: reservation.date,
                    reservationUser: reservation.user,
                    reserved: true
                }
            }); 
        }
    }
    //end putnam
});