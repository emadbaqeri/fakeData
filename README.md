# fakeData
A Package that will generate fake user data

How to use!?

const fakeData = require('fakeData');

const users = fakeData.users(10);
console.log(users);
--> ['emad baqeri', ... 8 ... , 'John Doe']

methods to call:
# 1. users();
# 2. firstname();
# 3. lastname();
# 4. username();
# 5. emails();
# 6. phone();
# 7. location();

more examples: 
--------------------------------------------------------
firstname:
const firstname = fakeData.firstname(1);
--> this will give you an array containing a firstname
...
lastname: 
const lastname = fakeData.lastname(1);
...
username:
const username = fakeData.username(1);
...
emails:
const emails = fakeData.emails(1);
...
const phone = fakeData.phone(1);
...
const location = fakeData.locatopm(1);


Any Change woudl be appreciated
Thank you all -Emad Baqeri
