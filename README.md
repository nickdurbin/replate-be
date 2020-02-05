# Back-end - Replate2
Back-end repo for replate2
deployed Link is:

- [Business](#business)
    - [Logs a Business User In](#logs-a-user-in)
    - [Registers a New Business User](#registers-a-new-business-user)
    - [Edit Business Profile](#edit-business-profile)
    - [Delete Business Profile](#delete-business-profile)
    - [Create Food Request for Business to include: Type, Amount/Servings, Preferred Pick-up Time](#create-food-request-for-business-to-include-type-amount/servings-preferred-pickup-time)
    - [Add New Food Request for Business](#add-new-food-request-for-business)
    - [Updates Food Request for Business based on provided Id](#updates-food-request-for-business-based-on-provided-id)
    - [Deletes Food Request for Business based on provided Id](#deletes-food-request-for-business-based-on-provided-id)

- [Volunteers](#volunteers)
    - [Logs a Volunteer User In](#logs-a-volunteer-user-in)
    - [Registers a New Volunteer User](#registers-a-new-volunteer-user)
    - [Updates the Volunteer profile](#updates-the-volunteer-profile)
    - [Deletes the Volunteer profile](#deletes-the-volunteer-profile)    
    - [View List of All Unassigned/Pending Food-Requests](#view-list-of-all-unassigned/pending-food-requests)
    - [Click on Food Request to view more info](#click-on-food-request-to-view-more-info)
    - [Accept and Complete Food Request](#accept-and-complete-food-request)
    - [Cancel the assigned food request the Volunteer is signed up for](#cancel-the-assigned-food-request-the-Volunteer-is-signed-up-for)
    - [Mark assigned pickup as complete](#mark-assigned-pickup-as-complete)


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
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxLCJ1c2VybmFtZSI6Im5pY2siLCJyb2xlIjoiZG9uYXRvciIsImlhdCI6MTU4MDg2ODI4MSwiZXhwIjoxNTgxNDczMDgxfQ.Rxg7V9AsxWXXxGtpSQONvrTRwYrNm1H7-d7UosgC8bE",
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
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxLCJ1c2VybmFtZSI6Im5pY2siLCJyb2xlIjoidm9sdW50ZWVyIiwiaWF0IjoxNTgwODY4OTYzLCJleHAiOjE1ODE0NzM3NjN9.y6u3ZD1wCc_6MhpCDXVNRElpQYEpHeLHA-hvtriJoRQ",
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