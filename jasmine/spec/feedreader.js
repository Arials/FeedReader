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

        it("should load at least one feed", function() {
            expect($('#feed-content > a').length).toBeGreaterThan(0);
        });

    });

    describe('New Feed Selection', function() {
        var content_old,
            content_new;

        // to test async loadFeed function, when done, make the test
        beforeEach(function(done){
            loadFeed(0, function() {
                // save a copy of the first feeds result of loadFeed
                content_old = $('#feed-content').clone().get(0);
                loadFeed(1, function() {
                    // save a copy of the second feeds result of loadFeed
                    content_new = $('#feed-content').clone().get(0);
                    done();
                });
            });
        });

        it("when a new feed is loaded the content actually changes", function() {
            $(content_new).children().each(function(i){
                // Compare all links in old feeds with new feeds and has to be diferent
                var old_href =$($(content_old).children()[i]).attr('href');
                var new_href = $($(content_new).children()[i]).attr('href');
                expect(old_href).not.toEqual(new_href);
            });
            //expect(content_new).not.toEqual(content_old);
            //done();
        });

    });
}());
