import React from 'react';
import { Photo } from '../reusable/Photo';
import { Card } from '../reusable/Card';

import { UserData } from './components/UserData';
import { SocialMedia } from './components/SocialMedia';

export const Home = (props) => {
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
