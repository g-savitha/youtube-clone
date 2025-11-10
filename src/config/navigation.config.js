import { ROUTES } from '../constants/routes';

export const NAVIGATION_CONFIG = {
  // Primary navigation items
  primary: [
    {
      id: 'home',
      label: 'home', // Translation key
      path: ROUTES.HOME,
      icon: 'HomeIcon',
      protected: false
    },
    {
      id: 'shorts',
      label: 'shorts',
      path: ROUTES.SHORTS,
      icon: 'PlayArrowIcon',
      protected: false
    },
    {
      id: 'subscriptions',
      label: 'subscriptions',
      path: ROUTES.SUBSCRIPTIONS,
      icon: 'SubscriptionsIcon',
      protected: false
    },
    {
      id: 'youtube-music',
      label: 'youtubeMusic',
      path: ROUTES.YOUTUBE_MUSIC,
      icon: 'MusicNoteIcon',
      protected: false
    },
  ],

  // "You" section - user-specific items
  userSection: {
    title: 'you', // Translation key
    items: [
      {
        id: 'history',
        label: 'history',
        path: ROUTES.HISTORY,
        icon: 'HistoryIcon',
        protected: true // Needs auth
      },
      {
        id: 'your-videos',
        label: 'yourVideos',
        path: ROUTES.YOUR_VIDEOS,
        icon: 'VideoLibraryIcon',
        protected: true
      },
      {
        id: 'your-courses',
        label: 'yourCourses',
        path: ROUTES.YOUR_COURSES,
        icon: 'SchoolIcon',
        protected: true
      },
      {
        id: 'watch-later',
        label: 'watchLater',
        path: ROUTES.WATCH_LATER,
        icon: 'AccessTimeIcon',
        protected: true
      },
      {
        id: 'liked-videos',
        label: 'likedVideos',
        path: ROUTES.LIKED_VIDEOS,
        icon: 'ThumbUpIcon',
        protected: true
      },
      {
        id: 'downloads',
        label: 'downloads',
        path: ROUTES.DOWNLOADS,
        icon: 'GetAppIcon',
        protected: true
      }
    ]
  },

  // Subscriptions section - dynamic, will be populated from user data
  subscriptions: {
    title: 'subscriptions',
    items: [] // Will be populated dynamically
  }
};