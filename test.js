const fakeData = require('./index.js');

const users = fakeData.users(1);
console.log(users);

// const names = fakeData.firstname(50);
// console.log(names);

// const emails = fakeData.emails(100);
// console.log(emails)

// const username = fakeData.username(2);
// console.log({username});

// const phone = fakeData.phone(10);
// console.log(phone);


// const location = fakeData.location(10);
// console.log({location});

const birthdate = fakeData.birthdate(10);
console.log(birthdate);
