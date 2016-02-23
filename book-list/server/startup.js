if (Meteor.isServer) {
    Meteor.startup(function () {
        ////////////////////////////////////
        //THIS WILL REINITIALIZE THE LIBRARY 
        //WITH BOOKS AT THEIR DEFAULT VALUES
        ////////////////////////////////////
        if (!Books.findOne()) {
            Books.insert({
                title: "A Book of Abstract Algebra",
                author: "Charles Pinter",
                imgPath: "/book-covers/a-book-of-abstract-algebra_pinter.jpg",
                publisher: '',
                copyright: '',
                bookOut: false,
                isNotLost: true,
                reservationDate: '',
                reservationUser: '',
                reserved: false
            });

            Books.insert({
                title: "Above the Fold",
                author: "Brian Miller",
                imgPath: "/book-covers/above-the-fold_miller.jpg",
                publisher: '',
                copyright: '',
                bookOut: false,
                isNotLost: true,
                reservationDate: '',
                reservationUser: '',
                reserved: false
            });

            Books.insert({
                title: "Applied Combinatorics",
                author: "Alan Tucker",
                imgPath: "/book-covers/applied-combinatorics_tucker.jpg",
                publisher: '',
                copyright: '',
                bookOut: false,
                isNotLost: true,
                reservationDate: '',
                reservationUser: '',
                reserved: false
            });

            Books.insert({
                title: "Best of Game Programming Gems",
                author: "Mark DeLoura",
                imgPath: "/book-covers/best-of-game-programming-gems_delaura.jpg",
                publisher: '',
                copyright: '',
                bookOut: false,
                isNotLost: true,
                reservationDate: '',
                reservationUser: '',
                reserved: false
            });

            Books.insert({
                title: "Computer Organization and Design",
                author: "David Patterson and John Hennessy",
                imgPath: "../book-covers/computer-organization-design_patterson_hennessey.jpg",
                publisher: '',
                copyright: '',
                bookOut: false,
                isNotLost: true,
                reservationDate: '',
                reservationUser: '',
                reserved: false
            });

            Books.insert({
                title: "Design Basics",
                author: "David Lauer and Stephen Pentak",
                imgPath: "/book-covers/design-basics_pentak_lauer.jpg",
                publisher: '',
                copyright: '',
                bookOut: false,
                isNotLost: true,
                reservationDate: '',
                reservationUser: '',
                reserved: false
            });

            Books.insert({
                title: "Effective Javascript",
                author: "David Herman",
                imgPath: "/book-covers/effective-javascript_herman.jpg",
                publisher: '',
                copyright: '',
                bookOut: false,
                isNotLost: true,
                reservationDate: '',
                reservationUser: '',
                reserved: false
            });

            Books.insert({
                title: "Game Engine Architecture",
                author: "Jason Gregory",
                imgPath: "/book-covers/game-engine-architecture_gregory.jpg",
                publisher: '',
                copyright: '',
                bookOut: false,
                isNotLost: true,
                reservationDate: '',
                reservationUser: '',
                reserved: false
            });

            Books.insert({
                title: "Information Architecture",
                author: "Peter Morville and Jason Rosenfeld",
                imgPath: "/book-covers/information-architecture_rosenfeld.jpg",
                publisher: '',
                copyright: '',
                bookOut: false,
                isNotLost: true,
                reservationDate: '',
                reservationUser: '',
                reserved: false
            });

            Books.insert({
                title: "Introduction to Algorithms",
                author: "Thomas Cormen and Charles Leiserson",
                imgPath: "/book-covers/introduction-to-algorithms_cormen.jpg",
                publisher: '',
                copyright: '',
                bookOut: false,
                isNotLost: true,
                reservationDate: '',
                reservationUser: '',
                reserved: false
            });

            Books.insert({
                title: "Javascript the Good Parts",
                author: "David Herman",
                imgPath: "/book-covers/javascript-the-good-parts_herman.png",
                publisher: '',
                copyright: '',
                bookOut: false,
                isNotLost: true,
                reservationDate: '',
                reservationUser: '',
                reserved: false
            });

            Books.insert({
                title: "Letting Go of the Words",
                author: "Janice Redish",
                imgPath: "/book-covers/letting-go-of-the-words_redish.jpg",
                publisher: '',
                copyright: '',
                bookOut: false,
                isNotLost: true,
                reservationDate: '',
                reservationUser: '',
                reserved: false
            });

            Books.insert({
                title: "Mobile Marketing for Dummies",
                author: "Michael Becker and John Arnold",
                imgPath: "/book-covers/mobile-marketing-for-dummies_becker.jpg",
                publisher: '',
                copyright: '',
                bookOut: false,
                isNotLost: true,
                reservationDate: '',
                reservationUser: '',
                reserved: false
            });

            Books.insert({
                title: "Modern Operating Systems",
                author: "Andrew Tennenbaum",
                imgPath: "/book-covers/modern-operating-systems_tennenbaum.jpg",
                publisher: '',
                copyright: '',
                bookOut: false,
                isNotLost: true,
                reservationDate: '',
                reservationUser: '',
                reserved: false
            });

            Books.insert({
                title: "Principles of Object Oriented Javascript",
                author: "Nicholas Zakas",
                imgPath: "/book-covers/principles-of-object-oriented-javascript_zakas.jpg",
                publisher: '',
                copyright: '',
                bookOut: false,
                isNotLost: true,
                reservationDate: '',
                reservationUser: '',
                reserved: false
            });

            Books.insert({
                title: "Type Matters",
                author: "Jim Williams",
                imgPath: "/book-covers/type-matters_williams.jpg",
                publisher: '',
                copyright: '',
                bookOut: false,
                isNotLost: true,
                reservationDate: '',
                reservationUser: '',
                reserved: false
            });

            Books.insert({
                title: "Web Designers Idea Book",
                author: "Patrick Macneil",
                imgPath: "/book-covers/web-designers-idea-book_mcneal.jpg",
                publisher: '',
                copyright: '',
                bookOut: false,
                isNotLost: true,
                reservationDate: '',
                reservationUser: '',
                reserved: false
            });

            Books.insert({
                title: "Web Marketing for Dummies",
                author: "Jan Zimmerman",
                imgPath: "/book-covers/web-marketing_dummies_zimmerman.jpg",
                publisher: '',
                copyright: '',
                bookOut: false,
                isNotLost: true,
                reservationDate: '',
                reservationUser: '',
                reserved: false
            });
        }
    });
}