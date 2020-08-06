//verify add employee function.
module.exports = (pageObject, employeeInfo) => {
    pageObject
        .click('@addEmployee')
        .clickEmployee('NewEmployee')
        .editEmployee(employeeInfo)
        .click('@save')
    pageObject.expect.element('@title').text.to.equal(newEmployee.name).before(500)
    pageObject.expect.element('@name').value.to.equal(newEmployee.name)
    pageObject.expect.element('@phone').value.to.equal(newEmployee.phone)
    pageObject.expect.element('@email').value.to.equal(newEmployee.email)
    pageObject.expect.element('@title').value.to.equal(newEmployee.title)
}