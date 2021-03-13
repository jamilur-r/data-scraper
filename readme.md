# Data scraping from Aljazeera Homepage

## Project structure -

The project contains a <strong>server.js</strong> and <strong>index.js</strong> file. <strong>server.js</strong> file
servers up a express server @ http://localhost:8000. Hittig the root route will open up puppeteer web scraping function 
and puppeteer does all the heavy lifting to scrap data from Aljazeera home page. After completition of scraping it will return image, title and body in a json format on the page that you accessed the server with.

