// class Event {
//   constructor() {
//     console.log("Calling the constructor function!");
//   }
// }

// const lunch = new Event(); //each time new Event is created the constructor is called
// console.log(lunch);
/*
class Event {
    constructor(name, startTime, endTime, location) {
      this.name = name;
      this.startTime = startTime;
      this.endTime = endTime;
      this.location = location;
    }
  }

  const lunch = new Event("Lunch", "12:00", "13:00", "Chipotle");
console.log(lunch);
console.log(lunch.startTime); //can acess just like objects

const dinner = new Event("Dinner", "18:00", "19:30");
console.log(dinner.location)
*/
/*
class Event {
    constructor(name, attendees, startTime, locationName, address) {
      let guests = null; //if 0 attendees
      if (attendees.length === 1) { //if only 1 attending
        guests = attendees[0];
      } else if (attendees.length > 1) { //if more than one
        guests = `${attendees.length} attendees`;
      }
  
      this.name = guests ? `${name} with ${guests}` : name; //if guests is not none name with guests if not just name
      this.details = { startTime, attendees, groupSize: attendees.length };
      this.location = { name: locationName, address };
    }
  }
  
  const dinner = new Event("Dinner", ["Sal", 'pal'], 1830, "Frankie's", "477 Rain St.");
  console.log(dinner)
  */
 /*
  class Event {
    constructor(name, startTime, endTime, location) {
      this.name = name;
      this.startTime = startTime;
      this.endTime = endTime;
      this.location = location;
    }
    toString() {
        const { name, startTime, endTime, location } = this; //destructered
        return `${startTime} - ${endTime}: ${name} at ${location}`;
    }
  }

  const lunchEvent = new Event("Lunch", "12:00", "13:00", "Chipotle");
//calling lunch event and the toString function
  console.log(lunchEvent.toString()); // > 12:00 - 13:00: Lunch at Chipotle
  */
  // class Student {
  //   constructor (firstName, lastName, birthYear, birthMonth, birthDay, gender){
  //     this.firstName=firstName;
  //     this.lastName=lastName;
  //     this.birthYear=birthYear;
  //     this.birthMonth=birthMonth;
  //     this.birthDay=birthDay;
  //     this.gender=gender;
  //   }
  // }

  // console.log(new Student("Mary", "Lee", 2000, 1, 1, "female"))
  class Event {
    constructor(name, startTime, endTime, location) {
      this.name = name;
      this.startTime = startTime;
      this.endTime = endTime;
      this.location = location;
    }
    toString() {
      const { name, startTime, endTime, location } = this;
      return `${startTime} - ${endTime}: ${name} at ${location}`;
    }
    getStartHours() {
      return Number(this.startTime.split(":")[0]);
    }
    getStartMinutes() {
      return Number(this.startTime.split(":")[1]);
    }
    getEndHours() {
      return Number(this.endTime.split(":")[0]);
    }
    getEndMinutes() {
      return Number(this.endTime.split(":")[1]);
    }
    isBefore(other) {
      return (
        this.getEndHours() < other.getStartHours() ||
        (this.getEndHours() === other.getStartHours() &&
          this.getEndMinutes() <= other.getStartMinutes())
      );
    }
    durationMinutes() {

        return Math.abs((this.getEndHours() + (this.getEndMinutes()/60)) - ((this.getStartHours()) + (this.getStartMinutes()/60)))*60
       
    }
    startHoursAndMins() {

      return (this.getStartHours() + this.getStartMinutes()/60)
    }
    endHoursAndMins() {

      return (this.getEndHours() + this.getEndMinutes()/60)
    }
    conflict(other) {
      //if dinner(other) start time is same or after lunch start, if after lunch start then make sure dinner start is before lunch(this) end time. if dinner start after lunch end no use. 
      //if dinner end time is same or after start lunch, if that is the case make sure dinner start time is before lunch(this) end time, if dinner start is after lunch end then there is no conflict
      return (
        other.startHoursAndMins() >= this.startHoursAndMins() && other.startHoursAndMins() <= this.endHoursAndMins() || other.endHoursAndMins() >= this.startHoursAndMins() && other.startHoursAndMins() <= this.endHoursAndMins()
      )
    }
  }

  const lunchEvent = new Event("Lunch", "12:10", "14:50", "Chipotle");
console.log(lunchEvent.toString()); // > 12:00 - 13:00: Lunch at Chipotle
const dinner = new Event('dinner', '14:51', '24:00', 'Panera')
console.log(lunchEvent.conflict(dinner))
// console.log(lunchEvent.getStartHours())
// console.log(lunchEvent.getStartMinutes())
// console.log(lunchEvent.getEndHours())
console.log(dinner.endHoursAndMins())

