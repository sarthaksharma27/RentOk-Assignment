
# RentOk-Assignment

![Screenshot from 2023-11-19 14-59-05](https://github.com/sarthaksharma27/RentOk-Assignment/assets/130299888/d22e9dcc-a3a7-430b-8439-a19757eede5b)

A simplified web app where anyone can list their property, implements subdomain (multi-tenant) routing. Built with the Reactjs, Typescript etc, this application allows users to manage their property seamlessly. The goal is to create a dynamic and customizable web application where the appearance and content of the page change based on the subdomain accessed.

# Features

- **Color Scheme:** Each subdomain should have its own distinct color scheme.
- **Content:** Different subdomains may display different textual content on the page.
- **Images:** Customizable images associated with each subdomain.
- **Styles:** Basic styling such as fonts, margins, etc.


## Future plan

In the future, when there are many subdomains, I have added a form. The first step is user authentication 🔐. Once authenticated, if there is a paid plan for listing 💼 (subject to company policies), users can provide subdomain details and other necessary information. This information will be dynamically added to our system ⚙️.

Currently, this feature is in the development stage 🛠️. I haven't added this due to limited time availability ⏳.





## use case of helper.ts

This code is a utility for determining the current app based on the subdomain of the website. It uses the getSubdomain function to extract the subdomain from the window's location, and then it checks the APPS array to find the corresponding app. If no subdomain is present or if the subdomain is not found, it defaults to the main app. 🌐✨

## use case of constants.ts

This code defines an array named APPS that contains objects representing different subdomains and their corresponding React routers. Each object includes the subdomain name, the associated router component, and a boolean indicating whether it's the main app. The routers include AppRouter for the main domain ("www"), Client1Router for "client1" subdomain, and Client2Router for "client2" subdomain. 🌐🚀

## Tech Stack

- [React.js](https://react.dev/)
- [Typescript](https://www.typescriptlang.org/)

# Installation


```bash
  npm install
  npm run dev
```
Visit http://localhost:5173 for the main domain.

For the subdomain, go to http://client1.localhost:5137

For the subdomain, go to http://client2.localhost:5137


  

    
