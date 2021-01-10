import { videosNewVideos, videosPopularVideos } from '../constants/index';

const getVideoElSrc = (videoId) => `https://www.youtube.com/embed/${videoId}`;
const getVideoElSrcDoc = ({ videoId, title }) =>
  `<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/${videoId}?autoplay=1><img src=https://img.youtube.com/vi/${videoId}/hqdefault.jpg alt='${title}'><span>▶</span></a>`;

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
    const videos = items.map(({ id: { videoId }, snippet: { title } }) => ({
      title,
      videoId,
    }));
    return videos;
  });
}

function getYoutubeChannelsMostPopularVideos() {
  const url = `https://www.googleapis.com/youtube/v3/search?key=${process.env.YOUTUBE_API_KEY}&channelId=${process.env.YOUTUBE_CHANNEL_ID}&part=snippet,id&maxResults=3&order=viewCount`;
  return sendGetRequest({ url }).then(({ items }) => {
    const videos = items.map(({ id: { videoId }, snippet: { title } }) => ({
      title,
      videoId,
    }));
    return videos;
  });
}

function addErrMessageToVideos(videos) {
  videos.forEach((video) => {
    video.classList.add('video_failed');
  });
}

function addYoutubeVideoToList({ list, video: { videoId, title }, index }) {
  const videoTemplate = document.querySelector('#video__ytplayer');
  const video = videoTemplate.content
    .cloneNode(true)
    .querySelector('.video__ytplayer');

  video.src = getVideoElSrc(videoId);
  video.srcdoc = getVideoElSrcDoc({ videoId, title });
  video.title = title;
  list[index].append(video);
}

getYoutubeChannelsNewestVideos()
  .then((videos) => {
    videos.forEach((video, i) => {
      addYoutubeVideoToList({ list: videosNewVideos, video, index: i });
    });
  })
  .catch((err) => {
    // eslint-disable-next-line no-console
    console.log(err.message);
    addErrMessageToVideos(videosNewVideos);
  });

getYoutubeChannelsMostPopularVideos()
  .then((videos) => {
    videos.forEach((video, i) => {
      addYoutubeVideoToList({ list: videosPopularVideos, video, index: i });
    });
  })
  .catch((err) => {
    // eslint-disable-next-line no-console
    console.log(err.message);
    addErrMessageToVideos(videosPopularVideos);
  });
