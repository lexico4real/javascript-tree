'use strict';

function manipulateStudentRecord(obj, operation, prop, newValue) {
  // write your code here
  if (operation === 'add') {
    obj[prop] = newValue;
  }

  if (operation === 'delete') {
    delete obj[prop];
  }

  if (operation === 'edit') {
    obj[prop] = newValue;
  }

  return obj;
}