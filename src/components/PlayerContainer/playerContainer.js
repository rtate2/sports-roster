import React from 'react';
import authData from '../../helpers/Data/authData';
import playerData from '../../helpers/Data/playerData';
import Player from '../Player/player';

import './playerContainer.scss';

class PlayerContainer extends React.Component {
  state = {
    players: [],
  }

  componentDidMount() {
    playerData.getPlayersByUid(authData.getUid())
    .then((players) => {
      this.setState({ players })
    })
    .catch((errorFromPlayerContainer) => console.error({ errorFromPlayerContainer }));
  }
  render() {
    return(
      <div>{this.state.players.map((player) => (<Player key={player.id} player={player} />))}</div>
    )
  }
}

export default PlayerContainer;
