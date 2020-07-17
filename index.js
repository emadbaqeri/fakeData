const _ = require('underscore');

const fakeData = {
    userData: require('./data/userdata.json'),
    users: function (count) {
        const users = _.sample(this.userData, count);
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
    },
    location: function(count) {
      const users = this.users(count);
      let location = [];
      users.map((i) => {
           location.push(i.location);  
      });
      return location; 
    },
    birthdate: function(count) {
        const users = this.users(count);
        let birthdate = [];
        users.map((i) => {
            birthdate.push(i.birthdate);
        });
        return birthdate;
    },
    obj: function (count, options) {
        let properties = Object.keys(options);
        console.log(properties);
        const data = {};
        properties.forEach(function(item) {
            data[item] = this[item](count);
        }, this);
        const result = [];
        _.times(count, function(i) {
            const item = {};
            Object.keys(data).forEach(function(key) {
                item[key] = data[key][i];
            });
            result.push(item);
        });
        return result;
    },
}

module.exports = fakeData;
