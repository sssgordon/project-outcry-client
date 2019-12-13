# What is Outcry?

Outcry is an app made for Hong Kong protestors to inform their lawyers the moment they get arrested. They only need to sign up on the website with a unique alias and tell that to Google Assistant at the moment of arrest. Outcry will immediately send an email to the user's lawyer.

## Technologies

* ReactJS
* Express
* Sequelize
* Nodemailer
* Dialogflow

The app consists of a ReactJS client (this repo), an Express server connected to a Sequelize database ([this repo](https://github.com/sssgordon/lifeline-server)), and a Google Dialogflow interface that links the user to Google Assistant (I do not have time to export the Dialogflow code to another repo; you may nonetheless see some of how it works in the server code in the Dialogflow routes).
