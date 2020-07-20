# Faker 
A Package That Will Generate Any Fake Data For You

<h1 align="center">
	<br>
	<br>
	<img width="320" src="media/logo.png" alt="Chalk">
	<br>
	<br>
	<br>
</h1>

## GitHub
- [GitHub Repo](https://github.com/emadbaqeri/fakeData.git)
## 


## Installation

``` sh
npm install faker_emad
```

## Usage

``` javascript
const fakeData = require('fakeData');
const users = fakeData(1, {
    firstname: true,
    emails: true,
}); /*  returns -> 
    [
        {firstname: 'someone', emails: "someone@test.com"}
    ]
    */

```

# APIs

- `users` - will generate you users 
- `firstname` - will generate you firstname
- `lastname` - will generate you lastname
- `emails` - will generate you emails
- `username` - will generate you username 
- `phone` - will generate you phone number
- `location` - will generate you location with longitude and latitude
- `bithdate` - will generate you birthdate 


# More Examples
```javascript
const fakeData = require('fakeData');

const firstname = fakeData.firstname(5);
const lastname = fakeData.lastname(5);
const emails = fakeData.emails(5);
const username = fakeData.username(5);
const phone = fakeData.phone(5);
const location = fakeData.location(5);
const birthdate = fakeData.birthdate(5);
```

# Contributing
This package is under development and I would be glad if you share your idea with me and add any line of your idea with the code that you write in this package
Any changes would be appreciated
-Emad Baqeri


## Maintainers

- [emadbaqeri](https://github.com/emadbaqeri)
- [miladjamali](https://github.com/miladjamali)


