My First Server App
===

## Code Wars Kata

Complete [Kata 1](https://www.codewars.com/kata/regex-validate-pin-code) and [Kata 2](https://www.codewars.com/kata/alternate-capitalization/javascript), then follow the submission instructions, note that the instructions must be followed for each of these challenges.

## Lab

Create your first app and server (fullstack minus database)!

You can pick an "entity" (resource) **but** should:

1. Only have one level of properties (no nested objects or arrays)
1. Have at least one property of type:
    * string/text
    * number
    * boolean (true/false)

## Project

Your github project needs to contain both an `app` folder and a `server` folder.

* `app` contains your vue front end project
* `server` contains your data api express server

Both projects need to have full config: `package.json`, `.gitignore`, `.eslintrc`, `README.md`

## App

The app needs to display a list of resources and have an add form to add a new resource. Make sure to:

* Update the list after adding a new item
* Clear the add form after successful add

## Server

The server needs to:

* Use `express.json` to "read" POST body
* Use `cors` to handle direct request from app
* Create a `.json` file with initial data for the app
* Handle a `GET` to `/api/<your-resource-plural>` and return list of data
* Handle a `POST` to `/api/<your-resource-plural>` and update file then return the posted object

## Rubric

* app get and list display **2pts**
* app add form, post, and UI update **3pts**
* server setup **2pts**
* server `GET` and `POST` **3pts**
