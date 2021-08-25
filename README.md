# Job Hunter

A simple web-app that helps keeping track of all interesting job offers.

# TO DO (backend and whatnot)

- [ ] create API "yellow word":

  - intalled @types/express", "ts-node", "typescript"

- [ ] set "saveadd" functionality in the API
- - [ ] create tests for the functionality

- [ ] integrate API into frontend;

AUFGABE #1 10.8.2021

[x] arr[1, 2, 4, 5, 7, 8] creare un oggetto tramite reduce uguale a questo:

const result = {
odd: [1, 5, 7],
even: [2, 4, 8]
}

[x] guardare documentazione su typescript => https://www.typescriptlang.org/docs/handbook/intro.html

AUFGABE #2 18.8.2021

[ ] 1. Add 2 API endpoints in express for getting and setting the state that is currently managed by the JobStore. (hint: you will have to use app.get() and app.post())
[ ] 2. Add a test for the filterEntriesByDay function https://github.com/grantortino/job-hunter/blob/f99ded7410943fd7746b9b40b226bfd0b15a81a7/src/stores/JobStore.js#L94
    https://www.youtube.com/watch?v=FgnxcUQ5vho
    https://www.youtube.com/watch?v=7r4xVDI2vho
[x] 3. Use a switch statement in this function https://github.com/grantortino/job-hunter/blob/f99ded7410943fd7746b9b40b226bfd0b15a81a7/src/components/Job.js#L21-L36

You could test for the following things:

1 call groupedEntriesByDay without entries inside the jobstore. Meaning it
  should return an empty object.
2 call groupedEntriesByDay with entries but filter on a year / month that
  doesn't have any entries. Meaning it should return an empty object.
3 call groupedEntriesByDay with entries and a filter that returns one entry on one day.
4 call groupedEntriesByDay with entries and a filter that returns multiple entries on one day.
5 call groupedEntriesByDay with entries and a filter that returns multiple entries on multiple days.
