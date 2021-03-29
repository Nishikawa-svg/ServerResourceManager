export const sampleUserList = [
  { userId: 1, userName: "one", grade: "M1", password: "password" },
  { userId: 2, userName: "two", grade: "M1", password: "password" },
  { userId: 3, userName: "three", grade: "M1", password: "password" },
  { userId: 4, userName: "four", grade: "M1", password: "password" },
];

export const sampleServerList = [
  {
    serverId: 1,
    serverAddress: "xxx.xxx.xxx.1",
    maxCores: 8,
    registrationDate: Date.now(),
    coresUsed: 0,
    coreUser: [1, 3, null, null, null, null, null, null],
    startDate: [Date.now(), Date.now(), null, null, null, null, null, null],
    endDate: [Date.now(), Date.now(), null, null, null, null, null, null],
  },
  {
    serverId: 2,
    serverAddress: "xxx.xxx.xxx.2",
    maxCores: 8,
    registrationDate: Date.now(),
    coresUsed: 0,
    coreUser: [null, null, null, null, null, null, null, null],
    startDate: [null, null, null, null, null, null, null, null],
    endtDate: [null, null, null, null, null, null, null, null],
  },
  {
    serverId: 3,
    serverAddress: "xxx.xxx.xxx.3",
    maxCores: 4,
    registrationDate: Date.now(),
    coresUsed: 0,
    coreUser: [null, null, null, null],
    startDate: [null, null, null, null],
    endDate: [null, null, null, null],
  },
];
