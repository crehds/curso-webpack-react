import { UserData } from './components/UserData';
import { SocialMedia } from './components/SocialMedia';
import { Card } from '../../components/Card';
import { Photo } from '../../components/Photo';

const Home = (props) => {
  return (
    <Card>
      <Photo
        position='center'
        src={props.avatar_url} />
      <UserData
        name={props.name}
        email={props.email}
        country={props.location}
        phone='+51 970 791 041'
      />
      <SocialMedia />
    </Card>
  );
};

export default Home;
