# Namaste React

# parcel
- Dev build
- live server
- HMR - Hot Module Replacement (automatically refreshes)
- File watching algorithm - written in c++
- Caching - faster builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different dev and prod bundles

# Food ordering app

/**
 * Header
 *  - Logo
 *  - Nav items
 * Body
 *  - Search
 *  - RestaurantContainer
 *      - RestaurantCard
 *          - Img
 *          - Name of Res, Star Rating, Cuisine, Delivery time
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 * 
 */


Two types of export/import

- default export/import

export default Component
import Component from "path"

- Named export/import

export const Component
import {Component} from "path"

# React hooks
(Normal JS utility functions)
useState hook -- superpowerful state variable
useEffect hook


# Reconsciliation Algorithm
res-container
7 rescards - filtered 3 rescards

# Virtual dom - is a representation of an actual dom
Actual dom - react elements


# 2 types routing in web apps
- client side routing
- server side routing

# Redux Toolkit
- Install @reduxjs/toolkit and react-redux
- Build our store
- Connect our store to our app
- Slice ( cart slice ) to add items to the cart
- Dispatch(action)
- Selector
 

# Types of testing (Developer)
- Unit testing => you test your react component in isolation of the app, ex: Testing header cmpt only
- Integration testing => Testing the integration of the component (writing code to test). Testing the interaction between the cmpts and the events happening
- End To End testing - e2e testing => Testing starts from user login to the app till the user leaves the app.

- Testing is a part of development 

# Setting Up Testing in our app
- Install React Testing Library
- Install jest
- Install babel dependencies
- Configure babel
- Configure Parcel config file to disable default babel transpilation
- Jest configuration
- Install jsdom library
- Install @babel/preset-react - to make JSX work in test cases
- Include @babel/preset-react in my babel config
- npm i -D @testing-library/jest-dom
