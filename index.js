const underscore = require('underscore');

const fakeData = {
    userData: require('./data/userdata.json'),
    users: function (count) {
        const users = underscore.sample(this.userData, count);
        return users;
    },
    firstname: function(count) {
        const users = this.users(count);
        let firstname = []
        users.map((i) => {
            firstname.push(i.first_name);
        });
        return firstname;
    },
    lastname: function(count) {
        const users = this.users(count);
        let lastname = [];
        users.map((i) => {
            lastname.push(i.lastname);
        });
        return lastname
    },
    emails: function(count) {
        const users = this.users(count);
        let emails = [];
        users.map((i) => {
            emails.push(i.email)
        });
        return emails;
    },
    username: function(count) {
        const users = this.users(count);
        let username = [];
        users.map((i) => {
            username.push(i.username);                                     
        });                                                                
        return username;
    },                                                                     
    phone: function(count) {
        const users = this.users(count);
        let phone = [];
        users.map((i) => {
            phone.push(i.phone_number);                                            
        });
        return phone;                                                      
    }
}

module.exports = fakeData;
