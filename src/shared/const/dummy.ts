interface Schedule {
  startTime: string;
  endTime: string;
  dist: number;
}

interface Student {
  name: string;
  class: string;
  schedule: Schedule[];
}

export const 학생데이터예시: Student[] = [
  {
    name: '아무개1',
    class: '초3특반',
    schedule: [{ startTime: '10:00', endTime: '11:30', dist: 15 }],
  },
  {
    name: '아무개2',
    class: '중1일반반',
    schedule: [{ startTime: '12:00', endTime: '13:30', dist: 30 }],
  },
  {
    name: '아무개3',
    class: '고2특반',
    schedule: [{ startTime: '14:20', endTime: '15:40', dist: 50 }],
  },
  {
    name: '아무개4',
    class: '초6일반반',
    schedule: [{ startTime: '09:00', endTime: '10:30', dist: 40 }],
  },
  {
    name: '아무개5',
    class: '중3특반',
    schedule: [{ startTime: '11:30', endTime: '13:00', dist: 20 }],
  },
  {
    name: '아무개6',
    class: '고1일반반',
    schedule: [{ startTime: '15:00', endTime: '16:30', dist: 35 }],
  },
  {
    name: '아무개7',
    class: '초5특반',
    schedule: [{ startTime: '13:00', endTime: '14:30', dist: 10 }],
  },
  {
    name: '아무개8',
    class: '중2일반반',
    schedule: [{ startTime: '16:00', endTime: '17:30', dist: 25 }],
  },
  {
    name: '아무개9',
    class: '고3특반',
    schedule: [{ startTime: '17:30', endTime: '19:00', dist: 45 }],
  },
  {
    name: '아무개10',
    class: '초4일반반',
    schedule: [{ startTime: '08:00', endTime: '09:30', dist: 50 }],
  },
];
