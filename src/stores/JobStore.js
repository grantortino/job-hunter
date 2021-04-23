import uuid from 'react-uuid';

const jobstore = {

    jobs: [],

    entries: [],

    filteredJobs: [],

    addJob: function(companyName, jobTitle, jobLink, date, relevanceDegree, status) {
        // "this" refers to the scope
        this.jobs.push({companyName, jobTitle, jobLink, date, relevanceDegree, status, id: uuid()});
    },

    addEntry: function(entryTitle, entryContent, checkbox) {
        this.entries.push({ entryTitle, entryContent, id:uuid(), time: new Date(), checkbox });
    },

    save: function() {
        localStorage.setItem('savedJob', JSON.stringify(this.jobs));
        localStorage.setItem('savedEntries', JSON.stringify(this.entries));
    },

    load: function() {
        // gets the element from storage saved under "savedCompanyName"
        const savedJob = localStorage.getItem('savedJob');
        const savedEntries = localStorage.getItem('savedEntries');
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
            this.entries.forEach(entry => entry.time = new Date(entry.time));
        }

    },

    remove: function(jobId) {
        // I MADE IT!
        this.jobs = this.jobs.filter((job) => job.id !== jobId);
        localStorage.setItem('savedJob', JSON.stringify(this.jobs));
    },

    removeEntry: function (entryId) {
        this.entries = this.entries.filter((entry) => entry.id !== entryId);
        localStorage.setItem('savedEntries', JSON.stringify(this.entries));
    },

    search: function(searchValue) {

        if (searchValue === "") {
            return this.jobs;
        } else {
            return this.filteredJobs = this.jobs.filter((job) => job.companyName.toLowerCase().includes(searchValue.toLowerCase()));
        }

    },

    findJob: function(id) {
        return (this.jobs.filter((job) => job.id === id))[0];
        // const jobElement = this.jobs.filter((job) => job.id === id);
        // return jobElement[0];
    },

    findEntriesByMonth: function(month) {

        const groupedEntries = {};

        const displayNameOfDay = (d) => {

            const weekday = new Array(7);
            const monthName = new Array(12);

            weekday[0] = "Sunday";
            weekday[1] = "Monday";
            weekday[2] = "Tuesday";
            weekday[3] = "Wednesday";
            weekday[4] = "Thursday";
            weekday[5] = "Friday";
            weekday[6] = "Saturday";

            monthName[0] = "January";
            monthName[1] = "February";
            monthName[2] = "March";
            monthName[3] = "April";
            monthName[4] = "May";
            monthName[5] = "June";
            monthName[6] = "July";
            monthName[7] = "August";
            monthName[8] = "September"
            monthName[9] = "October";
            monthName[10] = "November";
            monthName[11] = "December";
      
            return `${weekday[d.getDay()]} ${String(d.getDate()).padStart(2, '0')} ${monthName[d.getMonth()]}`;

        };

        this.entries.forEach((entry) => {
            const keyForEntry = displayNameOfDay(entry.time);
            // if (groupedEntries[keyForEntry] === undefined) {
            //     groupedEntries[keyForEntry] = [];
            //     groupedEntries[keyForEntry].push(entry);
            // } else {
            //     groupedEntries[keyForEntry].push(entry);
            // }
            if (groupedEntries[keyForEntry] === undefined) {
                groupedEntries[keyForEntry] = [];
            }

            groupedEntries[keyForEntry].push(entry);
        });

        return groupedEntries;

    },

};

jobstore.load();

export default jobstore;