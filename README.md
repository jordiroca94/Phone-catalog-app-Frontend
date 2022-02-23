# PHONE CATALOG APP



## Description 

Phone catalog app where you have a Homepage that displays some telephones, by clicking in each phone you get additional information of the phone. 

- Client side of the Phone Catalog App has been done using React.Js. Styling done using styled components. Spinner has been done using MUI. Responsive mobile app (380px screen).

Frontend is running on the port 3000 

- Server-side of the Phone Catalog App has been done using Node.Js, express and MongoDB as a database where you can find 3 telephones. 

Backend Server is running on the port 3005

In order to test the application you need to open one terminal for each repository and run the following command in each terminal: npm start

## Server routes (API)


| **Method** | **Route**                          | **Description**                                              | Request  - Body                                          |
| ---------- | ---------------------------------- | ------------------------------------------------------------ | -------------------------------------------------------- |
| `GET`      | `/`                                | Renders HomePage.                |                                                          |
| `GET`      | `/phones/:id`                           | Renders   PhoneDetailsComponent                                |                                                          |



## Models 

## Phone model 


```javascript
{
  "brand": { type: String, required: true, unique: true },
  "image": {type: String, required: true}
  "title": {type: String, required: true}
  "description": {type: String, required: true}
  "color": {type: Array, required: true}
  "price": {type: Number, required: true}
}
```

## GitHub Repository Link: 



### Backend GitHub Repository: [Backend](https://github.com/jordiroca94/Phone-catalog-app-backend)

### Frontend GitHub Repository: [Frontend](https://github.com/jordiroca94/Phone-catalog-app-Frontend)
