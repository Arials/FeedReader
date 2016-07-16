/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

$(function() {

    describe('RSS Feeds', function() {

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('every feed has a defined url not empty', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url).not.toBe('');
            });
        });

        it('every feed has a defined name not empty', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toBe('');
            });
        });
    });


    describe('The Menu', function() {

        var matrix,
            values,
            hidePosition = 4,
            hide = '-192',
            show = '0';

        it('menu panel are hidden by default', function() {
            // Get a string with the result of the css property 'transform'
            matrix = $('#slide-menu').css('transform');
            // Use a RexEx to convert te string into string-form numbers
            values = matrix.match(/-?[\d\.]+/g);
            // Check the position 4 where is the key to know if is hide or not
            expect(values[hidePosition]).toBe(hide);
            // Check if the class is 'menu-hidden'
            expect($(document.body).hasClass('menu-hidden')).toBe(true);
        });

        it('click on menu button make the menu appears and click again make the menu hide', function() {
            $('#menuButton').click();
            expect($(document.body).hasClass('menu-hidden')).toBe(false);
            $('#menuButton').click();
            expect($(document.body).hasClass('menu-hidden')).toBe(true);
        });
    });


    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {

    });

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

    /* TODO: Write a new test suite named "New Feed Selection"*/
    describe('New Feed Selection', function() {

    });


        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
}());
