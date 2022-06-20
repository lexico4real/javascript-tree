/*
Given a person's work hours and an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],…] (si < ei), print out the free time of this person. For example,
work hour: [0, 45]
meeting time: [3, 30],[5, 10],[15, 20]
free time: [0,3],[30,45]
*/
const minimumRoom = (meetings) => {
  let result = [];
  let startTime = [];
  let endTime = [];
  for (let meeting of meetings) {
    let [start, end] = meeting;
    startTime.push(start);
    endTime.push(end);
  }
  let leastStartTime = startTime[0];
  for (let j = 0; j < startTime.length; j++) {
    if (startTime[j] >= 0 && endTime[j] <= 45) {
      for (let i = j + 1; i < endTime.length; i++) {
        if (startTime[j] > startTime[i] || endTime[j] > endTime[i]) {
          // if (leastStartTime > startTime[j]) {
          //   leastStartTime = startTime[j];
          //   console.log(leastStartTime);
          // }
          // console.log(
          //   startTime[j],
          //   '>',
          //   startTime[i],
          //   'OR',
          //   endTime[j],
          //   '>',
          //   endTime[i]
          // );
        }
      }
    }
  }
  return result;
};

let meetings = [
  [0, 30],
  [5, 10],
  [15, 20],
];
minimumRoom(meetings);
