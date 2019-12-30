import React from 'react';
import authData from '../../helpers/Data/authData';
import PropTypes from 'prop-types';
import playerShape from '../../helpers/propz/playerShape';

class PlayerForm extends React.Component {

  static propTypes = {
    addPlayer: PropTypes.func,
    playerToEdit: playerShape.playerShape,
    editMode: PropTypes.bool,
    updatePlayer: PropTypes.func,
  }

  state = {
    playerImageUrl: '',
    playerName: '',
    playerPosition: '',
  }

  componentDidMount() {
    const { playerToEdit, editMode} = this.props;
    if (editMode) {
      this.setState({ playerImageUrl: playerToEdit.imageUrl, playerName: playerToEdit.name, playerPosition: playerToEdit.position });
    }
  }

  componentDidUpdate(prevProps) {
    if ((prevProps.playerToEdit.id !== this.props.playerToEdit.id) && this.props.editMode) {
      this.setState({ playerImageUrl: this.props.playerToEdit.imageUrl, playerName: this.props.playerToEdit.name, playerPosition: this.props.playerToEdit.position });
    }
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

  updatePlayerEvent = (e) => {
    e.preventDefault();
    const { updatePlayer, playerToEdit } = this.props;
    const updatedPlayer = {
      imageUrl: this.state.playerImageUrl,
      name: this.state.playerName,
      position: this.state.playerPosition,
      uid: playerToEdit.uid,
    }
    updatePlayer(playerToEdit.id, updatedPlayer);
  }

  render() {

    const { editMode } = this.props;

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
        {
          (editMode) ? (<button className="btn btn-danger" onClick={this.updatePlayerEvent}>Edit Player</button>)
          : (<button className="btn btn-secondary" onClick={this.savePlayerEvent}>Save Player</button>)
        }
      </form>
    )
  }
}

export default PlayerForm;
