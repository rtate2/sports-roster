import React from 'react';
import authData from '../../helpers/Data/authData';
import playerData from '../../helpers/Data/playerData';
import Player from '../Player/player';
import PlayerForm from '../PlayerForm/playerForm';

import './playerContainer.scss';

class PlayerContainer extends React.Component {
  state = {
    players: [],
    editMode: false,
    playerToEdit: {},
    showPlayerForm: false,
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
      this.setState({ showPlayerForm: false });
    })
    .catch((error) => console.error({ error }));
  }

  setEditMode = (editMode) => {
    this.setState({ editMode, showPlayerForm: true });
  }

  setPlayerToEdit = (player) => {
    this.setState({ playerToEdit: player})
  }

  // Update portion start
  setShowPlayerForm = () => {
    this.setState({ showPlayerForm: true });
  }

  updatePlayer = (playerId, updatedPlayer ) => {
    playerData.updatePlayer(playerId, updatedPlayer)
    .then(() => {
      this.getPlayers();
      this.setState({ editMode: false, showPlayerForm: false });
    })
    .catch((error) => console.error({ error }));
  }
  // Update portion end

  render() {
    return(
      <div className="container">
        <button className="btn btn-secondary" onClick={this.setShowPlayerForm}>Add a New Player</button>
        { this.state.showPlayerForm && <PlayerForm addPlayer={this.addPlayer} editMode={this.state.editMode} playerToEdit={this.state.playerToEdit} updatePlayer={this.updatePlayer} /> }
        <div className="row offset-1">{this.state.players.map((player) => (<Player key={player.id} player={player} deletePlayer={this.deletePlayer} setEditMode={this.setEditMode} setPlayerToEdit={this.setPlayerToEdit} />))}</div>
      </div>
    )
  }
}

export default PlayerContainer;
