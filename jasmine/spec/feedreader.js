$(function() {
    describe('RSS Feeds', function() {
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('each has url', function() { 
            for(let feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(feed.url.constructor).toBe(String);
                expect(feed.url.length).not.toBe(0);
               }    
            });
           
        

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('each has name', function() {
            for(let feed of allFeeds)  {    
                expect(feed.name).toBeDefined();
                expect(feed.name.constructor).toBe(String);
                expect(feed.name.length).not.toBe(0);
            }    
        });
   

    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {

    })
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('hidden by default', function() {
            let isHidden = document.body.classList.contains('menu-hidden');
            expect(isHidden).toBe(true);
        });
         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
    it('toggles view when icon is clicked', function() {
        let menuIcon = document.querySelector('a.menu-icon-link');
        menuIcon.click();
        expect(document.body.classList.contains('menu-hidden')).toBe(false);
        menuIcon.click();
        expect(document.body.classList.contains('menu-hidden')).toBe(true);
    });
    });
    
    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {

    
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        beforeEach(function(done) {
            loadFeed(1, done);
        });

        it('has entries in feed container', function() {
            let feedContainer = document.querySelector('div.feed');
            let entries = feedContainer.querySelectorAll('article.entry');
            expect(entries.length).toBeGreaterThan(0);
        });
    });    
   
    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {

    
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        let firstFeed, secondFeed;

        beforeEach(function(done) {
            loadFeed(3, function() {
                firstFeed + document.querySelector('div.feed').innerHTML;
            loadFeed(2, function() {
                secondFeed = document.querySelector('div.feed').innerHTML;
                done();
            });   
        });
    });
        it('loads new feeds', function () {
        expect(firstFeed).not.toBe(secondFeed);
        });
    });
}());