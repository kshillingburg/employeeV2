// Edits employee info and makes sure the changes stuck
module.exports = (pageObject, oldEmployee, newEmployee, otherEmployee) => {
    pageObject
        .clickEmployee(oldEmployee)
        .editEmployee(newEmployee)
        .click('@save')
        .clickEmployee(otherEmployee)
        .expect.element('@titleName').text.to.equal(otherEmployee).before(500)
    pageObject
        .clickEmployee(newEmployee.name)
        .expect.element('@titleName').text.to.equal(newEmployee.name).before(500)
    pageObject.expect.element('@name').value.to.equal(newEmployee.name)
    pageObject.expect.element('@phone').value.to.equal(newEmployee.phone)
    pageObject.expect.element('@email').value.to.equal(newEmployee.email)
    pageObject.expect.element('@titleEntry').value.to.equal(newEmployee.title)
}