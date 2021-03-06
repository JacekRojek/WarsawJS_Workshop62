import React from 'react';

import Info from '../components/Info';
import { Content } from '../content/Content';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const About = () => (
  <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
    <Content>
      <Info text={'Jacek'} />
    </Content>
  </Main>
);

export default About;
