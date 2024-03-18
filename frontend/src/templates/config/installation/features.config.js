module.exports = {
  embeddedVideo: {
    initialDimensions: {
      width: 560, // In pixels.
      height: 315, // In pixels.
    },
  },
  headerBar: {
    hideLogin: false,
    hideRegister: true,
  },
  sideBar: {
    hideHomeLink: false,
    hideTagsLink: true,
    hideCategoriesLink: false,
  },
  media: {
    actions: {
      share: true,
      report: false,
      like: false,
      dislike: false,
      download: true,
      comment: false,
      save: false,
    },
    shareOptions: [
      'embed',
      'fb',
      'tw',
      'whatsapp',
      'telegram',
      'reddit',
      'tumblr',
      'vk',
      'pinterest',
      'mix',
      'linkedin',
      'email',
    ],
  },
  mediaItem: {
    hideDate: false,
    hideViews: false,
    hideAuthor: true,
  },
  playlists: {
    mediaTypes: ['audio', 'video'],
  },
};
