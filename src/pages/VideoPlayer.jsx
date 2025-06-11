import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../data/axios';
import { getToken, getUserId } from '../data/auth';
import { v4 as uuidv4 } from 'uuid';

const VideoPlayer = () => {
  const { videoId } = useParams();
  const [video, setVideo] = useState(null);
  const [comments, setComments] = useState([]); // array of comments
  const [commentText, setCommentText] = useState(''); // input text

  useEffect(() => {
    axios
      .get(`/video/${videoId}`)
      .then((res) => {
        setVideo(res.data);
        setComments(res.data.comments || []);
      })
      .catch((err) => console.error('Video fetch error:', err));
  }, [videoId]);

  const addComment = async () => {
    if (!commentText.trim()) return;

    const newComment = {
      commentId: uuidv4(),
      text: commentText,
      userId: getUserId(),
      timestamp: new Date().toISOString(),
    };
  
    try {
        const res = await axios.post(`/video/${videoId}/comments`, newComment, {
           headers: {
               Authorization: `Bearer ${getToken()}`,
             },
        });

            console.log("Saved comment:", res.data);
            setComments((prev) => [...prev, res.data]);
            setCommentText('');
        } catch (err) {
            console.error("Add comment failed:", err.response?.data || err.message);
        }

      }   
  if (!video) return <div>Loading...</div>;

  return (
    <div className='mt-4 w-screen p-4'>
      <iframe
        className="w-full h-64 md:h-96"
        src={`https://www.youtube.com/embed/${video.videoId}`}
        title={video.title}
        allowFullScreen
      ></iframe>

      <h2 className='text-xl font-bold mt-2'>{video.title}</h2>
      <p className="text-gray-600">{video.description}</p>
      <p className="text-sm text-gray-500">{video.views} views</p>

      <div className='mt-4'>
        <h3 className='font-semibold mb-2'>Comments</h3>
        <input
          type='text'
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder='Add a comment'
          className='border p-2 w-full mb-2 rounded'
        />
        <button
          onClick={addComment}
          className="bg-blue-600 text-white px-3 py-1 rounded">
          Post
        </button>

        <ul className='mt-4'>
          {comments.length > 0 ? (
            comments.map((c, i) => (
              <li key={i} className="text-sm border-b py-1">
                <strong>{c.username || c.userId || 'User'}:</strong> {c.text}
              </li>
            ))
          ) : (
            <p className="text-gray-500">No comments yet.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default VideoPlayer;
