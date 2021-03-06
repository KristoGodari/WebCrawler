var mysqlOperationsComponent = require('../services/mysql_operations');
var mysqlOperations = new mysqlOperationsComponent();

/**
 * UrlList Class
 * This object will contain an start url list that
 * crawler will user to start scraping.
 * @constructor
 */
function UrlList() {
    this.list = new Array();
    this.initialiseList();
}

/**
 * Populating the list with predefined start urls.
 */
UrlList.prototype.initialiseList = function () {
    var self = this;
    mysqlOperations.getWebsitesList(function (websitesList) {
        websitesList.forEach(function (website) {

            var websiteData = new Array();
            websiteData.push(website.id);
            websiteData.push(website.name);
            websiteData.push( website.uri);
            websiteData.push(website.description);
            websiteData.push(website.views);
            websiteData.push(website.rank);

            self.list.push(websiteData);
        });
    });



}

/**
 * Adding an new url to the predefinded list.
 */
UrlList.prototype.add = function (url) {
    this.list.push(url);
};

/**
 * Returns the url array.
 */
UrlList.prototype.get = function () {
    return this.list;
};

/**
 * Returns the url array.
 */
UrlList.prototype.length = function () {
    return this.list.length;
};


// export the class
module.exports = UrlList;
