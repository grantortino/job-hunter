import jobstore from "../JobStore";

// 1 call groupedEntriesByDay without entries inside the jobstore. Meaning it should return an empty object.

test("should return an empty object", () => {
  jobstore.entries = [];
  expect(jobstore.entries).toEqual([]);
});

// 2 call groupedEntriesByDay with entries but filter on a year / month that doesn't have any entries. Meaning it should return an empty object.

test("filter on a year / month that doesn't have any entries should return an empty object", () => {
  jobstore.entries = [
    {
      entryTitle: "Killing in the name of...",
      entryContent: "misinterpretation of ratm",
      id: "gggg",
      time: new Date("1998-06-01T10:00:00Z"),
      checkbox: true,
    },
  ];
  const actual = jobstore.groupedEntriesByDay(5, 2014);
  expect(actual).toEqual({});
});

// 3 call groupedEntriesByDay with entries and a filter that returns one entry on one day.

test("groupedEntriesByDay with entries and a filter should return one entry on one day", () => {
  jobstore.entries = [
    {
      entryTitle: "Killing in the name of...",
      entryContent: "misinterpretation of rage against the machine",
      id: "gggg",
      time: new Date("2021-09-01T10:00:00Z"),
      checkbox: true,
    },
    {
      entryTitle: "Brooming the garden",
      entryContent: "misinterpretation of gardening",
      id: "ffff",
      time: new Date("2021-10-02T10:00:00Z"),
      checkbox: true,
    },
    {
      entryTitle: "Spreading cheese on my face",
      entryContent: "misinterpretation of eating cheese",
      id: "mmm",
      time: new Date("1998-06-03T10:00:00Z"),
      checkbox: true,
    },
  ];

  const oneDay = jobstore.groupedEntriesByDay(9, 2021);

  expect(oneDay).toEqual({
    "Wednesday 01 September": [
      {
        entryTitle: "Killing in the name of...",
        entryContent: "misinterpretation of rage against the machine",
        id: "gggg",
        time: new Date("2021-09-01T10:00:00Z"),
        checkbox: true,
      },
    ],
  });
});

// 4 call groupedEntriesByDay with entries and a filter that returns multiple entries on one day.

test("groupedEntriesByDay with entries and a filter that returns multiple entries on one day", () => {
  // add some entries to the job store
  jobstore.entries = [
    {
      entryTitle: "Playing guitar",
      entryContent: "Trying out a new song",
      id: "aaaa",
      time: new Date("2020-01-01T10:00:00Z"),
      checkbox: true,
    },
    {
      entryTitle: "Watching a movie",
      entryContent: "",
      id: "bbbb",
      time: new Date("2020-01-01T11:00:00Z"),
      checkbox: true,
    },
    {
      entryTitle: "",
      entryContent:
        "this is in the future and should not be returned in the filter method",
      id: "cccc",
      time: new Date("2021-01-01T11:00:00Z"),
      checkbox: true,
    },
  ];
  // get the grouped entries for january 2020
  const actual = jobstore.groupedEntriesByDay(1, 2020);

  // expect 2 entries on 1. january and nothing else
  expect(actual).toEqual({
    "Wednesday 01 January": [
      {
        entryTitle: "Playing guitar",
        entryContent: "Trying out a new song",
        id: "aaaa",
        time: new Date("2020-01-01T10:00:00Z"),
        checkbox: true,
      },
      {
        entryTitle: "Watching a movie",
        entryContent: "",
        id: "bbbb",
        time: new Date("2020-01-01T11:00:00Z"),
        checkbox: true,
      },
    ],
  });
});

// 5 call groupedEntriesByDay with entries and a filter that returns multiple entries on multiple days.

test("groupedEntriesByDay with entries and a filter should return multiple entries on multiple days", () => {
  jobstore.entries = [
    {
      entryTitle: "Playing guitar",
      entryContent: "Trying out a new song",
      id: "aaaa",
      time: new Date("2021-09-01T10:00:00Z"),
      checkbox: true,
    },
    {
      entryTitle: "Watching a movie",
      entryContent: "",
      id: "bbbb",
      time: new Date("2021-09-02T11:00:00Z"),
      checkbox: true,
    },
    {
      entryTitle: "",
      entryContent:
        "this is in the future and should not be returned in the filter method",
      id: "cccc",
      time: new Date("2021-09-03T11:00:00Z"),
      checkbox: true,
    },
  ];
  const entriesTest = jobstore.groupedEntriesByDay(9, 2021);
  expect(entriesTest).toEqual(
    {
      "Wednesday 01 September": [
        {
          entryTitle: "Killing in the name of...",
          entryContent: "misinterpretation of rage against the machine",
          id: "gggg",
          time: new Date("2021-09-01T10:00:00Z"),
          checkbox: true,
        },
      ],
    },
    {
      "Thursday 02 September": [
        {
          entryTitle: "Watching a movie",
          entryContent: "",
          id: "bbbb",
          time: new Date("2021-09-02T11:00:00Z"),
          checkbox: true,
        },
      ],
    },
    {
      "Friday 03 September": [
        {
          entryTitle: "",
          entryContent:
            "this is in the future and should not be returned in the filter method",
          id: "cccc",
          time: new Date("2021-09-03T11:00:00Z"),
          checkbox: true,
        },
      ],
    }
  );
});

const fakeJobs = [{ id: "666" }, { id: "999" }, { id: "1010" }];

test("Should not be undefined", () => {
  expect(jobstore.groupedEntriesByDay(3, 5)).not.toBe(undefined);
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
