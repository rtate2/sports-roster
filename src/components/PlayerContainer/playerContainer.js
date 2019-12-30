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
    this.getPlayers();
  }

  getPlayers = () => {
    playerData.getPlayersByUid(authData.getUid())
    .then((players) => {
      this.setState({ players })
    })
    .catch((errorFromPlayerContainer) => console.error({ errorFromPlayerContainer }));
  }

  deletePlayer = (id) => {
    playerData.deletePlayer(id)
    .then(() => {
      this.getPlayers();
    })
    .catch((error) => ({ error }));
  }

  render() {
    return(
      <div className="container">
        <div className="row">{this.state.players.map((player) => (<Player key={player.id} player={player} deletePlayer={this.deletePlayer} />))}</div>
      </div>
    )
  }
}

export default PlayerContainer;
