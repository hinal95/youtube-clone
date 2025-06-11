in src folder =>
 componets ->
  1.filterBar.jsx : array of categories on this using map() method for tasform and rendering each element
    ○ Implement a search bar on the homepage.
     This search bar is present in the header.Filter videos based on title.
    ○ Filter buttons should be implemented and filters should work based on category.
  2.Header.jsx : display logo, searchbar and signin button.
  3.ProtectedRoute.jsx: prevent routes from being access by unauthentication user through token.
  4.SideBar.jsx: display hamburgermenu with active home tag for redirect to home page
  5.VideoCard.jsx: detail of videos display on homepage
   { "videoId": "video01", "title": "Learn React in 30 Minutes", "thumbnailUrl":
     "https://example.com/thumbnails/react30min.png", "description": "A quick tutorial to get started
      with React.", "channelId": "channel01", "uploader": "user01", "views": 15200, "likes": 1023,
      "dislikes": 45, "uploadDate": "2024-09-20", "comments": [ { "commentId": "comment01", "userId":
    "user02", "text": "Great video! Very helpful.", "timestamp": "2024-09-21T08:30:00Z" } ] }.
 
 pages ->
 1.Home.jsx:  Display a YouTube Header.
 ○ Display a static sidebar which you can toggle from the top hamburger menu.
 ○ Display filter buttons at the top.
 ○ Display a grid of video thumbnails.
 ○ Each video card should show:
     ■ Title
     ■ Thumbnail
     ■ Channel Name
     ■ View

 2.login: JWT-basedlogin,
        Sign-infunctionalit

3.Registration:○ Allow users to register and log in with:
       ■ Username
       ■ Email
       ■ Password
       ○ Use JWTfor authentication
       login button to come login page
4.VideoPlayer.jsx:  ○ Display the selected video with:
     ■ Video player
     ■ Title and description
     ■ Channel name
     ■ Like and dislike buttons
     ■ Comment section
5.Channel.jsx:
   ○ Option to create a channel only after the user is signed in.
   ○ Display a list of videos which belong to that particular channel.
   ○ Allow the user to edit or delete their videos


data -> 
auth.js: using localstorage for get,set remove items.
axios.js: 
   No need to rewrite base URLs everywhere.
   Automatically includes credentials.
   Easier to add interceptors

SampleData.jsx: store data related to video, comment, users and channel.