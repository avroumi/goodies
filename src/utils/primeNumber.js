export const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const date = "2026-01-29T08:25:59.010Z";

export const currentDayThisYear = (CurrentDate) => {
  const year = Number(CurrentDate.split("-")[0]);
  console.log(year);
  let bissextile = false;
  if (year % 4 == 0) {
    bissextile = true;
  }
  const month = Number(CurrentDate.split("-")[1]);
  const day = Number(CurrentDate.split("-")[2]);

  if (month === 1) {
    return day;
  }
  const dayInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let totalDay = 0;

  for (let i; i < month - 1; i++) {
    totalDay += dayInMonth[i];
  }
  totalDay += day;
  if (bissextile) {
    totalDay += 1;
  }
  return totalDay;
};
