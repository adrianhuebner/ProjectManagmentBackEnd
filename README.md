# ProjectManagmentBackEnd

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)

This is a backend server for a project management application. User's will be able to sign up for an account, add projects that they are currently working on with added notes about the project.

## **Author:** Adrian Huebner [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/adrianhuebner/)

**Deployed Backend Link:** *Check back later for this*  
**Frontend Code Repository:** [Repo](https://github.com/adrianhuebner/projecthub.git)

## Setup On Your Machine

### Initial Setup on Machine

1. Above the list of files on repositories main page, click on the Code button
2. Under the clone with HTTPS click the button that looks like a click board
3. Open your computers terminal
4. Change the directory that you are in, to the one that you want the repository to live
5. type `git clone` into your terminal and then paste the link to the repository after
6. Press **Enter** on your machine and let it do all the work it needs
7. Run `cd <project name>` in your terminal and run `npm i` to install all the dependencies the project requires

### ENV requirements

**Generating secret keys from helper file:**  
>-Once the project is cloned and installed onto your local machine:  
  >- Run this in your terminal: `nodemon ./src/helperFiles/keyGenerators.js`

---

```js
PORT=add port number here  
SECRET=addrandomsecret  
MONGODB_URI=link to mongo database here
```

## How To Run

### How to use HTTP Pie in the Terminal to Run Routes

#### Authorization Routes

``` js
    http POST :3000/signup email=<add email here> username=<add username here> password=<add password here>  
    http POST :3000/login username=<created username here> password=<password created here>
```

---

#### Project Routes

```js
    // checkback later for this
```

## Endpoints

### Authorization Endpoints

#### **POST /signup** - Creates a new user

**Required Parameters:**

>Request Body (JSON):
>- email - _String_ (required)
>- username - _String_ (required)
>- password - _String_ (required)

#### **POST /signup** - Allows an user to sign into their account

**Required Parameters:**

>Request Body (JSON):
>- username - _String_
>- password - _String_

---

### Project Endpoints

## Testing

Run the following: `npm test`

- This will run all the tests in the test folder
- To get only user tests run `npm test userModel.test.js`

***Will get user and project routes all testing at 100%***

## Data Model

![DataModel](./assets/DataModel.png)

## Sources

[Alexandre Sanlim's README on Badges](https://github.com/alexandresanlim/Badges4-README.md-Profile)  
[YouTube Video: How to Add Reset Password](https://www.youtube.com/watch?v=lLVmH6SB2Z4)  
[Joi Documentation](https://joi.dev/)  
[Joi Implemenation Video](https://www.youtube.com/watch?v=u9kxYilQ9l8&t=381s)
