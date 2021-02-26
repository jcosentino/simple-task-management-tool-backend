// tslint:disable-next-line: no-var-requires
require('dotenv').config();

module.exports = {
    "swagger": "2.0",
    "info": {
      "version": "1.0.0",
      "title": "Simple Task Management Tool",
      "description": "This application is used to manage your tasks!",
      "license": {
        "name": "",
        "url": ""
      }
    },
    "host": `localhost:${process.env.PORT}`,
    "basePath": "/",
    "tags": [
      {
        "name": "Task",
        "description": "API for CRUD functionality for Tasks management"
      }
    ],
    "schemes": [
      "http"
    ],
    "consumes": [
      "application/json"
    ],
    "produces": [
      "application/json"
    ],
    "paths": {
      "/tasks": {
        "get": {
          "tags": [
            "Task"
          ],
          "description": "Retrieve all tasks",
          "parameters": [],
          "produces": [
            "application/json"
          ],
          "responses": {
            "200": {
              "description": "Retrieves all tasks, empty array is none are present",
              "schema": {
                "$ref": "#/definitions/Tasks"
              }
            }
          }
        }
      },
      "/task": {
        "post": {
          "tags": [
            "Task"
          ],
          "description": "Create new user in system",
          "parameters": [
            {
              "name": "task",
              "in": "body",
              "description": "Create a task",
              "schema": {
                "$ref": "#/definitions/Task"
              }
            }
          ],
          "produces": [
            "application/json"
          ],
          "responses": {
            "200": {
              "description": "New task gets created",
              "schema": {
                "$ref": "#/definitions/Task"
              }
            }
          }
        }
      },
      "/task/{id}": {
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "description": "ID primary key of task",
            "type": "string"
          }
        ],
        "get": {
          "tags": [
            "task"
          ],
          "summary": "Retrieve task with given ID",
          "responses": {
            "200": {
              "description": "Task is retrieved",
              "schema": {
                "$ref": "#/definitions/Task"
              }
            }
          }
        },
        "delete": {
          "summary": "Delete task with given ID",
          "tags": [
            "Task"
          ],
          "responses": {
            "200": {
              "description": "Task is deleted",
              "schema": {
                "$ref": "#/definitions/Task"
              }
            }
          }
        },
        "put": {
          "summary": "Update task with given ID",
          "tags": [
            "Task"
          ],
          "parameters": [
            {
              "name": "task",
              "in": "body",
              "description": "Updated task entry with new values",
              "schema": {
                "$ref": "#/definitions/Task"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Task has been updated!",
              "schema": {
                "$ref": "#/definitions/Task"
              }
            }
          }
        }
      }
    },
    "definitions": {
      "Task": {
        "required": [
          "id",
          "name"
        ],
        "properties": {
          "id": {
            "type": "integer",
            "uniqueItems": true
          },
          "name": {
            "type": "string"
          },
          "description": {
            "type": "string"
          },
          "dueDateMonth": {
            "type": "integer"
          },
          "dueDateDay": {
            "type": "integer"
          },
          "dueDateYear": {
            "type": "integer"
          },
          "status": {
            "type": "string"
          }
        }
      }
    }
  }
