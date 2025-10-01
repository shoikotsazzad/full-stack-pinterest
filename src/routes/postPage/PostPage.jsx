import './postPage.css'
import Image from "../../components/image/Image"
import PostInteractions from '../../components/postInteractions/postInteractions'
import {Link} from "react-router"
import Comments from '../../components/comments/Comments'
import { FaArrowLeft } from "react-icons/fa6";

const PostPage = () => {
  return (
    <div className='postPage'>
      <FaArrowLeft />
       <div className="postContainer">
        <div className="postImg">
          <Image path="/pins/pin1.jpeg" ALT="" W={736} />
        </div>
        <div className='postDetails'>
        <PostInteractions />
        <Link to="/john" className='postUser'>
          <Image path="/general/noAvatar.png" />
          <span>John Doe</span>
        </Link>
        <Comments />
        </div>
       </div>
    </div>
  )
}

export default PostPage
