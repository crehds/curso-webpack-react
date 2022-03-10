import React from 'react';
import { Card } from '../reusable/Card';
import { Photo } from '../reusable/Photo';
import { InfoParagraph } from './components/InfoParagraph';

export function About() {
  return (
    <Card>
      <Photo />
      <InfoParagraph />
    </Card>
  );
}
