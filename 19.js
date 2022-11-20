const isLeapYear = (year) => {
    return year % 4 === 0 && year % 100 !== 0 || year % 400 == 0;
}

const daysInMonth = (month, year) => {
    switch (month) {
        case 4:
        case 6:
        case 9:
        case 11:
            return 30;
        case 2:
            return isLeapYear(year) ? 29 : 28;
        default:
            return 31;
    }
}

const daysBetweenYears = (startYear, endYear) => {
    let daysBetween = 0;
    for (i = startYear; i <= endYear; i++) {
        daysBetween += isLeapYear(i) ? 366 : 365;
    }
    return daysBetween;
}

// 1 Jan 1900 was Monday, starting count at 1 Jan 1901
let day = daysBetweenYears(1900, 1901);
let month = 1;
let year = 1901;
let count = 0;
while (year <= 2000) {
    if (day % 7 == 0) {
        count++;
    }
    day += daysInMonth(month, year);
    month++;
    if (month > 12) {
        month = 1;
        year++;
    }
}
console.log(count);
