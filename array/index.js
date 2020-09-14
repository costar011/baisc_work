const arr = [];

console.log(`현재  arr:${arr}`);

setTimeout(() => {
  console.log("데이터를 한 개 추가합니다. .push()");
  arr.push("라이언");
  console.log(`현재 arr: ${arr}`);
}, 1000);

setTimeout(() => {
  console.log("데이터를 한 개 추가합니다. .push()");
  arr.push("어피치");
  console.log(`현재 arr: ${arr}`);
}, 2000);

setTimeout(() => {
  console.log("데이터를 한 개 추가합니다. .push()");
  arr.push("무지");
  console.log(`현재 arr: ${arr}`);
}, 3000);

setTimeout(() => {
  console.log("데이터를 한 개 추가합니다. .push()");
  arr.push("제이지");
  console.log(`현재 arr: ${arr}`);
}, 4000);
