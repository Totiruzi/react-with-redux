const songsReducer = () => {
  return [
    {
      title: 'Total Eclipse of the heart',
      duration: '5:33',
      autor: 'Bonnie Tyler',
    },
    { title: 'All Night Long', duration: '3:48', autor: 'Lionel Richie' },
    {
      title: 'I Wanna Dance With Somebody',
      duration: '4:51',
      autor: 'Whitney Houston',
    },
    {
      title: 'You Are The One That I Want',
      duration: '4:07',
      autor: 'John Travolta',
    },
    { title: 'Uptown Girl', duration: '3:22', autor: 'Billy Loel' },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};
