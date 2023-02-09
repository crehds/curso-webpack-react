

import { UserData } from './components/UserData';
import { SocialMedia } from './components/SocialMedia';
import { Card } from '../../components/Card';
import { Photo } from '../../components/Photo';

const Home = (props) => {
  return (
    <Card>
      <Photo src={props.avatar_url} />
      <UserData
        name={props.name}
        email={props.email}
        country={props.location}
      />
      <SocialMedia />
    </Card>
  );
};

export default Home;
