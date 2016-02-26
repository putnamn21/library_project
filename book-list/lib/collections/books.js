Books = new Meteor.Collection("books");

Meteor.methods({
    addBook: function (bookData) {
        console.log(bookData);
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
<<<<<<< HEAD
//                strDateDue: month + "/" + day + "/" + year
                strDateDue: strDD,
                reservationDate: '',
                reservationUser: ''
=======
                strDateDue: strDD,
                isNotLost: true,
                reservationDate: '',
                reservationUser: '',
                reserved: false
>>>>>>> kevidently/master
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
<<<<<<< HEAD
                reserved: false
=======
                isNotLost: true
>>>>>>> kevidently/master
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
<<<<<<< HEAD
    addReservation: function (reservation, book) {
        if (Meteor.userId()) {
           Books.update(book._id, {
=======
    // putnam changes
    addReservation: function (reservation, book) {
        if (Meteor.userId()) {
            Books.update(book._id, {
>>>>>>> kevidently/master
                $set: {
                    reservationDate: reservation.date,
                    reservationUser: reservation.user,
                    reserved: true
                }
<<<<<<< HEAD
            }); 
            
        }
    }
=======
            });
        }
    },
    //end putnam

    //beginning v add search function
    bookSearch: function (searchCrit, searchInput) {
        var tempObject = [];
        var allBooks = Books.find().fetch();
        var some = new RegExp(searchInput, 'i');
        if (searchCrit == 'author') {
            for (var j = 0; j < allBooks.length; j++) {
                var temp = allBooks[j].author;
                if (some.test(temp) == true) {
                    tempObject.push(allBooks[j]);
                }
            }
        }

        if (searchCrit == 'title') {
            for (var j = 0; j < allBooks.length; j++) {
                temp = allBooks[j].title;
                if (some.test(temp) == true) {
                    tempObject.push(allBooks[j]);
                }
            }
        }
        return tempObject;
    },
    //end v add search function
>>>>>>> kevidently/master
});