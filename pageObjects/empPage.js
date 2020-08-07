var empCommands = {
    clickEmployee: function(employeeName) {
        this.api.useXpath()
        this.click(`//li[text()="${employeeName}"]`)
        this.api.useCss()
        return this
    },
    editEmployee: function(employeeInfo) {
        if(employeeInfo.name){
            this
                .clearValue('@name')
                .setValue('@name', employeeInfo.name)
        }
        if(employeeInfo.phone){
            this
                .clearValue('@phone')
                .setValue('@phone', employeeInfo.phone)
        }
        if(employeeInfo.email){
            this
                .clearValue('@email')
                .setValue('@email', employeeInfo.email)
        }
        if(employeeInfo.title){
            this
                .clearValue('@titleEntry')
                .setValue('@titleEntry', employeeInfo.title)
        }
        return this
    },
    searchEmployee: function(inputInfo) {
        this
            .click('@search')
            .setValue('@search', inputInfo)
            .clickEmployee(inputInfo)
    }
}

module.exports = {
    url: 'https://devmountain-qa.github.io/employee-manager-v2/build/index.html',
    commands: [ empCommands ],
    elements: {
        title: '.titleText',
        save: '#saveBtn',
        cancel: '[name="cancel"]',
        delete: '[name="delete"]',
        name: '[name="nameEntry"]',
        phone: '[name="phoneEntry"]',
        email: '[name="emailEntry"]',
        titleEntry: '[name="titleEntry"]',
        titleName: '#employeeTitle',
        numberID: '#employeeID',
        list: '.listText',
        search: '[name="searchBox"]',
        clear: '[name="clearSearch"]',
        addEmployee: '[name="addEmployee"]'
        }
}