
import { Card } from '../../components/Card';
import { Photo } from '../../components/Photo';
import { InfoParagraph } from './components/InfoParagraph';

function About() {
  return (
    <Card>
      <Photo position='center' />
      <InfoParagraph />
    </Card>
  );
}

export default About;
