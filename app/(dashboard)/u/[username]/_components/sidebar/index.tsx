import React from 'react';
import { Wrapper } from './wrapper';
import { Toggle } from './toggle';
import { Navigation } from './navigation';

const Sidebar = () => {
  return (
    <Wrapper>
      <Toggle />
      <Navigation />
    </Wrapper>
  );
};

export default Sidebar;
