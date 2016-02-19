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
    checkOut: function (bookData, user) {
            var bookID = Books.update(
                {_id: bookData},
                {$set: {
                    bookOut: true,
                    user: user
                }}
            );
            return bookID;
    }
});