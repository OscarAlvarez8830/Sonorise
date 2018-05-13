export const searchForTracks = query => {
  return $.ajax({
    method: 'get',
    url: 'api/tracks',
    data: { query },
  });
};
