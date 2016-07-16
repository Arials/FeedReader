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

    describe('Initial Entries', function() {

        beforeEach(function(done){
            // to test async loadFeed function, when done, make the test
            loadFeed(0, function() {
                done();
            });
        });

        it("should load at least one feed", function(done) {
            expect($('#feed-content > a').length).toBeGreaterThan(0);
            done();
        });

    });

    describe('New Feed Selection', function() {
        var content_old,
            content_new;
        // Save the element content before making the loadFunction call
        if ($('#feed-content > a').length > 0)
        {
            content_old = $('#feed-content > a').get(0);
        }
        else{
            content_old = 'nothing';
        }

        // to test async loadFeed function, when done, make the test
        beforeEach(function(done){
            loadFeed(0, function() {
                done();
            });
            // Save the content after loadFunction
            content_new = $('#feed-content > a').get(0);
            console.log(content_new);
            console.log(content_old);
        });

        it("when a new feed is loaded the content actually changes", function(done) {
            // the content before has to be different from after
            expect(content_new).not.toEqual(content_old);
            done();
        });

    });
}());
