# ProjectManagmentBackEnd

[![npm version](https://badge.fury.io/js/survey-monkey-streams.svg)](//npmjs.com/ProjectManagementBackEnd)
[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)

This is a backend server for a project management application. User's will be able to sign up for an account, add projects that they are currently working on with added notes about the project.

## **Author:** Adrian Huebner [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/adrianhuebner/)

**Deployed Backend Link:** *Check back later for this*  
**Frontend Code Repository:** *Check back later for this*

## Setup On Your Machine

### ENV requirements

```js
SECRET=addrandomsecret
```

## How To Run

### How to use HTTP Pie in the Terminal to Run Routes

#### Authorization Enpoints

``` js
    http POST :3000/signup username=<add username here> password=<add password here>
```

---

#### Project Endpoints

```js
    // checkback later for this
```

## Endpoints

### Authorization Endpoints

#### **POST /signup** - Creates a new user

**Required Parameters:**

>Request Body (JSON):
>- username - _String_ (required)
>- password - _String_ (required)

#### **POST /signup** - Allows an user to sign into their account

**Required Parameters:**

>Request Body (JSON):
>- username - _String_
>- password - _String_

---

### Projects

## Testing

## Data Model

![DataModel](./assets/DataModel.png)

## UML (Unified Modeling Language)

## Sources

[Alexandre Sanlim's README on Badges](https://github.com/alexandresanlim/Badges4-README.md-Profile)
