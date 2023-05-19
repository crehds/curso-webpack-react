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
        <h2>Summary</h2>
        <div className='experience-details'>
          <ul>
            <li>
              <BiGitPullRequest
                size={20}
                color='#000' />
              <span> Pull Requests: 1,000</span>
            </li>
            <li>
              <TbGitCommit
                size={20}
                color='#000' />
              <span> Commits: 1,000</span>
            </li>
            <li>
              <SiCodereview
                size={20}
                color='#000' />
              <span> Code Reviews: 1,000</span>
            </li>
            <li>
              <GoIssueOpened
                size={20}
                color='#000' />
              <span> Issues: 1,000</span>
            </li>
            <li>
              <SiCodewars
                size={20}
                color='#000' />
              <span> Codewars: 1,000</span>
            </li>
          </ul>
        </div>
      </div>
    </Card>
  )
}

export default Experience;
