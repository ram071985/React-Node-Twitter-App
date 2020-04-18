# Twitter Search Api (Html/Css, Bootstrap, Javascript, React and Node.js)

App powered with React.js, Node.js and Express that utilizes twitter's search api with a landing page, search page with options for looking up tweets by a user handle or by topic and a page with my 5 favorite Twitter users and 10 random tweets from them. See my deployed version on Heroku - [HERE](https://floating-shore-26202.herokuapp.com/) or open-source here at my remote repostiory [Github](https://github.com/ram071985/twitter-app)

![](../images/twitter-capstone.png)

## Summary

In order to better stand how an internal api works along with RESTful APIs, it's crucial to work with a public api like Twitter's Standard Search API to understand how to send and retreive data in web apps.  On the front-end of this app I used the javascript framework React.js with client-side routing and bootstrap for styling along with customized CSS with media quries for responsive design and UI.  The back-end uses Express for routing the internal api and Node.js as a "middle-man" for making HTTP requests to Twitter and sending back data to the app's client side.  On the search section of the web app you can either choose between a query of a twitter user's handle or a random topic which dynamically renders 10 tweet cards with the data displayed in twitter-like fashion.  On the random page the user can choose from one of my 5 favorite twitter users and 10 tweet results are generated again with the data through the internal api call, to the server, to the twitter http request address and back to the client side to display on the UI.  I gained a lot of experience with postman to check the api queries and JSON data coming back.  Using the Axios and Moment libraries was very helpful with making HTTP requests and parsing date information.   

## Features

- React.js front-end UI
- Express internal API
- Node.js server
- responsive UI/UX
- user handle and topic twitter tweets search
- choose between 5 of my favorite twitter users to see 10 random tweets from them


## Author 

* **Reid Muchow** - *Front-End Software Developer* - [Website](https://www.reidmuchow.com) | [LinkedIn](https://www.linkedin.com/in/reidmuchow/)
