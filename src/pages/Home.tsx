import Timetable from '../features/timetable/Timetable';
import { 중등수업 } from '../shared/const/dummy';

const Home = () => {
  return (
    <div>
      <Timetable students={중등수업['중1 A']} />
    </div>
  );
};

export default Home;
