# WebSkeleton

A readymade authentication system in MEAN stack for creating web apps. 

    ###M-MongoDB
    ###E-ExpressJS
    ###A-AngularJS
    ###N-NodeJS

###Features :

    ####1)  Register a new User
    ####2)  Login 
    ####3)  Logout
    ####4)  Email Verification
    ####5)  Edit Profile
        ####->Username
        ####->Profile data(Name,Address)
        ####->Add mobile number
    ####6)  Mobile number verification
    ####7)  Reset Password using Email
    ####8)  Shows login status on top
    ####9)  SPA design(Single Page Application)
    ####10) Google SignIn integration
    ####11) Facebook SignIn integration
    ####12) Realtime Username Availability Check
    ####13) Loading Screen Animations (Easily configurable)
    ####14) Database in MongoDB(JSON format)
    ####15) Full application easily configurable and manageable
    ####16) Bootstrap Enabled
    ####17) Full Session Management capabilities
    

## Getting Started

### Prerequisites

####For running purposes

    -Node.js installed on the system
    -MongoDB installed on the system and configured
    -A Twilio Account SID,Token and Mobile Number for using mobile number verification
     (Get them by registering at their website https://www.twilio.com/)
    -A valid Email account and password for sending Emails for email verification
    -Google ClientId ,Api key
    (Get it by registering as developer from https://console.developers.google.com)
    -Facebook AppId
    (Get it by registering as developer from https://developers.facebook.com)

####Following node package is required to be installed globally

    -bower
    >npm install -g bower

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

    Setting up application
        -Clone the project
        -Open cmd/terminal
        -Change current directory to project directory
        -Run command:
            >npm install
        -Change current directory to public
        -Run commands:
            >npm install
            >bower install 
    
        -Go to project directory > config and open config.js
            >Replace database path with your own database path.
            >Replace session database path for session database.
            >Add Email id,password to send email from.
            >Add Twilio account id,token and number to send message from.  
            >Change session keys suitably(any no. of random strings).

        -Go to project directory > public > scripts > app.js
            >Add google client Id and api key
            >Add facebook appId

    Running the application
        -Open cmd/terminal 
            >mongod --dbpath="Directory of mongodb databases"
        -Open another cmd window/terminal
            >node serverstart.js
        -Open browser and in address bar type:
            localhost:1234

    Yay! the application is ready


## Built With

* [AngularJS](https://angularjs.org/) - The web framework used
* [NodeJS](https://nodejs.org/en/) - Platform used for creating and running server
* [ExpressJS](https://expressjs.com/) - The node.js framework used
* [MongoDB](https://www.mongodb.com/) - Used to creating and managing database 
* [Yeoman](http://yeoman.io/) - Used for running generators.
* [Angular-generator](https://github.com/yeoman/generator-angular) - Used for creating angular application base. 
* [Express-generator](https://www.npmjs.com/package/express-generator) - Used for creating base structure for nodejs application.  


## Authors

* **Himanshu Chandra** - *Initial work* - (https://github.com/himanshuchandra)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details


