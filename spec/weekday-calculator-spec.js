import { DateApp } from './../src/weekday-calculator.js';
// import { leapYearAddDays } from './../src/weekday-calculator.js';
// import { resetDays } from './../src/weekday-calculator.js';
// import { getWeekday } from './../src/weekday-calculator.js';

describe('DateApp', function() {

  it('should return Thursday', function() {
    let userDate = new DateApp();
    expect(userDate.getWeekday(737209)).toEqual("Thursday");

  });
});
