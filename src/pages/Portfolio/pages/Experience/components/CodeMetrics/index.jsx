import { SiCodereview, SiCodewars } from "react-icons/si";
import { Card } from "../../../../components/Card";
import { Photo } from "../../../../components/Photo";
import { GoIssueOpened } from "react-icons/go";
import { TbGitCommit } from "react-icons/tb";
import { BiGitPullRequest } from "react-icons/bi";

import "./styles.css";

function CodeMetrics() {
  return (
    <Card type='no-division'>
      <div className='experience-code'>
        <div className='code-metrics'>
          <h2 className='code-metrics--title'>Summary</h2>
          <ul className='code-metrics--details'>
            <li className='code-metric'>
              <div className='code-metric--description'>
                <BiGitPullRequest

                  size={20}
                  color='var(--yellow)' />
                <p> Pull Requests</p>
              </div>
              <div className='code-metric--value'>
                <p>250</p>
              </div>
            </li>
            <li className='code-metric'>
              <div className='code-metric--description'>
                <TbGitCommit
                  size={20}
                  color='var(--yellow)' />
                <p> Commits</p>
              </div>
              <div className='code-metric--value'>
                <p>5,436</p>
              </div>
            </li>
            <li className='code-metric'>
              <div className='code-metric--description'>
                <SiCodereview
                  size={20}
                  color='var(--yellow)' />
                <p> Code Reviews </p>
              </div>
              <div className='code-metric--value'>
                <p>53</p>
              </div>
            </li>
            <li className='code-metric'>
              <div className='code-metric--description'>
                <GoIssueOpened
                  size={20}
                  color='var(--yellow)' />
                <p> Issues</p>
              </div>
              <div className='code-metric--value'>
                <p>25</p>
              </div>
            </li>
            <li className='code-metric'>
              <div className='code-metric--description'>
                <SiCodewars
                  size={20}
                  color='var(--yellow)' />
                <p> Codewars</p>
              </div>
              <div className='code-metric--value'>
                <p>1,197</p>
              </div>
            </li>
          </ul>
        </div>
        <Photo />
      </div>
    </Card>
  )
}

export default CodeMetrics;
