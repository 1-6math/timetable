export interface Schedule {
  day: string[];
  startTime: string;
  duration: number;
  dist: number;
}

export interface Student {
  name: string;
  schedule: Schedule[];
}

interface ClassInfo {
  [className: string]: Student[];
}

export const 초등수업: ClassInfo = {
  '초5 A': [
    {
      name: '아무개1',
      schedule: [
        {
          day: ['월', '수', '금'],
          startTime: '13:00',
          duration: 90,
          dist: 10,
        },
      ],
    },
    {
      name: '아무개2',
      schedule: [
        { day: ['화', '목'], startTime: '08:00', duration: 90, dist: 20 },
      ],
    },
    {
      name: '아무개3',
      schedule: [
        {
          day: ['월', '수', '금'],
          startTime: '16:00',
          duration: 90,
          dist: 25,
        },
      ],
    },
    {
      name: '아무개4',
      schedule: [
        { day: ['화', '목'], startTime: '12:00', duration: 90, dist: 30 },
      ],
    },
  ],
  '초6 A': [
    {
      name: '아무개5',
      schedule: [
        {
          day: ['월', '수', '금'],
          startTime: '09:00',
          duration: 90,
          dist: 15,
        },
      ],
    },
    {
      name: '아무개6',
      schedule: [
        { day: ['화', '목'], startTime: '11:00', duration: 90, dist: 20 },
      ],
    },
    {
      name: '아무개7',
      schedule: [
        {
          day: ['월', '수', '금'],
          startTime: '14:00',
          duration: 90,
          dist: 35,
        },
      ],
    },
    {
      name: '아무개8',
      schedule: [
        { day: ['화', '목'], startTime: '17:00', duration: 90, dist: 40 },
      ],
    },
  ],
  '초6 B': [
    {
      name: '아무개9',
      schedule: [
        {
          day: ['월', '수', '금'],
          startTime: '10:00',
          duration: 90,
          dist: 25,
        },
      ],
    },
    {
      name: '아무개10',
      schedule: [
        { day: ['화', '목'], startTime: '13:00', duration: 90, dist: 30 },
      ],
    },
    {
      name: '아무개11',
      schedule: [
        {
          day: ['월', '수', '금'],
          startTime: '15:00',
          duration: 90,
          dist: 35,
        },
      ],
    },
    {
      name: '아무개12',
      schedule: [
        { day: ['화', '목'], startTime: '17:30', duration: 90, dist: 40 },
      ],
    },
  ],
};

export const 중등수업: ClassInfo = {
  '중1 A': [
    {
      name: '아무개13',
      schedule: [
        {
          day: ['월', '수', '금'],
          startTime: '12:00',
          duration: 90,
          dist: 20,
        },
      ],
    },
    {
      name: '아무개14',
      schedule: [
        { day: ['화', '목'], startTime: '14:00', duration: 90, dist: 25 },
      ],
    },
    {
      name: '아무개15',
      schedule: [
        {
          day: ['월', '수', '금'],
          startTime: '16:00',
          duration: 90,
          dist: 30,
        },
      ],
    },
    {
      name: '아무개16',
      schedule: [
        { day: ['화', '목'], startTime: '18:00', duration: 90, dist: 35 },
      ],
    },
  ],
  '중1 B': [
    {
      name: '아무개34',
      schedule: [
        {
          day: ['월', '수', '금'],
          startTime: '08:00',
          duration: 75,
          dist: 15,
        },
      ],
    },
    {
      name: '아무개35',
      schedule: [
        { day: ['화', '목'], startTime: '10:00', duration: 60, dist: 20 },
      ],
    },
    {
      name: '아무개36',
      schedule: [
        { day: ['월', '수', '금'], startTime: '13:00', duration: 90, dist: 25 },
      ],
    },
    {
      name: '아무개37',
      schedule: [
        { day: ['화', '목'], startTime: '15:00', duration: 75, dist: 30 },
      ],
    },
  ],
  '중1 C': [
    {
      name: '아무개38',
      schedule: [
        {
          day: ['월', '수', '금'],
          startTime: '11:00',
          duration: 75,
          dist: 15,
        },
      ],
    },
    {
      name: '아무개39',
      schedule: [
        { day: ['화', '목'], startTime: '12:00', duration: 60, dist: 20 },
      ],
    },
    {
      name: '아무개40',
      schedule: [
        { day: ['월', '수', '금'], startTime: '16:00', duration: 90, dist: 25 },
      ],
    },
    {
      name: '아무개41',
      schedule: [
        { day: ['화', '목'], startTime: '18:00', duration: 75, dist: 30 },
      ],
    },
  ],
  '중1 D': [
    {
      name: '아무개42',
      schedule: [
        {
          day: ['월', '수', '금'],
          startTime: '09:00',
          duration: 75,
          dist: 10,
        },
      ],
    },
    {
      name: '아무개43',
      schedule: [
        { day: ['화', '목'], startTime: '11:00', duration: 60, dist: 20 },
      ],
    },
    {
      name: '아무개44',
      schedule: [
        { day: ['월', '수', '금'], startTime: '14:00', duration: 90, dist: 35 },
      ],
    },
    {
      name: '아무개45',
      schedule: [
        { day: ['화', '목'], startTime: '16:00', duration: 75, dist: 40 },
      ],
    },
  ],
  '중2 A': [
    {
      name: '아무개17',
      schedule: [
        {
          day: ['월', '수', '금'],
          startTime: '13:00',
          duration: 90,
          dist: 10,
        },
      ],
    },
    {
      name: '아무개18',
      schedule: [
        { day: ['화', '목'], startTime: '15:00', duration: 75, dist: 20 },
      ],
    },
    {
      name: '아무개19',
      schedule: [
        {
          day: ['월', '수', '금'],
          startTime: '17:00',
          duration: 75,
          dist: 30,
        },
      ],
    },
    {
      name: '아무개20',
      schedule: [
        { day: ['화', '목'], startTime: '19:00', duration: 75, dist: 40 },
      ],
    },
  ],
  '중2 B': [
    {
      name: '아무개46',
      schedule: [
        {
          day: ['월', '수', '금'],
          startTime: '09:00',
          duration: 60,
          dist: 25,
        },
      ],
    },
    {
      name: '아무개47',
      schedule: [
        { day: ['화', '목'], startTime: '10:00', duration: 75, dist: 35 },
      ],
    },
    {
      name: '아무개48',
      schedule: [
        { day: ['월', '수', '금'], startTime: '13:00', duration: 90, dist: 40 },
      ],
    },
    {
      name: '아무개49',
      schedule: [
        { day: ['화', '목'], startTime: '17:00', duration: 60, dist: 30 },
      ],
    },
  ],
  '중2 C': [
    {
      name: '아무개50',
      schedule: [
        {
          day: ['월', '수', '금'],
          startTime: '11:00',
          duration: 75,
          dist: 20,
        },
      ],
    },
    {
      name: '아무개51',
      schedule: [
        { day: ['화', '목'], startTime: '14:00', duration: 60, dist: 25 },
      ],
    },
    {
      name: '아무개52',
      schedule: [
        { day: ['월', '수', '금'], startTime: '16:00', duration: 90, dist: 35 },
      ],
    },
    {
      name: '아무개53',
      schedule: [
        { day: ['화', '목'], startTime: '18:00', duration: 75, dist: 40 },
      ],
    },
  ],
  '중2 D': [
    {
      name: '아무개54',
      schedule: [
        {
          day: ['월', '수', '금'],
          startTime: '13:00',
          duration: 75,
          dist: 10,
        },
      ],
    },
    {
      name: '아무개55',
      schedule: [
        { day: ['화', '목'], startTime: '15:00', duration: 60, dist: 15 },
      ],
    },
    {
      name: '아무개56',
      schedule: [
        { day: ['월', '수', '금'], startTime: '17:00', duration: 90, dist: 30 },
      ],
    },
    {
      name: '아무개57',
      schedule: [
        { day: ['화', '목'], startTime: '19:00', duration: 75, dist: 35 },
      ],
    },
  ],
  '중3 A': [
    {
      name: '아무개21',
      schedule: [
        {
          day: ['월', '수', '금'],
          startTime: '09:00',
          duration: 90,
          dist: 25,
        },
      ],
    },
    {
      name: '아무개22',
      schedule: [
        { day: ['화', '목'], startTime: '11:00', duration: 90, dist: 30 },
        { day: ['월', '수', '금'], startTime: '11:00', duration: 90, dist: 30 },
      ],
    },
    {
      name: '아무개23',
      schedule: [
        {
          day: ['월', '수', '금'],
          startTime: '13:00',
          duration: 90,
          dist: 35,
        },
      ],
    },
    {
      name: '아무개24',
      schedule: [
        { day: ['화', '목'], startTime: '15:00', duration: 75, dist: 40 },
      ],
    },
  ],
  '중3 B': [
    {
      name: '아무개58',
      schedule: [
        {
          day: ['월', '수', '금'],
          startTime: '08:00',
          duration: 60,
          dist: 15,
        },
      ],
    },
    {
      name: '아무개59',
      schedule: [
        { day: ['화', '목'], startTime: '11:00', duration: 75, dist: 20 },
      ],
    },
    {
      name: '아무개60',
      schedule: [
        { day: ['월', '수', '금'], startTime: '14:00', duration: 90, dist: 30 },
      ],
    },
    {
      name: '아무개61',
      schedule: [
        { day: ['화', '목'], startTime: '16:00', duration: 75, dist: 35 },
      ],
    },
  ],
};

export const 고등수업: ClassInfo = {
  '고1 A': [
    {
      name: '아무개34',
      schedule: [
        { day: ['월', '수', '금'], startTime: '14:00', duration: 75, dist: 20 },
      ],
    },
    {
      name: '아무개35',
      schedule: [
        { day: ['화', '목'], startTime: '16:00', duration: 90, dist: 30 },
      ],
    },
  ],
  '고1 B': [
    {
      name: '아무개62',
      schedule: [
        {
          day: ['월', '수', '금'],
          startTime: '08:00',
          duration: 60,
          dist: 25,
        },
      ],
    },
    {
      name: '아무개63',
      schedule: [
        { day: ['화', '목'], startTime: '11:00', duration: 75, dist: 35 },
      ],
    },
    {
      name: '아무개64',
      schedule: [
        { day: ['월', '수', '금'], startTime: '14:00', duration: 90, dist: 40 },
      ],
    },
    {
      name: '아무개65',
      schedule: [
        { day: ['화', '목'], startTime: '16:00', duration: 75, dist: 30 },
      ],
    },
  ],
  '고1 C': [
    {
      name: '아무개36',
      schedule: [
        { day: ['월', '수', '금'], startTime: '18:00', duration: 75, dist: 35 },
      ],
    },
    {
      name: '아무개37',
      schedule: [
        { day: ['화', '목'], startTime: '19:30', duration: 60, dist: 40 },
      ],
    },
  ],

  '고2수2 A': [
    {
      name: '아무개25',
      schedule: [
        {
          day: ['월', '수', '금'],
          startTime: '14:20',
          duration: 75,
          dist: 50,
        },
      ],
    },
    {
      name: '아무개26',
      schedule: [
        { day: ['화', '목'], startTime: '16:00', duration: 75, dist: 60 },
      ],
    },
    {
      name: '아무개27',
      schedule: [
        {
          day: ['월', '수', '금'],
          startTime: '18:00',
          duration: 75,
          dist: 70,
        },
      ],
    },
    {
      name: '아무개3',
      schedule: [
        { day: ['화', '목'], startTime: '20:00', duration: 75, dist: 80 },
      ],
    }, // 중복 학생
  ],

  '고2수2 B': [
    {
      name: '아무개38',
      schedule: [
        { day: ['월', '수', '금'], startTime: '15:00', duration: 90, dist: 50 },
      ],
    },
    {
      name: '아무개39',
      schedule: [
        { day: ['화', '목'], startTime: '17:00', duration: 75, dist: 60 },
      ],
    },
  ],
  '고2수2 C': [
    {
      name: '아무개40',
      schedule: [
        { day: ['월', '수', '금'], startTime: '09:00', duration: 90, dist: 70 },
      ],
    },
    {
      name: '아무개41',
      schedule: [
        { day: ['화', '목'], startTime: '11:00', duration: 75, dist: 80 },
      ],
    },
  ],
  '고2수2 D': [
    {
      name: '아무개42',
      schedule: [
        { day: ['월', '수', '금'], startTime: '13:00', duration: 75, dist: 85 },
      ],
    },
    {
      name: '아무개43',
      schedule: [
        { day: ['화', '목'], startTime: '15:00', duration: 60, dist: 90 },
      ],
    },
  ],

  '고2확통 A': [
    {
      name: '아무개3',
      schedule: [
        {
          day: ['월', '수', '금'],
          startTime: '14:20',
          duration: 75,
          dist: 50,
        },
      ],
    }, // 중복 학생
    {
      name: '아무개28',
      schedule: [
        { day: ['화', '목'], startTime: '16:00', duration: 75, dist: 60 },
      ],
    },
    {
      name: '아무개29',
      schedule: [
        {
          day: ['월', '수', '금'],
          startTime: '18:00',
          duration: 75,
          dist: 70,
        },
      ],
    },
    {
      name: '아무개30',
      schedule: [
        { day: ['화', '목'], startTime: '20:00', duration: 75, dist: 80 },
      ],
    },
  ],

  '고2확통 B': [
    {
      name: '아무개44',
      schedule: [
        { day: ['월', '수', '금'], startTime: '12:00', duration: 75, dist: 30 },
      ],
    },
    {
      name: '아무개45',
      schedule: [
        { day: ['화', '목'], startTime: '14:00', duration: 90, dist: 40 },
      ],
    },
  ],

  // 고2 미적분 A, B
  '고2미적 A': [
    {
      name: '아무개46',
      schedule: [
        { day: ['월', '수', '금'], startTime: '10:00', duration: 75, dist: 35 },
      ],
    },
    {
      name: '아무개47',
      schedule: [
        { day: ['화', '목'], startTime: '12:00', duration: 60, dist: 40 },
      ],
    },
  ],
  '고2미적 B': [
    {
      name: '아무개48',
      schedule: [
        { day: ['월', '수', '금'], startTime: '14:00', duration: 90, dist: 50 },
      ],
    },
    {
      name: '아무개49',
      schedule: [
        { day: ['화', '목'], startTime: '16:00', duration: 75, dist: 60 },
      ],
    },
  ],
  '고3 A': [
    {
      name: '아무개9',
      schedule: [
        {
          day: ['월', '수', '금'],
          startTime: '17:30',
          duration: 75,
          dist: 45,
        },
      ],
    },
    {
      name: '아무개31',
      schedule: [
        { day: ['화', '목'], startTime: '19:30', duration: 60, dist: 55 },
      ],
    },
    {
      name: '아무개32',
      schedule: [
        {
          day: ['월', '수', '금'],
          startTime: '21:30',
          duration: 90,
          dist: 65,
        },
      ],
    },
    {
      name: '아무개33',
      schedule: [
        { day: ['화', '목'], startTime: '14:00', duration: 90, dist: 50 },
      ],
    },
  ],
  '고3 B': [
    {
      name: '아무개50',
      schedule: [
        { day: ['월', '수', '금'], startTime: '13:00', duration: 75, dist: 45 },
      ],
    },
    {
      name: '아무개51',
      schedule: [
        { day: ['화', '목'], startTime: '15:00', duration: 90, dist: 55 },
        { day: ['월', '수', '금'], startTime: '15:00', duration: 90, dist: 15 },
      ],
    },
  ],
};
