define({ "api": [
  {
    "type": "GET",
    "url": "/polls/:pollId",
    "title": "",
    "name": "GetPoll",
    "group": "poll",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "pollId",
            "description": "<p>Polls unique ID.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"title\": \"MyPoll\",\n  \"creationDate\": \"2015-11-01T13:01:11.204Z\",\n  \"state\": \"Open\",\n  \"questions\": [\n    {\n      \"title\": \"Q21\",\n      \"type\": \"easy\",\n      \"_id\": \"56364f9a39ac36fd72c74e5f\",\n      \"choices\": [\n        {\n          \"key\": \"R1\",\n          \"text\": \"Rep1\",\n          \"_id\": \"56364f9a39ac36fd72c74e60\"\n        }\n      ]\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the Poll was not found.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n\"Poll not found\"",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "poll"
  },
  {
    "type": "",
    "url": "GET",
    "title": "/polls",
    "name": "GetPolls",
    "group": "polls",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n  \"_id\": \"51bb793aca2ab77a3200000d\",\n  \"title\": \"TestTest\",\n  \"creationDate\": \"2015-11-01T13:01:11.204Z\",\n  \"state\": \"Close\",\n  \"__v\": 1,\n  \"questions\": [\n    {\n      \"title\": \"Q21\",\n      \"type\": \"easy\",\n      \"_id\": \"56364f9a39ac36fd72c74e5f\",\n      \"choices\": [\n        {\n          \"key\": \"R1\",\n          \"text\": \"Rep1\",\n          \"_id\": \"56364f9a39ac36fd72c74e60\"\n        }\n      ]\n    }\n  ]\n},\n{\n  \"_id\": \"51c35e5ced18cb901d000001\",\n  \"title\": \"Test2\",\n  \"creationDate\": \"2015-04-29T12:54:59.000Z\",\n  \"state\": \"Close\",\n  \"__v\": 0,\n  \"questions\": [\n    {\n      \"title\": \"Q1\",\n      \"type\": \"Easy\",\n      \"_id\": \"56360d178b275b6b2519d17a\",\n      \"choices\": [\n        {\n          \"key\": \"R1\",\n          \"text\": \"La réponse 1.\",\n          \"_id\": \"56360d178b275b6b2519d17c\"\n        },\n        {\n          \"key\": \"R2\",\n          \"text\": \"La réponse 2.\",\n          \"_id\": \"56360d178b275b6b2519d17b\"\n        }\n      ]\n    }\n  ]\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "polls"
  }
] });