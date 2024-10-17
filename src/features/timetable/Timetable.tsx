import { vacWeekend, week } from '../../shared/const/timetable';

const dummy = Array(7)
  .fill(0)
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
        {vacWeekend.map((time, timeIdx) => (
          <tr key={time}>
            <td>{time}</td>
            {week.map((_, dayIdx) => (
              <td key={dayIdx}>{dummy[dayIdx][timeIdx]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Timetable;
