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

const date = "2026-09-02T08:25:59.010Z";

export const currentDayThisYear = (currentDate) => {
  const dayInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const fullDate = currentDate.split("T")[0];
  console.log(fullDate);
  const [year, month, day] = fullDate.split("-").map(Number);

  console.log(day);
  let bissextile = false;
  if (year % 4 == 0) {
    bissextile = true;
  }

  let totalDay = day;

  for (let i = 0; i < month - 1; i++) {
    totalDay += dayInMonth[i];
  }

  if (bissextile && month > 2) {
    totalDay += 1;
  }
  return totalDay;
};

export const firstDayInMount = (date) => {
  return date.split("T")[0].split("-")[2] == "01";
};
