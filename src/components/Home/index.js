import React from 'react';
import { withAuthorization } from '../../components/Session'

const HomePage = () => (
  <div>
    <h1>Home</h1>
  </div>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);
