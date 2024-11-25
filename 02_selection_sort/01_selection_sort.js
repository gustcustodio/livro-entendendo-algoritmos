"use strict";

/**
 * Finds the index of the element with the smallest value in the array
 * @param {Array} array Source array
 * @returns {number} Index of the element with the smallest value
 */
function findSmallestIndex(array) {
  let smallestElement = array[0]; // Stores the smallest value
  let smallestIndex = 0; // Stores the index of the smallest value

  for (let i = 1; i < array.length; i++) {
    if (array[i] < smallestElement) {
      smallestElement = array[i];
      smallestIndex = i;
    }
  }

  return smallestIndex;
}

/**
 * Sort array by increment
 * @param {Array} array Source array
 * @returns {Array} New sorted array
 */
function selectionSort(array) {
  let sortedArray = [];
  let copyArray = array.slice();
  let length = array.length;

  for (let i = 0; i < length; i++) {
    // Finds the smallest element in the array
    let smallestIndex = findSmallestIndex(copyArray);
    // Adds the smallest element to new array
    sortedArray.push(copyArray.splice(smallestIndex, 1)[0]);
  }

  return sortedArray;
}

const sourceArray = [5, 3, 6, 2, 10];
const sortedArray = selectionSort(sourceArray);

console.log("Source array - ", sourceArray); // [5, 3, 6, 2, 10]
console.log("New sorted array - ", sortedArray); // [2, 3, 5, 6, 10]
