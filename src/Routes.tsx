import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import {
  IndexView,
  Home as HomeView,
  CoinFlip as CoinFlip,
  Dice as Dice,
  Roulette as Roulette,
  About as About,
  Games as Games
} from './views';

// Documentation pages


const Routes = (): JSX.Element => {
  return (
    <Switch>
      <Route exact path="/" render={() => <IndexView />} />
      <Route exact path="/home" render={() => <HomeView />} />
      <Route exact path="/about" render={() => <About />} />
      <Route exact path="/coinflip" render={() => <CoinFlip />} />
      <Route exact path="/dice" render={() => <Dice />} />
      <Route exact path="/roulette" render={() => <Roulette />} />
      <Route exact path="/games" render={() => <Games />} />
    </Switch>
  );
};

export default Routes;
