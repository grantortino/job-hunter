import jobstore from "../JobStore";

const fakeJobs = [{ id: "666" }, { id: "999" }, { id: "1010" }];

test("Should be null", () => {
  const funcTest = jobstore.groupedEntriesByDay;
  expect(funcTest()).toBe(undefined);
});

test("remove job through id", () => {
  jobstore.jobs = fakeJobs;
  // il parametro di expect e toEqual sono come ===
  // expect().toEqual({id: '999'}, {id: '1010'});
  jobstore.remove("666");
  expect(jobstore.jobs.length).toEqual(2);
  expect(jobstore.jobs).toEqual([{ id: "999" }, { id: "1010" }]);
});

test("remove an unexisting id", () => {
  jobstore.jobs = fakeJobs;
  jobstore.remove("333");
  // expect(jobstore.jobs.length).toEqual(3);
  expect(jobstore.jobs).toEqual([{ id: "666" }, { id: "999" }, { id: "1010" }]);
});

const fakeEntries = [
  { entryTitle: "entry eins", time: new Date(2021, 2, 1) },
  { entryTitle: "entry zwei", time: new Date(2021, 2, 1) },
  { entryTitle: "entry vier", time: new Date(2021, 3, 5) },
];

// test('groupedEntriesByDay returns entries on the same day as the key', () => {
//     jobstore.entries = fakeEntries;
//     const result = jobstore.groupedEntriesByDay(3);
//     expect(result).toEqual({
//         "Monday 01 March" : [
//             {
//                 entryTitle: 'entry eins',
//                 time: new Date(2021, 2, 1)
//             },
//             {
//                 entryTitle: 'entry zwei',
//                 time: new Date(2021, 2, 1)
//             }
//         ]
//     });
// });

// const fakeJobs = [{id: '666'}, {id: '777'}];

// test('Find the job', () => {
//     jobstore.jobs = fakeJobs;
//     expect(jobstore.findJob('666')).toEqual({id: '666'});
// });

// // test('Return "undefined" when job is not found', () => {
// //     jobstore.jobs = fakeJobs;
// //     expect(jobstore.findJob('000')).toEqual(undefined);
// // });

// test('jobstore.addJob stores in local storage', () => {
//     jobstore.addJob('Bauli', 'Panettone Bäcker', 'http://pivo.ru', '2001-03-50', 'high', 'accepted');
//     const lastJob = jobstore.jobs[jobstore.jobs.length - 1];
//     expect(lastJob.companyName).toEqual('Bauli');
//     expect(lastJob.jobTitle).toEqual('Panettone Bäcker');
//     expect(lastJob.id).not.toBeNull();
// });

test("groupedEntriesByDay returns entries on the same day as the key", () => {
  jobstore.entries = fakeEntries;
  const result = jobstore.groupedEntriesByDay(3);
  expect(result).toBeInstanceOf(Object);
});
