# Paradigms In JavaScript

Let's start by defining what javascript is;

JavaScript is an interpreted programming language used by the _browser_ but can also be used at the server side (Nodejs): which is a runtime composed by a javascript engine used by chrome known as V8 and some features from C++.

## Paradigms in javascript

The most common and practical paradigms in javascript are **_Functional Programming_** and **_Object Oriented Programming_** which both when mastered, give developers the ability to write robust code in a way that may seem efficient to a specific program.

Now we take a look at each of the above-listed Paradigms;

## **Functional Programming**

Functional programming AKA _Declarative programming_ is a programming pattern centered around functions is involves closures and lambdas to execute some certain task. Here is an example below.

```javascript
const developers = [
  {
    name: "James",
    yearsOfExperience: 2,
    language: "javascript",
  },
  {
    name: "Adam",
    yearsOfExperience: 5,
    language: "javascript",
  },
  {
    name: "Will",
    yearsOfExperience: 1,
    language: "javascript",
  },
  {
    name: "Sam",
    yearsOfExperience: 7,
    language: "javascript",
  },
];

function listDevelopers() {
  developers.forEach((developer) => {
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

How about we go further by peeking at what closures are, A closure is a function which has another function embedded inside a function with reference to its lexical scope (surrounding state) eg;

```javascript
function closure() {
  const name = "Carl";
  return function greeting() {
    return "Hello" + name;
  };
} // return [function greeting]
```

This may seem gibberish to a lot of new developers, I also felt that when I was first read about it but what it basically does is it logs hello plus the given name given as argument.

## **Object Oriented Programming**

Object-oriented programming AKA _Imperative prgramming_ by the name implies it's a pattern of programming using objects, it consists of classes _objects_ and prototypes eg;

```javascript
const John = {
  skills: ["Python", "Javascript", "SQL"],
  age: 22,
  language: "English",
  skilled: function skilled() {
    if (this.skills.length > 2) {
      return "He's got some skills";
    } else {
      return "Fair Enough";
    }
  },
};
```

The above example isn't something big but just an insight on object literals, an account on how to mutate values of an object and access it as well.

Now we try something much complex a practical

```javascript
class Developer {
  constructor(takes_in_something) {
    // constructor
    this.takes_in_something = takes_in_something;
  }

  createMethod(param) {
    // method runs when new instance gets invoked
  }
}
```

To make a new instance of the class;

```javascript
const developer = new Developer();

await developer.createMethod(param);
```

The main advantage of using this type of approach is because it eliminates redundancy in code that's why developers use helper functions for code abstraction.
