import { DateCalculator } from './../src/weekday-calculator.js';

describe('DateCalculator', function() {

  it('should return Thursday', function() {
    let userDate = new DateCalculator(2019, 5, 30);
    expect(userDate.getWeekday(737209)).toEqual("Thursday");

  });
});
