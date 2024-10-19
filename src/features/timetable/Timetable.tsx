import { Student } from '../../shared/const/dummy';
import { vacWeekend, week } from '../../shared/const/timetable';
import { timeToMinutes } from '../../shared/util/time';

const calculateUnavailableTimes = (students: Student[]) => {
  const unavailableTimes: { [key: string]: number[] } = {}; // 요일별로 불가능한 시간대를 저장
  const minuteSchedule = vacWeekend.map((time) => timeToMinutes(time));

  students.forEach(({ schedule }) => {
    schedule.forEach(({ day, startTime, duration, dist }) => {
      const startMinutes = timeToMinutes(startTime);
      const beforeClass = startMinutes - dist; // 이동 시간 만큼 수업 전 시간 계산
      const afterClass = startMinutes + duration + dist; // 이동 시간과 수업 시간 포함

      minuteSchedule.forEach((currentMinutes, index) => {
        // 오후 6시 이후(6교시 부터 90분 수업 아니면 80분)
        const classDuaration = index > 5 ? 90 : 80;
        // 현재 시간이 수업 전 이동 시간과 수업 후 이동 시간 사이에 있는지 확인
        if (
          currentMinutes + classDuaration > beforeClass &&
          currentMinutes < afterClass
        ) {
          // 요일(day)이 배열로 되어 있으므로, 각각의 요일에 대해 처리
          day.forEach((d) => {
            if (!unavailableTimes[d]) unavailableTimes[d] = [];
            unavailableTimes[d].push(index);
          });
        }
      });
    });
  });

  return unavailableTimes;
};

interface TimetableProps {
  students: Student[]; // 매개변수로 받는 학생들의 수업 일정
}

const Timetable: React.FC<TimetableProps> = ({ students }) => {
  const unavailableTimes = calculateUnavailableTimes(students);

  return (
    <table border={1} style={{ width: '100%', textAlign: 'center' }}>
      <thead>
        <tr>
          <th>시간</th>
          {week.map((day) => (
            <th key={day}>{day}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {vacWeekend.map((time, timeIdx) => (
          <tr key={time}>
            <td>{time}</td>
            {week.map((day) => (
              <td
                key={day}
                style={{
                  backgroundColor:
                    unavailableTimes[day] &&
                    unavailableTimes[day].includes(timeIdx)
                      ? 'lightcoral'
                      : 'white',
                }}
              >
                {unavailableTimes[day] &&
                unavailableTimes[day].includes(timeIdx)
                  ? '불가능'
                  : ''}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Timetable;
