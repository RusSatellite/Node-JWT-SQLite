# Node.js – JWT Authentication & Authorization with JSONWebToken & Sequelize & SQLite

## Project setup
```
npm install
```

## Run
```
npm start
```

## 5 Test APIs 
Now we can run the API in browsers from localhost

Try testing following urls:
- Signup new account
  
  http://localhost:8080/api/auth/signup

  Post format - admin
  ```json script
  [
    {
		"username": "admin",
		"email": "admin@gmail.com",
		"password": "1234567890",
		"roles": ["admin"]
	}
  ]
  ```

  Post format - user
  ```json script
  [
    {
		"username": "user",
		"email": "user@gmail.com",
		"password": "123456",
		"roles": ["user"]
	}
  ]

- Login an account
  
  http://localhost:8080/api/auth/signin

  Post format
  ```json script
  [
    {
		"username": "user",
		"password": "123456",
	}
  ]
  
- Access Admin’s content

  http://localhost:8080/api/test/admin
    
- Access User’s content

  http://localhost:8080/api/test/user
  
- Access Swagger Documentation

  http://localhost:8080/api-docs
