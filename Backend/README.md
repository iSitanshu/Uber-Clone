# Users Register Endpoint Documentation

## Endpoint
**POST** `/users/register`

## Description
Creates a new user account. The endpoint accepts user details, validates the input, hashes the password, and then stores the user in the database.

## Required Data
- **fullname** (object)
  - **firstname**: string (min 3 characters)
  - **lastname**: string *(optional, but expected if provided)*
- **email**: string (valid email, min 5 characters)
- **password**: string (min 6 characters)

### Example Request Body
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "yourSecurePassword"
}
```

## Responses

### Success - User Created
- **Status Code:** 201 Created
- **Response Body:**
```json
{
  "token": "jwt_token_here",
  "user": {
    "_id": "unique_user_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "socketId": null
  }
}
```

### Error - Validation Failed
- **Status Code:** 400 Bad Request
- **Response Body:**
```json
{
  "errors": [
    {
      "msg": "Error message detailing the validation issue",
      "param": "fieldName",
      "location": "body"
    }
  ]
}
```

### Error - User Already Exists
- **Status Code:** 400 Bad Request
- **Response Body:**
```json
{
  "message": "User already exist"
}
```

## Example Response

When a user is successfully registered, the response will look like:

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "6098bdf1c25e4d3c8a1b2ef3",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "socketId": null
  }
}
```