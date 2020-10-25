# Programming Paradigms In Javascript

lets start by defining what javascript is

JavaScript is an interpreted programming language used by the _browser_ but can also be used at the server side (Nodejs): which it is a runtime composed by a javascript engine used by chrome known as V8 and some features from C++.

## Paradigms in javascript

The most common and practical paradigms in javascript are **_Functional Programming_** and **_Object Oriented Programming_** which both when mastered, gives developers the ability to write robust code in a way that may seen efficient to a specific program.

Now we take a look at each of the above listed Paradigms;

## **Functional Programming**

Functional prgramming is a programming pattern centered around functions is involves closures and lambdas to execute some certain task. Here is an example below.

```javascript
const developers = [
  {
    name: "James",
    yearsOfExperience: 2,
    language: "javascript"
  },
  {
    name: "Adam",
    yearsOfExperience: 5,
    language: "javascript"
  },
  {
    name: "Will",
    yearsOfExperience: 1,
    language: "javascript"
  },
  {
    name: "Sam",
    yearsOfExperience: 7,
    language: "javascript"
  }
];

function listDevelopers() {
  developers.forEach(developer => {
    const { name, experience_year, language } = developer;
    console.log(
      `${name} has ${yearsOfExperience} years of experience in ${language}`
    );
  });
} // James has 2 years of experience in javascript
// Adam has 5 years of experience in javascript
// Will has 1 years of experience in javascript
// Sam has 7 years of experience in javascript
```

How about we go further by peeking at what closures are, A closure is function which has another function embedded inside a funtion with refrence to its lexical scope (sorrounding state) eg;

```javascript
function closure() {
  const name = "Carl";
  return function greeting() {
    return "Hello" + name;
  };
} // return [function greeting]
```

This may seem gibberish to a lot of new developers, I also felt that when I was first read about it but what it basically does is it logs hello plus the given name given as argument.
