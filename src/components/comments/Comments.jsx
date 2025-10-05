import './comments.css'
import Image from '../image/Image'
import ImojiPicker from 'emoji-picker-react'
import { useState } from 'react'

const Comments = () => {

  const [open, setOpen] = useState(false);

  return (
    <div className="comments">
      <div className="commentList">
        <span className='commentCount'>5 comments</span>
        {/* Comment */}
        <div className="comment">
          <Image path="/general/noAvatar.png" alt=""/>
          <div className="commentContent">
            <span className='commentUserName'>John Doe</span>
            <p className='commentText'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, deserunt.</p>
            <span className='commentTime'>1h</span>
          </div>
        </div>
        {/* Comment */}
        <div className="comment">
          <Image path="/general/noAvatar.png" alt=""/>
          <div className="commentContent">
            <span className='commentUserName'>John Doe</span>
            <p className='commentText'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, deserunt.</p>
            <span className='commentTime'>1h</span>
          </div>
        </div>
        {/* Comment */}
        <div className="comment">
          <Image path="/general/noAvatar.png" alt=""/>
          <div className="commentContent">
            <span className='commentUserName'>John Doe</span>
            <p className='commentText'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, deserunt.</p>
            <span className='commentTime'>1h</span>
          </div>
        </div>
        {/* Comment */}
        <div className="comment">
          <Image path="/general/noAvatar.png" alt=""/>
          <div className="commentContent">
            <span className='commentUserName'>John Doe</span>
            <p className='commentText'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, deserunt.</p>
            <span className='commentTime'>1h</span>
          </div>
        </div>
        {/* Comment */}
        <div className="comment">
          <Image path="/general/noAvatar.png" alt=""/>
          <div className="commentContent">
            <span className='commentUserName'>John Doe</span>
            <p className='commentText'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, deserunt.</p>
            <span className='commentTime'>1h</span>
          </div>
        </div>
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
