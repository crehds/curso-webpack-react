import { Card } from "../../../../components/Card";

import './styles.css';

function TimeLine() {
  return (
    <div className='timeline'>
      <Card type='up'>
        <div className='timeline-experience'>
          <h2>Ssr. ruby back-end developer</h2>
          <h3>TechyWe - El Salvador</h3>
          <h4>Jan 2023 - Present</h4>
        </div>
      </Card>
      <Card type='up'>
        <div className='timeline-experience'>
          <h2>Full-stack web developer JS || Ruby</h2>
          <h3>Freelance - Perú</h3>
          <h4>Oct 2020 - Jan 2023</h4>
        </div>
      </Card>
      <Card type='up'>
        <div className='timeline-experience'>
          <h2>Front-end web developer JS</h2>
          <h3>Eiche technology - Chile</h3>
          <h4>Feb 2019 - Jun 2019</h4>
        </div>
      </Card>
      <Card type='up'>
        <div className='timeline-experience'>
          <h2>Full-stack web developer JS || Ruby</h2>
          <h3>Freelance - Perú</h3>
          <h4>Nov 2018 - Jan 2019</h4>
        </div>
      </Card>
    </div>
  )
}
export default TimeLine;
