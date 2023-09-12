const returnFirstTwoDrivers = function (arr) {
  return arr.slice(0, 2);
};

const returnLastTwoDrivers = function (arr) {
  return arr.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (integer) {
  return function (fare) {
    return fare * integer;
  };
};

const fareDoubler = (fare) => createFareMultiplier(2)(fare);

const fareTripler = (fare) => createFareMultiplier(3)(fare);

const selectDifferentDrivers = function (arr, fn) {
  return fn(arr);
};
