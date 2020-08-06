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
                .clearValue('@title')
                .setValue('@title', employeeInfo.title)
        }
        return this
    },
    searchEmployee: function(employeeInfo) {
        if(employeeInfo.name){
            this
                .setValue('@search', employeeInfo.name)
        }
        if(employeeInfo.phone){
            this
                .setValue('@name', employeeInfo.phone)
        }
        if(employeeInfo.email){
            this
                .setValue('@name', employeeInfo.email)
        }
        if(employeeInfo.title){
            this
                .setValue('@name', employeeInfo.title)
        }
        return this
    },
}

module.exports = {
    url: 'https://devmountain-qa.github.io/employee-manager-v2/build/index.html',
    elements: {
        title: '.titleText',
        save: '#saveBtn',
        cancel: '[name="cancel"]',
        delete: '[name="delete"]',
        name: '[name="nameEntry"]',
        phone: '[name="phoneEntry"]',
        email: '[name="emailEntry"]',
        title: '[name="titleEntry"]',
        titleName: '#employeeTitle',
        numberID: '#employeeID',
        list: '.listText',
        search: '[name="searchBox"]',
        clear: '[name="clearSearch"]',
        addEmployee: '[name="addEmployee"]'
        }
}