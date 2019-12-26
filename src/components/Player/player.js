import React from 'react';
import playerShape from '../../helpers/propz/playerShape';

import './player.scss';

class Player extends React.Component {
  static propTypes = {
    player: playerShape.playerShape,
  }

  render() {
    const { player } = this.props;

    return(
      <div className="card player-card">
        <img src={player.imageUrl} className="card-img-top player-image" alt="Team Player" />
        <div className="card-body">
          <h5 className="card-title">{player.name}</h5>
          <p className="card-text">{player.position}</p>
        </div>
      </div>
    )
  }
}

export default Player;


// create Bootstrap card
// import players to playerContainer
// pass Player <div>{this.state.players.map((player) => (<Player key={player.id} player={player} />))}</div>
// style cards