export const videos = [
  {
    videoId: "VlPiVmYuoqw",
    title: "Learn React in 30 Minutes",
    thumbnailUrl: "https://i.ytimg.com/vi/VlPiVmYuoqw/hq720.jpg",
    description: "A quick tutorial to get started with React.",
    channelId: "UmnCZ7-9yDY",
    uploader: "user01",
    views: 15200,
    likes: 1023,
    dislikes: 45,
    uploadDate: "2024-09-20",
    comments: [
      {
        commentId: "comment01",
        userId: "user02",
        text: "Great video! Very helpful.",
        timestamp: "2024-09-21T08:30:00Z",
      },
    ],
  },
];
export const users = [
  {
    userId: "user01",
    username: "JohnDoe",
    email: "john@example.com",
    password: "hashedPassword123",
    avatar: "https://example.com/avatar/johndoe.png",
    channels: ["UmnCZ7-9yDY","P0XMXqDGttU"],
  },
];
export const channels = [
  {
    channelId: "UmnCZ7-9yDY",
    channelName: "Code with shradha khapra",
    owner: "user01",
    description: "Coding tutorials and tech reviews by shradha khapra.",
    channelBanner: "https://i.ytimg.com/vi/UmnCZ7-9yDY/hq720.jpg",
    subscribers: 5200,
    videos: ["video01", "video02"],
  },
];