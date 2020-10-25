const developers = [
  {
    name: "James",
    exprecience_years: 2,
    language: "javascript",
  },
  {
    name: "Adam",
    exprecience_years: 5,
    language: "javascript",
  },
  {
    name: "Will",
    exprecience_years: 1,
    language: "javascript",
  },
  {
    name: "Sam",
    exprecience_years: 7,
    language: "javascript",
  },
];

function getMostExp() {
  developers.forEach((developer) => {
    const { name, exprecience_years, language } = developer;
    console.log(
      `${name} has ${exprecience_years} years of experience in ${language}`
    );
  });
}

// getMostExp();

function closure() {
  const name = "Carl";
  return function greeting() {
    return "Hello" + name;
  };
}

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

class Human {
  constructor(takes_in_something) {
    // constructor
    this.takes_in_something = takes_in_something;
  }

  method_to_called_by_class(param) {
    // method runs when ever new instance of the class is made
  }
}
