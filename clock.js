
function GetSeconds() {
    let Seconds;
    const TimeToDisplay = new Date();
    Seconds = TimeToDisplay.getSeconds();
    Seconds = AddLeadingZero(Seconds);
    document.getElementById("Second").innerHTML = Seconds;
}


function GetMinutes() {
    let Minutes;
    const TimeToDisplay = new Date();
    Minutes = TimeToDisplay.getMinutes();
    Minutes = AddLeadingZero(Minutes);
    document.getElementById("Minute").innerHTML = Minutes;
}

function GetHours() {
    let Hours;
    const TimeToDisplay = new Date();
    Hours = TimeToDisplay.getHours();
    if (Hours > 12) Hours = Hours - 12;
    Hours = AddLeadingZero(Hours);
    document.getElementById("Hour").innerHTML = Hours;
}

function GetDay() {
    let Day;
    const TimeToDisplay = new Date();
    Day = TimeToDisplay.getDay();
    switch(Day) {
        case 0:
            document.getElementById("Day").innerHTML = "Monday"
            break;
        case 1:
            document.getElementById("Day").innerHTML = "Tuesday"
            break;
        case 2:
            document.getElementById("Day").innerHTML = "Wednesday"
            break;
        case 3:
            document.getElementById("Day").innerHTML = "Thursday"
            break;
        case 4:
            document.getElementById("Day").innerHTML = "Friday"
            break;
        case 5:
            document.getElementById("Day").innerHTML = "Saturday"
            break;
        case 6:
            document.getElementById("Day").innerHTML = "Sunday"
            break;
    }
}

function GetCalendarDate() {
    let CalendarDate;
    const TimeToDisplay = new Date();
    CalendarDate = TimeToDisplay.getDate();
    document.getElementById("Date").innerHTML = CalendarDate;
}

function GetMonth () {
    let Month;
    const options = { month: 'long'};
    const TimeToDisplay = new Date();
    Month = new Intl.DateTimeFormat('en-US', options).format(TimeToDisplay);
    document.getElementById("Month").innerHTML = Month;
}

function GetYear () {
    let Year;
    const TimeToDisplay = new Date();
    Year = TimeToDisplay.getFullYear();
    document.getElementById("Year").innerHTML = Year;
}

function GetAM_PM () {
    const TimeToDisplay = new Date();
    if (TimeToDisplay.getHours() < 12) {
        document.getElementById("AM_PM").innerHTML =  'AM';
    } else {
        document.getElementById("AM_PM").innerHTML = 'PM';
    }
}

function AddLeadingZero(number) {
    number = number.toString();
    if (number.length === 1) {
       return '0' + number; 
    } else {
        return number;
    }
}

