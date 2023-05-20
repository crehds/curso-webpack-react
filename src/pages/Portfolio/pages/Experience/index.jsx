import { Card } from "../../components/Card";
import { Photo } from "../../components/Photo";
import { BiGitPullRequest } from 'react-icons/bi';
import { TbGitCommit } from 'react-icons/tb';
import { SiCodereview, SiCodewars } from 'react-icons/si';
import { GoIssueOpened } from  'react-icons/go';

import './styles.css';

function Experience() {
  return (
    <Card type='no-division'>
      <Photo position='right' />
      <div className='experience-metrics'>
        <h2 className='experience-metrics--title'>Summary</h2>
        <ul className='experience-metrics--details'>
          <li className='experience-metric'>
            <div className='experience-metric--description'>
              <BiGitPullRequest
                size={20}
                color='var(--yellow)' />
              <p> Pull Requests</p>
            </div>
            <div className='experience-metric--value'>
              <p>1,000</p>
            </div>
          </li>
          <li className='experience-metric'>
            <div className='experience-metric--description'>
              <TbGitCommit
                size={20}
                color='var(--yellow)' />
              <p> Commits</p>
            </div>
            <div className='experience-metric--value'>
              <p>1,000</p>
            </div>
          </li>
          <li className='experience-metric'>
            <div className='experience-metric--description'>
              <SiCodereview
                size={20}
                color='var(--yellow)' />
              <p> Code Reviews </p>
            </div>
            <div className='experience-metric--value'>
              <p>1,000</p>
            </div>
          </li>
          <li className='experience-metric'>
            <div className='experience-metric--description'>
              <GoIssueOpened
                size={20}
                color='var(--yellow)' />
              <p> Issues</p>
            </div>
            <div className='experience-metric--value'>
              <p>1,000</p>
            </div>
          </li>
          <li className='experience-metric'>
            <div className='experience-metric--description'>
              <SiCodewars
                size={20}
                color='var(--yellow)' />
              <p> Codewars</p>
            </div>
            <div className='experience-metric--value'>
              <p>1,000</p>
            </div>
          </li>
        </ul>
      </div>
    </Card>
  )
}

export default Experience;
