import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {
  renderSongList() {
    return this.props.songs.map((song) => {
      return (
        <div key={song.title} className="item">
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content">
            <div className="title">{song.title}</div>
            <div className="author">Author: {song.author}</div>
          </div>
        </div>
      );
    });
  }
  render() {
    return <div className="ui divided list">{this.renderSongList()}</div>;
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return { songs: state.songs };
};
export default connect(mapStateToProps, { selectSong })(SongList);
