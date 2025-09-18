# Torch.AI Interview Documentation
Torch.AI technical Interview


## Requirements:
Node.js v18+ <br>
npm

## To Run:
`node index.js`

Navigate to: <http://localhost:3000/weather/>

Enter latitude and longitude.<br>
**Note: Coordinates must be in the United States**

You can also navigate to <http://localhost:3000/weather/lat,long> for directly looking up weather.

To access requests navigate to <http://localhost:3000/api/weather/requests>

## Note to Graders:
I did a local simple JSON file for the Database as I didn't have time to ensure a well developed SQL or MangoDB. With additional time I would include a MongoDB as that is what I am most familiar with when using JS and HTML. Also, note that much of the formatting of this project is based on a project I did for Web2 on RESTful API. This method allows for seemless scaleability. <br>
The portion of this I struggled with most was setting up the environment. It has been some time (2ish) years since I worked on a project like this, as such I had to get the Node and npm with all dependencies took a while. Further, I had a number of errors with "router" dependency as it wouldn't allow '*' in the `routes.js` file. I had to research the error as it was something I couldn't figure out. I had to npm install express@4. <br>
I would also like to note this took me a little over 3 hours from opening VS Code to pushing to git. I understand this is a little long. <br>

