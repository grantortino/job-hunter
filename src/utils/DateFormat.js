const DateFormat = {
    weekdays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],

    monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],

    displayNameOfDay: function (d){
        return `${this.weekdays[d.getDay()]} ${String(d.getDate()).padStart(2, '0')} ${this.monthNames[d.getMonth()]}`;
    }
};
export default DateFormat;