from flask import Flask, render_template, request, jsonify
from pymongo import MongoClient
from bson.objectid import ObjectId
from flask_cors import CORS

app = Flask(__name__)

client = MongoClient("mongodb://localhost:27017")

db = client["flaskreactfullstack"]  # db name

CORS(app)  # prevent the CORS error


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/users", methods=["POST", "GET"])
def data():
    firstname = "firstname"
    lastname = "lastname"
    emailId = "emailId"

    if request.method == "POST":
        body = request.json
        firstname = body["firstname"]
        lastname = body["lastname"]
        emailId = body["emailId"]

        db["users"].insert_one(
            {"firstname": firstname, "lastname": lastname, "emailId": emailId}
        )

        return jsonify(
            {
                "status": "Data is posted to MongoDB",
                "firstname": firstname,
                "lastname": lastname,
                "emailId": emailId,
            }
        )

    elif request.method == "GET":
        alldata = db["users"].find()
        datajson = []
        for data in alldata:
            id = data["_id"]
            firstname = data["firstname"]
            lastname = data["lastname"]
            emailId = data["emailId"]

            dataDict = {
                "id": str(id),
                "firstname": firstname,
                "lastname": lastname,
                "emailId": emailId,
            }
            datajson.append(dataDict)
        return jsonify(datajson)


@app.route('/users/<string:id>', methods=['GET', 'PUT', 'DELETE'])
def onedata(id):

    if request.method == 'GET':
        data = db["users"].find_one({"_id": ObjectId(id)})
        id = data['_id']
        firstname = data['firstname']
        lastname = data['lastname']
        emailId = data['emailId']

        dataDist = {
            "id": str(id),
            "firstname": firstname,
            "lastname": lastname,
            "emailId": emailId,
        }
        return jsonify(dataDist)

    if request.method == 'DELETE':
        db["users"].delete_many({"_id": ObjectId(id)})
        return jsonify({
            "status": "Data id: "+id+" is  deleted"
        })

    if request.method == 'PUT':
        body = request.json
        firstname = body["firstname"]
        lastname = body["lastname"]
        emailId = body["emailId"]

        db["users"].update_one({
            {'_id': ObjectId(id)},
            {
                "$set": {
                    "firstname": firstname,
                    "lastname": lastname,
                    "emailId": emailId,
                }
            }
        })


if __name__ == "__main__":
    app.debug = True
    app.run()
