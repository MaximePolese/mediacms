let name = undefined !== process.env.MEDIACMS_USER_NAME ? process.env.MEDIACMS_USER_NAME : 'Full Name';
let username = undefined !== process.env.MEDIACMS_USER_USERNAME ? process.env.MEDIACMS_USER_USERNAME : 'Username';
let thumbnail = undefined !== process.env.MEDIACMS_USER_THUMB ? process.env.MEDIACMS_USER_THUMB : null;
let admin = 'true' === process.env.MEDIACMS_USER_IS_ADMIN;
let anonymous = 'true' === process.env.MEDIACMS_USER_IS_ANONYMOUS;

module.exports = {
  name,
  username,
  thumbnail,
  is: {
    admin,
    anonymous,
  },
  can: {
    addMedia: true,
    editMedia: true,
    deleteMedia: true,
    editSubtitle: false,
    readComment: false,
    addComment: false,
    deleteComment: false,
    editProfile: true,
    deleteProfile: false,
    manageMedia: true,
    manageUsers: false,
    manageComments: false,
    contactUser: false,
  },
  pages: {
    about: './profile-about.html',
    media: './profile-media.html',
    playlists: './profile-playlists.html',
  },
};
