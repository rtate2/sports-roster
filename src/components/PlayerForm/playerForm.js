import React from 'react';
import authData from '../../helpers/Data/authData';
import PropTypes from 'prop-types';

class PlayerForm extends React.Component {

  static propTypes = {
    addPlayer: PropTypes.func,
  }

  state = {
    playerImageUrl: '',
    playerName: '',
    playerPosition: '',
  }

  savePlayerEvent = (e) => {
    e.preventDefault();
    const { addPlayer } = this.props;
    const newPlayer = {
      imageUrl: this.state.playerImageUrl,
      name: this.state.playerName,
      position: this.state.playerPosition,
      uid: authData.getUid(),
    }
    addPlayer(newPlayer);
    this.setState({ playerImageUrl: '', playerName: '', playerPosition: '' });
  }

  imageChange = (e) => {
    e.preventDefault();
    this.setState({ playerImageUrl: e.target.value });
  }

  nameChange = (e) => {
    e.preventDefault();
    this.setState({ playerName: e.target.value });
  }

  positionChange = (e) => {
    e.preventDefault();
    this.setState({ playerPosition: e.target.value });
  }

  render() {
    return (
      <form className='col-6 offset-3 PlayerForm'>
        <div className="form-group">
          <label htmlFor="order-name">Image Url:</label>
          <input
            type="text"
            className="form-control"
            id="player-imageUrl"
            placeholder="Enter Image Url"
            value={this.state.playerImageUrl}
            onChange={this.imageChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="order-name">Player Name:</label>
          <input
            type="text"
            className="form-control"
            id="player-name"
            placeholder="Enter player name"
            value={this.state.playerName}
            onChange={this.nameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description-name">Player Position:</label>
          <input
            type="text"
            className="form-control"
            id="player-position"
            placeholder="Enter player position"
            value={this.state.playerPosition}
            onChange={this.positionChange}
          />
        </div>
        <button className="btn btn-secondary" onClick={this.savePlayerEvent}>Save Player</button>
      </form>
    )
  }
}

export default PlayerForm;
