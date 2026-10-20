# cs465-fullstack
CS-465 Full Stack Development with MEAN

## Introduction

Hello! I am Jeffrey Dow and I am studying Computer Science at Southern New Hampshire University. This repository contains all of my work for my CS 465 Full Stack Web Development course.

Travlr Getaways is an integrated full-stack web application created using the MEAN stack. Building this application was a practical exercise that helped me combine front-end design, secure back-end API development, and database management – key skills that will be required in my future job as an AI and operations manager.

8-1 Journal:

Architecture

  As the development process of the Travlr Getaways application proceeded, the frontend transitioned from classic server-rendered pages to the SPA approach. At the very beginning, when using Express HTML and JS, it was the server that did all the work and provided a ready-made HTML file for every request. While this method is quite simple, it requires a full page refresh for each user move. The conversion of the admin part to an Angular SPA made the client responsible for the rendering. This architecture gives a very smooth and application-like feel to the administrative part because the interface is updated on the fly when only needed data is fetched.  

  As for the backend architecture, MongoDB was used as a NoSQL database instead of an SQL one. Being very flexible and suitable for the JavaScript environment (the MEAN stack), it is perfect for the job. In addition, travel itineraries and destination descriptions may have a wide variety of attributes, and the lack of schema migrations makes the process of development faster and horizontally scalable.

Functionality

  Although JavaScript is a powerful programming language that helps to create the logic of the app, JSON (JavaScript Object Notation) is a mere data-interchange format. JSON has no executables inside — only plain text. In a full-stack application, JSON plays a vital role in connecting the frontend and backend parts of it. Once the Angular frontend makes a request for trip data, the Node.js/Express backend fetches it from MongoDB, prepares a JSON payload, and sends it back through the API request.

  Refactoring was an ongoing activity to make an app more functional and efficient. One of such cases when refactoring was used to improve the application was replacing static HTML pages with dynamic Handlebars (.hbs) templates. It allowed to encapsulate repeating HTML code into UI components such as header and footer partials, which means that the application follows the DRY (Don't Repeat Yourself) approach.

Testing

  A reliable API needs to be tested properly for the requesting and fetching of data. In the full-stack app, the endpoints refer to the specified URLs where the frontend interacts with the backend and the methods (GET, POST, PUT, DELETE) are the particular CRUD actions requested by the user.

  This testing needs to be done in such a way as to confirm that the correct payloads of data and the proper HTTP status codes are returned. Testing becomes more complex when security is taken into consideration. With regards to the administrative part, testing was done in such a way as to simulate the JWT state and confirm that public endpoints were accessible while protected endpoints blocked unauthorized requests.

Reflection

  This development of a full-stack application has truly helped me build my core foundation in terms of technology, and it matches my career goals related to artificial intelligence and operations management. The understanding of the MEAN stack technology has helped me understand software from a higher perspective, where I can consider how data is stored and transferred safely in pipelines, and how it is eventually used by the end-user.

  These concepts of secure data pipelines and API architecture are crucial for integration with AI systems, where the scalability of backend technology becomes highly important. Moreover, my practical experience of developing an entire application cycle and making sure that it is implemented with efficiency and security will be useful for my future leadership roles.
