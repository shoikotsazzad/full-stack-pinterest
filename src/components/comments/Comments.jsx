import './comments.css'
import Image from '../image/Image'
import ImojiPicker from 'emoji-picker-react'
import { useState } from 'react'
import apiRequest from '../../utils/apiRequest'
import { useQuery } from '@tanstack/react-query'
import Comment from './Comment'

const Comments = ({ id }) => {

  const [open, setOpen] = useState(false);

  const { isPanding, error, data } = useQuery({
    queryKey: ['comments', id],
    queryFn: () => apiRequest.get(`/comments/${id}`).then((res) => res.data),
  });

  if (isPanding) return "Loading...";
  if (error) return "Something went wrong..." + error.message;
  if (!data) return "User not found";

  return (
    <div className="comments">
      <div className="commentList">
        <span className='commentCount'>{data.length === 0 ? "No Comments" : data.length + "Comments"}</span>
        {/* Comment */}
        {
          data?.map((comment) => (
            <Comment key={comment._id} comment={comment} />
          ))
        }
        {/* Comment Form */}
      </div>
      <form className="commentForm">
        <input type="text" placeholder='Add a comment' />
        <div className="emoji">
          <div onClick={() => setOpen((prev) => !prev)}>😊</div>
          {open && (
            <div className='emojiPicker'>
              <ImojiPicker />
            </div>
          )}
        </div>
      </form>
    </div>
  )
}

export default Comments
