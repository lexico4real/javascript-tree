/*
Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],…] (si < ei), find the minimum number of conference rooms required.

For example, Given [[0, 30],[5, 10],[15, 20]], return 2.
*/
const minimumRoom = (meetings) => {
  let roomCount = 0;
  let startTime = [];
  let endTime = [];
  for (let meeting of meetings) {
    let [start, end] = meeting;
    startTime.push(start);
    endTime.push(end);
  }
  for (let j = 0; j < startTime.length; j++) {
    for (let i = j + 1; i < endTime.length; i++) {
      // console.log(
      //   startTime[j],
      //   '>',
      //   startTime[i],
      //   'OR',
      //   endTime[j],
      //   '>',
      //   endTime[i]
      // );
      if (startTime[j] > startTime[i] || endTime[j] > endTime[i]) {
        console.log(
          startTime[j],
          '>',
          startTime[i],
          'OR',
          endTime[j],
          '>',
          endTime[i]
        );
        roomCount++;
      }
    }
  }
  return roomCount;
};

let meetings = [
  [0, 30],
  [5, 10],
  [15, 20],
];
console.log(minimumRoom(meetings));
