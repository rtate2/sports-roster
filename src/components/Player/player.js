import React from 'react';
import playerShape from '../../helpers/propz/playerShape';
import PropTypes from 'prop-types';

import './player.scss';

class Player extends React.Component {
  static propTypes = {
    player: playerShape.playerShape,
    deletePlayer: PropTypes.func,
    setEditMode: PropTypes.func,
    setPlayerToEdit: PropTypes.func,
  }

  deletePlayerEvent = (e) => {
    e.preventDefault();
    const { player, deletePlayer } = this.props;
    deletePlayer(player.id);
  }

  setEditMode = (e) => {
    e.preventDefault();
    const { setEditMode, setPlayerToEdit, player } = this.props;
    setEditMode(true);
    setPlayerToEdit(player);
  }

  render() {
    const { player } = this.props;

    return(
        <div className="card player-card col-3">
          <button type="button" className="close d-flex justify-content-end delete" aria-label="Close" onClick={this.deletePlayerEvent}>
          <span aria-hidden="true">&times;</span>
          </button>
          <img src={player.imageUrl} className="card-img-top player-image" alt="Team Player" />
          <div className="card-body">
            <h5 className="card-title text">{player.name}</h5>
            <p className="card-text text">{player.position}</p>
            <button className="btn btn-secondary" onClick={this.setEditMode}>Edit Player</button>
          </div>
        </div>
    )
  }
}

export default Player;
