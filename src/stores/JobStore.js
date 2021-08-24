import uuid from "react-uuid";
import DateFormat from "../utils/DateFormat";

const jobstore = {
  jobs: [],

  entries: [],

  filteredJobs: [],

  addJob: function (
    companyName,
    jobTitle,
    jobLink,
    date,
    relevanceDegree,
    status
  ) {
    // "this" refers to the scope
    this.jobs.push({
      companyName,
      jobTitle,
      jobLink,
      date,
      relevanceDegree,
      status,
      id: uuid(),
    });
  },

  addEntry: function (entryTitle, entryContent, checkbox) {
    this.entries.push({
      entryTitle,
      entryContent,
      id: uuid(),
      time: new Date(),
      checkbox,
    });
  },

  save: function () {
    localStorage.setItem("savedJob", JSON.stringify(this.jobs));
    localStorage.setItem("savedEntries", JSON.stringify(this.entries));
  },

  load: function () {
    // gets the element from storage saved under "savedCompanyName"
    const savedJob = localStorage.getItem("savedJob");
    const savedEntries = localStorage.getItem("savedEntries");
    // this.jobs = savedJob || [];

    if (savedJob === null) {
      this.jobs = [];
    } else {
      this.jobs = JSON.parse(savedJob);
    }

    if (savedEntries === null) {
      this.entries = [];
    } else {
      this.entries = JSON.parse(savedEntries);
      // this.entries.map((entry) => entry.time = new Date(entry.time));
      this.entries.forEach((entry) => (entry.time = new Date(entry.time)));
    }
  },

  remove: function (jobId) {
    // I MADE IT!
    this.jobs = this.jobs.filter((job) => job.id !== jobId);
    localStorage.setItem("savedJob", JSON.stringify(this.jobs));
  },

  removeEntry: function (entryId) {
    this.entries = this.entries.filter((entry) => entry.id !== entryId);
    localStorage.setItem("savedEntries", JSON.stringify(this.entries));
  },

  searchJob: function (searchValue) {
    if (searchValue === "") {
      return this.jobs;
    } else {
      return (this.filteredJobs = this.jobs.filter((job) =>
        job.companyName.toLowerCase().includes(searchValue.toLowerCase())
      ));
    }
  },

  findJob: function (id) {
    return this.jobs.filter((job) => job.id === id)[0];
    // const jobElement = this.jobs.filter((job) => job.id === id);
    // return jobElement[0];
  },

  groupedEntriesByDay: function (month, year) {
    // const groupedEntries = {};

    const entriesForThisMonthAndYear = this.entries
      .filter((entry) => entry.time.getMonth() + 1 == month)
      .filter((entry) => entry.time.getFullYear() === year);

    console.log("filtered entries", entriesForThisMonthAndYear);
    return entriesForThisMonthAndYear.reduce((group, entry) => {
      const keyForEntry = DateFormat.displayNameOfDay(entry.time);

      if (group[keyForEntry] === undefined) {
        group[keyForEntry] = [];
      }
      group[keyForEntry].push(entry);
      return group;
    }, {});
  },
};

jobstore.load();

//  filter verwenden um alle zahlen, die >= 4 sind, und danach reduce verwenden, um eine summe von allen diesen zahlen zu haben (19).

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// impostare sempre un valore predefinito per evitare errori postumi
// console.log(
//   "UND DIE SUMME IST...",
//   numbers.filter((num) => num >= 4).reduce((sum, num) => sum + num, 0)
// );

export default jobstore;
