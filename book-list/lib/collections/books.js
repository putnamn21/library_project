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
                reservationDate: '',
                reservationUser: ''
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
                reserved: false
            },
            $push: {
                prevUsers: user
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
});