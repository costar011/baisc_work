const students = [
  {
    name: "남도일",
    gender: "m",
    age: 18,
    grade: 2,
    printHandler: () => {
      console.log(`남도일은 18세 입니다.`);
    },
  },
  {
    name: "유미란",
    gender: "fm",
    age: 18,
    grade: 2,
    printHandler: () => {
      console.log(`유미란은 18세 입니다.`);
    },
  },
];

console.log(students[0].name);
console.log(students[1].name);

students[0].printHandler();
students[1].printHandler();
