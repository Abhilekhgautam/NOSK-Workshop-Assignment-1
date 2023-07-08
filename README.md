# NOSK-Workshop-Assignment-1

In this assignment you will have to implement a very basic login functionality using Express JS.

Create a server using Express that listens to port 8080 and serve the route `\login` for the POST Request.
The request body is of form:

```json
{
  "email":"abcde@gmail.com",
  "password": "abcde"
}
```

You have to create an array of object that stores following user information:
| Email         | Password      |
| ------------- | ------------- |
| pra@gmail.com  | 1012a57471 |
| abhi@gmail.com  | abcde12345  |
| abhil@gmail.com  | abcde1245 |
| pankopat@gmail.com  | pankopat|

Now you should check if any of the user tried logging in.
Your response can be of the following form:
1. for successfull login.
```json
{"msg":"Login Successfull"}
``` 
2. For Incorrect Password (email matches but password is incorrect)
```json
{"msg":"Incorrect Password"}
```
3. No email matched
```json
{"msg":"Invalid Login"}
```

Remember to set response status of 403 for any of the unsuccessfull login attempt.

### Instruction
Every thing about the frontend part is already done for you, you just need to write the backend for this frontend. 
First clone this repository:
```
git clone https://github.com/Abhilekhgautam/NOSK-Workshop-Assignment-1.git
```

Go the project Folder
```
cd NOSK-Workshop-Assignment-1
```
You should see a `client` directory inside. Run the client side code and see the output.
Create a new folder named `server`
```
mkdir server
```
Initialize npm
```
npm init
```
Create a new js file and start coding :)

Expected Output:
1. For Incorrect Password
![Incorrect Password](https://github.com/Abhilekhgautam/NOSK-Workshop-Assignment-1/blob/main/incorrect-password.png)

2. For Invalid Login
![Invalid Login](https://github.com/Abhilekhgautam/NOSK-Workshop-Assignment-1/blob/main/invalid-login.png)

3. For Successfull Login
![Successfull Login](https://github.com/Abhilekhgautam/NOSK-Workshop-Assignment-1/blob/main/success.png)

Bonus:
1. You might be bumped with a CORS Error, refer to this [docs](https://expressjs.com/en/resources/middleware/cors.html) to resolve with this issue
2. [Setting Response Status in Express](https://expressjs.com/en/api.html#res.status)
