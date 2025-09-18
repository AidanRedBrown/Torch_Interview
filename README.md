# Torch.AI Interview Documentation
Torch.AI technical Interview


## Requirements:
Flask==2.3.3 <br>
requests

## To Run:
In shell write:<br>
`>python3 -m venv venv`<br>
`>source venv/bin/activate`<br>
`>python3 app.py`<br>

Navigate to <http://localhost:3000/> <br>
Enter a latitude and longitude<br>
Or navigate to <http://localhost:3000/lat,long><br>
**Note: Coordinates must be in the United States**

Then you can see the requests at <http://localhost:3000/requests> <br>
or in server/db/request.json


## Note to Graders:
I instinctively wrote this project in Javascript and express as that is the language I have been using recently. Further, I had a RESTful project similar to this in javascript so I strutured this project similar to that assignment. I realized I was making a mistake when the javascript assignment was already finished. Further due to this extensive misstep, I was unable to do a proper database and instead used a large json file. With additional time I would have used a mongoDB as that is where most of my experience with RESTful api lies. Further I appologize that was unable to add a testing suite. 

My flask knowledge is limited compared to my express knowledge, as such, despite the similarities between the finished prodcut (javascript/express vs python/flask), it took me about 1.5 hours to research and ensure an accurate deliverable in python.

Due to my javascript mistake, from opening VS code to the final commit, this project took about 3:45.

If you have any questions, or would like to see the javascript version, please, feel free to reach out.

### Thank you for your time and I look forward to hearing more about this role.