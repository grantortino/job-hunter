const jobstore = {
    jobs: [],
    addJob: function(companyName, jobTitle, jobLink, date, relevanceDegree, status) {
        // "this" refers to the scope 
        this.jobs.push({companyName, jobTitle, jobLink, date, relevanceDegree, status});
    },

    save: function() {
        localStorage.setItem('savedJob', JSON.stringify(this.jobs));
    },

    load: function() {
        // gets the element from storage saved under "savedCompanyName"
        const savedJob = localStorage.getItem('savedJob');
        this.jobs = JSON.parse(savedJob);
        console.log('jobs array', this.jobs);
    }
}; 

jobstore.load();

export default jobstore;