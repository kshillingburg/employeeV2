//verify add employee function.
module.exports = (pageObject, employeeInfo) => {
    pageObject
        .click('@addEmployee')
        .clickEmployee('New Employee')
        .editEmployee(employeeInfo)
        .click('@save')
    pageObject.expect.element('@titleName').text.to.equal(employeeInfo.name).before(500)
    pageObject.expect.element('@name').value.to.equal(employeeInfo.name)
    pageObject.expect.element('@phone').value.to.equal(employeeInfo.phone)
    pageObject.expect.element('@email').value.to.equal(employeeInfo.email)
    pageObject.expect.element('@titleEntry').value.to.equal(employeeInfo.title)
}