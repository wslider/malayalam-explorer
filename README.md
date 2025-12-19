# Malayalam Explorer 

## Overview:

A Code:You capstone project highlighting HTML, CSS, and JavaScript abilities.

## Project Overview:

Educational app for Malayali diaspora and Travelers seeking to explore Kerala's language, geography and culture. 


## Project Organization

| Page | Description |
|------|-------------|
| **Index / Home Page** | Includes a map and information about Kerala, World Clock displaying User's Local Time and IST, and navigation to language flashcardsa and featured location pages. |
| **Flashcards** | Learn Malayalam with interactive flashcards of the most commonly used words with example phrases. |
| **Locations** | General information about locations within Kerala and hub page to access featured location pages. | 
| **Malayalam Script Flashcards** | Learn the basics of reading and writing Malayalam Script. (Advanced Feature)|
| **Trivandrum** | Featured location page for the Capitol city including a map, weather data and information. (Advanced Feature)|
| **Munnar** | Featured location page for the mountain town of Munnar including a map, weather data and information. (Advanced Feature)|
| **Kochi** | Featured location page for the port city including a map, weather data and information. (Advanced Feature)|


## Features for Capstone Requirements

| Requirement | Implementation |
|-------------|----------------|
| **Analyze data that is stored in arrays, objects, sets or maps and display information about it in your app.** |  Flashcard data stored in JSON Array of Objects with Shuffle mode, Previous, Next and Reset functionalities. Images and data for featured locations in locations page relies on looping through an array. |
| **Display Data Based on Some External Factor**| Display Bilingual World Clock with Local and IST. Recalculate times every minute - Set Interval of 1000ms. |
|**Use a regular expression to validate user input and either prevent the invalid input or inform the user about it (in all cases prevent invalid input from being stored or saved).**| Specific character requirements in form inputs for creating new cards and adding to the JSON file. Input validated before user can POST a new flashcard. Regex is used, especially where Malayalam script is required as input (see event listener for submitting a new card in flashcards.js). |
| **Create a Node.js web server using Express.js** | Server.JS and Package.JSON files. Use Express and ES Modules. Express serves public/ directory. |
| **Create an API that implements HTTP requests for GET and POST. Data can be stored in a JSON file on the back-end** | API enables HTTP requests for GET, POST (user can post their own flashcards to the data set) and DELETE. Data stored in a JSON on the backend (Flashcards.json).  |



## How to Download

1. **Clone the repository using GIT**
   ```bash
   git clone https://github.com/wslider/malayalam-explorer.git
   ```

2. **Navigate to the project directory**
   ```bash
   cd malayalam-explorer
   ```

3. **Install dependencies**
   ```bash
   npm install
   npm install express
   npm install nodemon 
   ```
4. **NPM Start**
    ```bash
    npm run dev
        -or-
    npm start
    ```

5. **Open Browser & Navigate to `http://localhost/3005`**
    - ! IMPORTANT: Do not use live server to view the UI. The server writes to a JSON file (flashcards.json) that live server is watching and it will refresh the page on a POST or DELETE request (creating new flashacards and deleting flashcards). 

 
## Features for MVP: 
- 2 Pages: Index.html and Flashcards.html 
- Responsive Mobile First Design with Media Query for Larger Screens 
- Flashcards with Next, Previous, Shuffle, Reset and Delete
    - Flip to Reveal Translation 
    - Start with 50 common words and phrases
- Form to Create and Submit (POST) new flashcards to the data set. 
- NodeJS and Express Server
- Custom API with GET, POST and DELETE interacting with Flashcards.json 
- World Clock Display 
    - Local Time and IST (Indian Standard Time)
    - Bilingual Greetings Displayed
    - Updated every minute (60000ms)


## Advanced Features: 
- Expand Flashcard Data to include 300+ words and phrases
- Locations Page with an Image, Map, Weather Conditions and Description for each featured location. 

## Future Advanced Features: 
- Add Playable Audio to Flashcards 
- Featured Location Pages with Maps and Information 
    - Trivandrum
    - Munnar
    - Kochi
- Malayalam Movie Search using The Movie Database API



## 10 Distinct commits
    1. ReadME and Project Proposal + Create Repository
    2. Site Organization - created files, folders (including .gitignore) 
    3. API setup  + create package.json - install express, nodemon & dependencies 
        - npm init -y
        - npm install express
        - npm install --save-dev nodemon
        - setup express server in server.js 
        - update package.json 
            -"scripts": {
                "test": "echo \"Error: no test specified\" && exit 1",
                "start": "node server.js",
                "dev": "nodemon server.js"
            }
        - npm install cors
        - npm install body parser
    4. Structure and styling for MVP pages - index.html and flashcards.html
    5. Created script.js variables, functions and event listeners for index.html features - world clock: Local Time & IST with bilingual greetings.
    6. Set up flashcard data in JSON - initial 10 - 50 cards for testing API and flashcard functionality. 
    7. Add custom CRD API endpoint and Express routes for GET, POST, and DELETE. - server.js
    8. Add flashcard navigation controls - flashcards.js 
        - Implement Next/Previous/Skip buttons and “click” to Flip with event listeners and array indexing.
        - Integrate shuffle mode for flashcards
        - Add shuffle() function, button toggle, and state to randomize deck order.
        - npm start and test `http://localhost/3005`
    9. Add additional flashcard data to flashcards.json - total count of 320. 
    10. First CSS polish after testing API and flashcard features  
    11+. ... refine css more, add additional stretch goals (commit each new feature). 


## Future Plans and Upcoming Versions:
    1. Continue to develop and expand advanced features.
    - add playable audio for cards
    - add flashcard search 
    - add location pages 
    - mark flashcards for review and save progress on deck locally
    - use tracking and achievment badges  
    2. Public version on GitHub pages 


 
# Site Map
- **server.js**
- **package.json**
- **package-lock.json**
- **readme.md** 
- **public/**
  - index.html
  - flashcards.html
  - locations.html
  - script.js 
  - flashcards.js
  - locations.js 
  - utils.js (functions to export)
  - **css/**
    - style.css
    - flashcards.css
    - locations.css
  - **data/**
    - flashcards.json
  - **images/**
    - kerala-map.png
    - ... 
  - **audio/** (advanced feature)
    - 1.mp3
    - .... 
- **.gitignore** 
    - node modules
    - env 


## AI USAGE - Grok 4 Assistance in the process of creating parts the following ... 
-  Delete Card event listener in flashcards.js 
-  Post Card event listener in flashcards.js
-  The function updateKeralaTimeGreeting() in script.js 
-  Obtaining Initial List & Translations of Most Commonly Used Words and Example Phrases for flashcards - flashcards.json 
    - * Translations checked and verified by native Malayalam speakers



Analyze data that is stored in arrays, objects, sets or maps and display information about it in your app.

Use a regular expression to validate user input and either prevent the invalid input or inform the user about it (in all cases prevent invalid input from being stored or saved).

Calculate and display data based on an external factor (ex: get the current date, and display how many days remaining until some event). 

Create a node.js web server using Express.js.

Create an API that implements HTTP requests for GET and POST. Data can be stored in a JSON file on the back-end