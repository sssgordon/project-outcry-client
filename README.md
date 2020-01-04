# :construction_worker: Project Outcry :construction_worker:

![app demo](https://github.com/sssgordon/project-outcry-client/blob/master/public/Peek%202020-01-04%2022-48.gif)

## What this app is about

Project Outcry is an app made for Hong Kong protestors :construction_worker: to inform their lawyers the moment they get arrested. They only need to sign up on the website with a unique alias and tell that to Google Assistant at the moment of arrest. Outcry will immediately send an email to the user's lawyer.

Built for a 4-day Hackathon at Codaisseur, this app won the second-most-favorited app by popular vote :trophy: This is a minimum viable product and a work in progress. 

*If you have knowledge about Google OAuth 2.0, please let me know! My contact is in the final section below.*

## Table of contents

* [Technology used](#technology-used)
* [Goals for this project](#goals-for-this-project)
* [Technical details and repos](#technical-details-and-repo)
* [Work in progress](#work-in-progress)

## Technology used

:eyes::point_down: **Click links to see samples in this project** :point_down::eyes:

* [React](https://github.com/sssgordon/project-outcry-client/blob/master/src/App.js)
* [Redux](https://github.com/sssgordon/project-outcry-client/tree/master/src/actions)
* [Express](https://github.com/sssgordon/project-outcry-server/blob/master/index.js)
    * [REST API](https://github.com/sssgordon/project-outcry-server/blob/master/user/route.js)
* [Sequelize](https://github.com/sssgordon/project-outcry-server/blob/master/user/model.js)
* [Google Dialogflow](https://github.com/sssgordon/project-outcry-server/blob/master/dialogflow/route.js) :star2:
* [Google Login](https://github.com/sssgordon/project-outcry-client/blob/master/src/components/GoogleLoginButton.js) :star2:
* [Nodemailer](https://github.com/sssgordon/project-outcry-server/blob/master/email/route.js) :star2:
* [React-Bootstrap](https://github.com/sssgordon/project-outcry-client/blob/master/src/components/DetailsForm/DetailsForm.js) :star2:

:star2: New technology learned during Hackathon

## Goals for this project

In this Hackathon, participants were asked to produce a full-stack app using a new technology *not taught in the academy*. I mainly worked with Google Dialogflow alongside a couple more new ones (see above). I learned by reading the documentations and watching YouTube videos. In the end, the goal of this Hackathon is to practice learning new technology independently, apply what we learned in the academy, and have fun!

## Technical details and server repo

This is how the app is meant to be used:
* Imagine you're a protestor engaging in civil disobedience :construction_worker:
* Before taking to the streets, go to the client website and sign up
* Input your personal details, **lawyer's email**, and a **unique alias**
* The client will send a POST request to the Express server and create a new user
* When you create an alias, the client sends a PUT request to the Google Dialogflow API, storing a new $name entity in the API server
* When you get arrested, shout to Google Assistant: _**"I am < alias >!"**_
* Google Dialogflow will immediately match the $name entity in the API with your alias in the database
* When there is a match, the Express server will send an email to your specified lawyer email address using nodemailer, along with the filled-in personal details
* You may even add to your Google Assistant assertion the **location** and/or the **police station** you're being escorted to, and Google Dialogflow is smart enough to include those in the email to your lawyer
* The lawyer is notified and looks for you in the police station (sooner if this is specified)

The app consists of a React client (this repo), an Express server connected to a Sequelize database ([server repo](https://github.com/sssgordon/project-outcry-server)), and a Google Dialogflow interface that links the user to Google Assistant ([Dialogflow code exported from the API](https://github.com/sssgordon/project-outcry-client/tree/master/public/Dialogflow-code)).

## Work in progress

This mvp is still a work in progress. In order to build my ideal version, there are features which require technical knowledge currently beyond my capacity:

* Google OAuth 2.0
* Nodemailer alternative that better handles authorization issues with major email services
* Turning this into a mobile app (React Native?)

_If you wish to contribute to this project, hit me up at gordondashso@gmail.com!_
