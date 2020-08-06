module.exports = (pageObject, oldEmployee, newEmployee, otherEmployee) => {
    pageObject
        .clickEmployee(oldEmployee)
        .editEmployee(newEmployee)
        .click('@save')
        .clickEmployee(otherEmployee)
        .expect.element('@title').text.to.equal(otherEmployee).before(500)
    pageObject
        .clickEmployee(newEmployee.name)
        .expect.element('@title').text.to.equal(newEmployee.name).before(500)
    pageObject.expect.element('@name').value.to.equal(newEmployee.name)
    pageObject.expect.element('@phone').value.to.equal(newEmployee.phone)
    pageObject.expect.element('@email').value.to.equal(newEmployee.email)
    pageObject.expect.element('@title').value.to.equal(newEmployee.title)
}