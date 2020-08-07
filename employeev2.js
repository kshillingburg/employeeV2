var manager = {}
var empEdit = require('../testAssets/empAssets1')
var empAdd = require('../testAssets/empAssets2')
module.exports = {
    beforeEach: browser => {
        manager = browser.page.empPage()
        manager.navigate()
            .waitForElementVisible('@title')
    },
    after: browser => {
        manager.end()
    },
    'Search for an employee': browser => {
        manager
            .click('@search')
            .searchEmployee('Da one')
        manager.expect.element('@titleName').text.to.equal('Da one').before(500)
        manager
            .click('@clear')
            .click('@search')
            .searchEmployee('Mike Jones')
        manager.expect.element('@titleName').text.to.equal('Mike Jones').before(500)
        manager
            .click('@clear')
    },
    // 'Add Employee Function': browser => {
    //     manager
    // },
    // 'Edit Existing Employee': browser => {
    //     manager

    // },
    // 'Delete Employee': browser => {
    //     manager

    // },
    // 'Character Length Restriction': browser => {
    //     manager

    // },
    // 'Phone Character Type Restriction': browser => {
    //     manager

    // }

}