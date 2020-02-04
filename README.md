# Back-end - Replate2
Back-end repo for replate2
deployed Link is:

- [Business](#business)
    - [Logs a Business User In](#logs-a-user-in)
    - [Registers a New Business User](#registers-a-new-business-user)

- [Food-Request](#food-request)
    - [Deletes Food Request based on provided Id](#deletes-food-request-based-on-provided-id)
    - [Returns all Food Requests](#returns-all-food-request)
    - [Add New Food Request](#add-new-food-request)
    - [Updates Food Request based on provided Id](#updates-food-request-based-on-provided-id)
    
- [Volunteers](#volunteers)
    - [Updates the Current Logged In Volunteer](#updates-the-current-logged-in-volunteer)
    - [Deletes the Current Logged In Volunteer](#deletes-the-current-logged-in-volunteer)
    - [Retrieve all food-requests that the Current Volunteer is signed up for](#retrieve-all-classes-that-the-current-volunteer-is-signed-up-for)
    - [Deletes the food request the Volunteer is signed up for](#deletes-the-food-request-the-Volunteer-is-signed-up-for)
    


# Business

## Logs a Business User In

<p>Logs a Business User In</p>

    POST /api/businesses/login


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| username            | String            |  <p>Username of the User</p>                            |
| password            | String            |  <p>Password of the User</p>                            |

### Success Response

Success-Response:

[
  {
    "username": "nick",
    "name": null,
    "address": null,
    "phone": null,
    "email": null
  }
]

{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxLCJ1c2VybmFtZSI6Im5pY2siLCJyb2xlIjoiZG9uYXRvciIsImlhdCI6MTU4MDc3NjAzOCwiZXhwIjoxNTgwODE5MjM4fQ.CbH5g9LHqMFJ5iN4EhzX6GB8XKU_iVNx77RKBcWh_is",
  "message": "Welcome nick!"
}

### Error Response

Invalid--credentials-please-try-again


{ message: "Invalid credentials, please try again."}

## Registers a New Business User

<p>Registers a New Volunteer</p>

    POST /api/businesses/register


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| username            | String            |  <p>The New Business Users username *Required</p>                            |
| password            | String            |  <p>The New Business Users password *Required</p>                            |
| name            | String            |  <p>The New Business Users name</p>                            |
| address            | String            |  <p>The New Business Users address</p>                            |
| phone            | String            |  <p>The Users Business phone </p>                            |
| email            | String            |  <p>The New Business Users email</p>                            |

### Success Response

Success-Response:

  {
    "username": "nick",
    "name": null,
    "address": null,
    "phone": null,
    "email": null
  }

  # Auth

## Logs an Volunteer In

<p>Logs an Volunteer In</p>

    POST /api/volunteers/login


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| username            | String            |  <p>Username of the User</p>                            |
| password            | String            |  <p>Password of the User</p>                            |

### Success Response

Success-Response:

{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxLCJ1c2VybmFtZSI6Im5pY2siLCJyb2xlIjoidm9sdW50ZWVyIiwiaWF0IjoxNTgwNzc4Mjc2LCJleHAiOjE1ODA4MjE0NzZ9.vlsUF8jVUrDpPI0RYqxMIOZF8SIp6iZS_UG4cUxQcoM",
  "message": "Welcome nick!"
}

### Error Response

Invalid--credentials-please-try-again


{ message: "Invalid credentials, please try again."}

## Registers a New User

<p>Registers a New Volunteer User</p>

    POST //api/volunteers/register


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| username            | String            |  <p>The New Business Users username *Required</p>                            |
| password            | String            |  <p>The New Business Users password *Required</p>                            |
| name            | String            |  <p>The New Business Users name</p>                            |
| phone            | String            |  <p>The Users Business phone </p>                            |
### Success Response

Success-Response:

{
    "name": null,
    "phone": null
  }