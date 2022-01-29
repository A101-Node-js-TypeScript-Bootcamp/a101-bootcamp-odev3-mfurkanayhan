const AWS = require("aws-sdk");
const { v4: uuidv4 } = require("uuid");

AWS.config.update({
  region: "us-east-1",
  accessKeyId: "AKIAY7EBLO63TQSIZD5J",
  secretAccessKey: "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",
  endpoint: "https://dynamodb.us-east-1.amazonaws.com",
});

var docClient = new AWS.DynamoDB.DocumentClient();

var TABLE_NAME = "something";
const harry = {
  id: uuidv4(),
  name: "Harry Potter",
  alternate_names: [],
  species: "animal",
  gender: "male",
  house: "Gryffindor",
  dateOfBirth: "31-07-1980",
  yearOfBirth: 1980,
};

module.exports.add = async (req, res) => {
  var params = {
    TableName: TABLE_NAME,
    Item: harry,
  };
  await docClient.put(params, function (err, data) {
    if (err) {
      console.error(
        "Unable to add item. Error JSON:",
        JSON.stringify(err, null, 2)
      );
    } else {
      console.log("Added item:", JSON.stringify(data, null, 2));
    }
  });
};

module.exports.get = async (req, res) => {
  var params2 = {
    TableName: TABLE_NAME,
    Key: {
      id: "a06f631e-f84f-419f-9ad9-9bc176464239",
    },
  };

  docClient.get(params2, function (err, data) {
    if (err) {
      console.error(
        "Unable to read item. Error JSON:",
        JSON.stringify(err, null, 2)
      );
    } else {
      console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
    }
  });
};

module.exports.put = async (req, res) => {
  var params2 = {
    TableName: TABLE_NAME,
    Key: {
      id: "a06f631e-f84f-419f-9ad9-9bc176464239",
    },
    UpdateExpression: "set house = :r",
    ExpressionAttributeValues: {
      ":r": "enes",
    },
    ReturnValues: "UPDATED_NEW",
  };

  await docClient.update(params2, function (err, data) {
    if (err) {
      console.error(
        "Unable to read item. Error JSON:",
        JSON.stringify(err, null, 2)
      );
      res.send({ status: false });
    } else {
      console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
      res.send({ status: true });
    }
  });
};

module.exports.delete = async (req, res) => {
  var params = {
    TableName: TABLE_NAME,
    Key: {
      id: "042848b4-b02c-433b-b888-5d7ccdc5e587",
    },
  };
  docClient.delete(params, function (err, data) {
    if (err) {
      console.error(
        "Unable to delete item. Error JSON:",
        JSON.stringify(err, null, 2)
      );
    } else {
      console.log("DeleteItem succeeded:", JSON.stringify(data, null, 2));
    }
  });
};
