import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../data/axios"; // Your axios instance

export default function ChannelPage() {
  const { channelId } = useParams();
  const [channel, setChannel] = useState(null);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(`/channel/${channelId}`);
        setChannel(res.data);
        setVideos(res.data.videos || []);
      } catch (err) {
        console.error("Error loading channel:", err);
        setChannel(null);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [channelId]);

  const deleteVideo = async (videoId) => {
    try {
      await axios.delete(`/video/${videoId}`);
      setVideos((prev) => prev.filter((v) => v._id !== videoId));
    } catch (err) {
      console.error("Delete failed", err);
    }
  };

  if (loading) return <div className="p-4">Loading...</div>;
  if (!channel) return (
    <div className="p-4 text-red-500 text-center">
      Channel not found. <a href="/" className="underline text-blue-600">Go back Home</a>
    </div>
  );

  return (
    <div className="p-4">
      <div className="mb-4">
        <a href="/" className="text-blue-500 underline">← Back to Home</a>
      </div>
      <h2 className="text-2xl font-bold">{channel.channelName}</h2>
      <p className="text-gray-600">{channel.description}</p>
      <img src={channel.channelBanner} alt="Banner" className="w-full my-4" />
      <h3 className="text-lg font-semibold mb-2">Videos:</h3>
      {videos.length === 0 ? (
        <p>No videos found for this channel.</p>
      ) : (
        videos.map((video) => (
          <div key={video._id} className="border p-2 my-2">
            <h3 className="font-semibold">{video.title}</h3>
            <div className="flex gap-2">
              <button
                onClick={() => handleEdit(video._id)}
                className="border bg-blue-600 text-white px-3 py-1 font-medium"
              >
                Edit
              </button>
              <button
                onClick={() => deleteVideo(video._id)}
                className="bg-red-600 text-white px-3 py-1 font-medium"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}