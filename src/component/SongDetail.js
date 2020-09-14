import React from 'react';
import { connect } from 'react-redux';

const SogDetail = ({ song }) => {
  if (!song) {
    return <div>Please Select a Song</div>;
  }
  return (
    <div> 
      <h3>Details for:</h3>
      <p>
        Title: {song.title}
        <br />
        Duration: {song.duration}
      </p>
      <p> Artist: {song.author}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SogDetail);
