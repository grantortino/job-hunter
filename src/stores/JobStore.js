import uuid from 'react-uuid';

const jobstore = {
    jobs: [],
    filteredJobs: [],
    addJob: function(companyName, jobTitle, jobLink, date, relevanceDegree, status) {
        // "this" refers to the scope 
        this.jobs.push({companyName, jobTitle, jobLink, date, relevanceDegree, status, id: uuid()});
    },

    save: function() {
        localStorage.setItem('savedJob', JSON.stringify(this.jobs));
    },

    load: function() {
        // gets the element from storage saved under "savedCompanyName"
        const savedJob = localStorage.getItem('savedJob');

        // this.jobs = savedJob || [];

        if (savedJob === null) {
            this.jobs = [];
        } else {
            this.jobs = JSON.parse(savedJob);
        }

    },

    remove: function(jobId) {
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

};

jobstore.load();

export default jobstore;