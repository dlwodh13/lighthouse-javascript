const talkingCalendar = function(date) {
  // Your code here
  /*string slice method -> FirstIndex :  the index of the first char to be included in the returned substring
  SecondIndex : the index of the first char to be excluded and returned to substring.
  */
  let year = date.slice(0,4);
  let month = date.slice(5,7);
  let day = date.slice(8.10);
  let dateSuff;

  //checking the condtion for the month
  switch(month){
    case "01" : month = 'January';
    break;
    case "02" : month = 'February';
    break;
    case "03" : month = 'March';
    break;
    case "04" : month = 'April';
    break;
    case "05" : month = 'May';
    break;
    case "06" : month = 'June';
    break;
    case "07" : month = 'July';
    break;
    case "08" : month = 'August';
    break;
    case "09" : month = 'September';
    break;
    case "10" : month = 'October';
    break;
    case "11" : month = 'November'; 
    break;
    case "12" : month = 'December';
    break;
  }
  //checking condition for the day 'st' , 'nd' , 'rd'
  switch(day){
    case "01" : dateSuff = 'st';
    break;
    case "02" : dateSuff = 'nd';
    break;
    case "03" : dateSuff = 'rd';
    break;
    case "21" : dateSuff = 'st';
    break;
    case "22" : dateSuff = 'nd';
    break;
    case "23" : dateSuff = 'rd';
    break;
    case "31" : dateSuff = 'st';
    break;
    default : dateSuff = 'th';
  }
  return `${month} ${Number(day)}${dateSuff}, ${year}`;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));