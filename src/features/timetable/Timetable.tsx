import { vacWeekend, week } from '../../shared/const/timetable';

const dummy = Array(7)
  .fill(0) // fill에 'null'을 넣어 빈 값을 채움
  .map(() => Array(10).fill(''));

const Timetable = () => {
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
        {vacWeekend.map((time, index) => (
          <tr key={time}>
            <td>{time}</td>
            {week.map((_, i) => (
              <td key={i}>{dummy[index][i]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Timetable;
