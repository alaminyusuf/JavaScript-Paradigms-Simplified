const developers = [
  {
    name: "James",
    exprecience_years: 2,
    language: "javascript"
  },
  {
    name: "Adam",
    exprecience_years: 5,
    language: "javascript"
  },
  {
    name: "Will",
    exprecience_years: 1,
    language: "javascript"
  },
  {
    name: "Sam",
    exprecience_years: 7,
    language: "javascript"
  }
];

function getMostExp() {
  developers.forEach(developer => {
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
console.log(closure("John Doe"));
