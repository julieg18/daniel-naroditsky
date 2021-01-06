import { videosNewVideos, videosPopularVideos } from '../constants/index';

function sendGetRequest({ url }) {
  return fetch(url).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(new Error(`Err: ${res.status}`));
  });
}

function getYoutubeChannelsNewestVideos() {
  const url = `https://www.googleapis.com/youtube/v3/search?key=${process.env.YOUTUBE_API_KEY}&channelId=${process.env.YOUTUBE_CHANNEL_ID}&part=snippet,id&maxResults=5&order=date`;
  return sendGetRequest({ url }).then(({ items }) => {
    const videoIds = items.map(({ id: { videoId } }) => videoId);
    return videoIds;
  });
}

function getYoutubeChannelsMostPopularVideos() {
  const url = `https://www.googleapis.com/youtube/v3/search?key=${process.env.YOUTUBE_API_KEY}&channelId=${process.env.YOUTUBE_CHANNEL_ID}&part=snippet,id&maxResults=3&order=viewCount`;
  return sendGetRequest({ url }).then(({ items }) => {
    const videoIds = items.map(({ id: { videoId } }) => videoId);
    return videoIds;
  });
}

function addErrMessageToVideos(videos) {
  videos.forEach((video) => {
    video.classList.add('video_failed');
  });
}

function addYoutubeVideoToList({ list, videoId, index }) {
  const videoTemplate = document.querySelector('#video__ytplayer');
  const video = videoTemplate.content
    .cloneNode(true)
    .querySelector('.video__ytplayer');

  video.src = `https://www.youtube.com/embed/${videoId}`;
  list[index].append(video);
}

getYoutubeChannelsNewestVideos()
  .then((videoIds) => {
    videoIds.forEach((videoId, i) => {
      addYoutubeVideoToList({ list: videosNewVideos, videoId, index: i });
    });
  })
  .catch((err) => {
    // eslint-disable-next-line no-console
    console.log(err.message);
    addErrMessageToVideos(videosNewVideos);
  });

getYoutubeChannelsMostPopularVideos()
  .then((videoIds) => {
    videoIds.forEach((videoId, i) => {
      addYoutubeVideoToList({ list: videosPopularVideos, videoId, index: i });
    });
  })
  .catch((err) => {
    // eslint-disable-next-line no-console
    console.log(err.message);
    addErrMessageToVideos(videosPopularVideos);
  });
