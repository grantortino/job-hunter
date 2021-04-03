import uuid from 'react-uuid';

const jobstore = {
    jobs: [],
    entries: [{entryTitle: "bau", entryContent: "salumi"}],
    filteredJobs: [],
    addJob: function(companyName, jobTitle, jobLink, date, relevanceDegree, status) {
        // "this" refers to the scope 
        this.jobs.push({companyName, jobTitle, jobLink, date, relevanceDegree, status, id: uuid()});
    },
    addEntry: function(entryTitle, entryContent) {
        this.entries.push({entryTitle, entryContent, id:uuid()});
    },

    save: function() {
        localStorage.setItem('savedJob', JSON.stringify(this.jobs));
        localStorage.setItem('savedEntry', JSON.stringify(this.entries));
    },

    load: function() {
        // gets the element from storage saved under "savedCompanyName"
        const savedJob = localStorage.getItem('savedJob');
        const savedEntry = localStorage.getItem('savedEntry');

        // this.jobs = savedJob || [];

        if (savedJob === null) {
            this.jobs = [];
        } else {
            this.jobs = JSON.parse(savedJob);
        }

        if (savedEntry === null) {
            this.entries = [];
        } else {
            this.entries = JSON.parse(savedEntry);
        }

    },

    remove: function(jobId) {
        // I MADE IT!
        this.jobs = this.jobs.filter((job) => job.id !== jobId);
        localStorage.setItem('savedJob', JSON.stringify(this.jobs));
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
    }

};

jobstore.load();

export default jobstore;