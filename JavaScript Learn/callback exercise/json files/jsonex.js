const jsonnames = `[
  "Spongebob",
  "Patrick",
  "Squidward",
  "Sandy"
]`;
const jsonperson = `{
  "name": "Spongebob",
  "age": 30,
  "isEmployed": true,
  "hobbies": [
    "Jellyfishing",
    "Karate",
    "Cooking"]
}`;
const jsonpeople = `[
  {
    "name": "Spongebob",
    "age": 30,
    "isEmployed": true
  },
  {
    "name": "Patrick",
    "age": 32,
    "isEmployed": false
  },
  {
    "name": "Squidward",
    "age": 50,
    "isEmployed": true
  },
  {
    "name": "Sandy",
    "age": 25,
    "isEmployed": true
  }
]`;

const parsedData = JSON.parse(jsonnames);
const jsonString = JSON.stringify(jsonnames);

console.log(parsedData);

fetch("peopleex.json")
  .then(response => response.json())
  .then(values => values.forEach(value => console.log(value.age)))
  .catch(error => console.error(error));