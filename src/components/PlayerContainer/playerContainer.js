import React from 'react';
import authData from '../../helpers/Data/authData';
import playerData from '../../helpers/Data/playerData';

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
      <div>{this.state.players.map((player) => <h6>{player.name}</h6>)}</div>
    )
  }
}

export default PlayerContainer;
