import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    {
      title: 'Total Eclipse of the heart',
      duration: '5:33',
      author: 'Bonnie Tyler',
    },
    {
      title: 'All Night Long',
      duration: '3:48',
      author: 'Lionel Richie',
    },
    {
      title: 'I Wanna Dance With Somebody',
      duration: '4:51',
      author: 'Whitney Houston',
    },
    {
      title: 'You Are The One That I Want',
      duration: '4:07',
      author: 'John Travolta',
    },
    {
      title: 'Uptown Girl',
      duration: '3:22',
      author: 'Billy Loel',
    },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
