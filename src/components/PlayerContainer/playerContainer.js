import React from 'react';
import authData from '../../helpers/Data/authData';
import playerData from '../../helpers/Data/playerData';
import Player from '../Player/player';
import PlayerForm from '../PlayerForm/playerForm';

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

  addPlayer = (newPlayer) => {
    playerData.createPlayer(newPlayer)
    .then(() => {
      this.getPlayers();
    })
    .catch((error) => console.error({ error }));
  }

  render() {
    return(
      <div className="container">
        <PlayerForm addPlayer={this.addPlayer} />
        <div className="row">{this.state.players.map((player) => (<Player key={player.id} player={player} deletePlayer={this.deletePlayer} />))}</div>
      </div>
    )
  }
}

export default PlayerContainer;
