# Users Endpoints Documentation

## Users Register Endpoint

### Endpoint
**POST** `/users/register`

### Description
Creates a new user account. The endpoint accepts user details, validates the input, hashes the password, and then stores the user in the database.

### Required Data
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

### Responses

#### Success - User Created
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

#### Error - Validation Failed
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

#### Error - User Already Exists
- **Status Code:** 400 Bad Request
- **Response Body:**
```json
{
  "message": "User already exist"
}
```

### Example Success Response
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

---

## Users Login Endpoint

### Endpoint
**POST** `/users/login`

### Description
Authenticates an existing user by verifying the provided email and password. If the credentials are valid, an authentication token is generated and returned along with the user details.

### Required Data
- **email**: string (valid email, min 5 characters)
- **password**: string (min 6 characters)

### Example Request Body
```json
{
  "email": "john.doe@example.com",
  "password": "yourSecurePassword"
}
```

### Responses

#### Success - User Authenticated
- **Status Code:** 200 OK
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

#### Error - Validation Failed
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

#### Error - Invalid Credentials
- **Status Code:** 401 Unauthorized
- **Response Body:**
```json
{
  "message": "Invalid email or password"
}
```

### Example Success Response
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

---

## Users Profile Endpoint

### Endpoint
**GET** `/users/profile`

### Description
Returns the authenticated user's profile. This endpoint requires a valid token (typically provided in a cookie or Authorization header) to ensure that the user is authenticated.

### Authentication
- **Required:** Bearer token in the Authorization header or token cookie.

### Responses

#### Success - Profile Fetched
- **Status Code:** 200 OK
- **Response Body:**
```json
{
  "_id": "unique_user_id",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "socketId": null
}
```

#### Error - Unauthorized
- **Status Code:** 401 Unauthorized
- **Response Body:**
```json
{
  "message": "Unauthorized"
}
```

---

## Users Logout Endpoint

### Endpoint
**GET** `/users/logout`

### Description
Logs out the authenticated user by clearing the token cookie and adding the token to a blacklist. This ensures that the token can no longer be used for authentication.

### Responses

#### Success - User Logged Out
- **Status Code:** 200 OK
- **Response Body:**
```json
{
  "message": "Logged out"
}
```

#### Error - Token Missing or Invalid
- **Status Code:** Depending on middleware, it may return 401 Unauthorized or another error message.



Register Captain - 
{
    "fullname": {
        "firstname": "test_captain_firstname",
        "lastname": "test_captain_lastname"
    },
    "email": "test_email@gmail.com",
    "password": "test_captain",
    "vehicle": {
        "color": "red",
        "plate": "MP 04 XY 6204",
        "capacity": 3,
        "vehicleType":"car"
    }
}