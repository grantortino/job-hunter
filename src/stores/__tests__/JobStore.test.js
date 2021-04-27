import jobstore from '../JobStore';

const fakeJobs = [{id: '666'}, {id: '777'}];

// test('Find the job', () => {
//     jobstore.jobs = fakeJobs;
//     expect(jobstore.findJob('666')).toEqual({id: '666'});
// });

// test('Return "undefined" when job is not found', () => {
//     jobstore.jobs = fakeJobs;
//     expect(jobstore.findJob('000')).toEqual(undefined);
// });

test('jobstore.addJob stores in local storage', () => {
    jobstore.addJob('Bauli', 'Panettone Bäcker', 'http://pivo.ru', '2001-03-50', 'high', 'accepted');
    const lastJob = jobstore.jobs[jobstore.jobs.length - 1];
    expect(lastJob.companyName).toEqual('Bauli');
    expect(lastJob.jobTitle).toEqual('Panettone Bäcker');
    expect(lastJob.id).not.toBeNull();
});



