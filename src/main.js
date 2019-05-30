import DateCalculator from './weekday-calculator.js';
import $ from 'jquery';
import 'bootstrap';
import './styles.css';

$(document).ready(function () {
  $("#weekdayForm").submit(function(event){
    event.preventDefault();
    let countDays = 0;
    let monthInput = parseInt($("#monthInput").val());
    let dayInput = parseInt($("#dayInput").val());
    let yearInput = parseInt($("#yearInput").val());
    let dateObject = new DateCalculator(yearInput, monthInput, dayInput, countDays);
    let updatedDays = dateObject.leapYearAddDays(yearInput, countDays);
    let finalDay = dateObject.getWeekday(updatedDays);
    $("#result").text(finalDay);
    dateObject.resetDays(yearInput, monthInput, dayInput);
  });
});
