import './postPage.css'
import Image from "../../components/image/Image"
import PostInteractions from '../../components/postInteractions/postInteractions'
import {Link, useParams} from "react-router"
import Comments from '../../components/comments/Comments'
import { FaArrowLeft } from "react-icons/fa6";
import { useQuery } from '@tanstack/react-query'
import apiRequest from '../../utils/apiRequest'

const PostPage = () => {
  const {id} = useParams();

  const { isPanding, error, data} = useQuery({
    queryKey: ['pin', id],
    queryFn: () => apiRequest.get(`/pins/${id}`).then((res) => res.data),
  });

  if(isPanding) return "Loading...";
  if(error) return "Something went wrong..." + error.message;
  if(!data) return "Pin not found";
  
  return (
    <div className='postPage'>
      <FaArrowLeft />
       <div className="postContainer">
        <div className="postImg">
          <Image src={data.media} alt="" W={736} />
        </div>
        <div className='postDetails'>
        <PostInteractions />
        <Link to={`/${data.user.username}`} className='postUser'>
          <Image src={data.user.img || "/general/noAvatar.png"} />
          <span>{data.user.displayName} </span>
        </Link>
        <Comments />
        </div>
       </div>
    </div>
  )
}

export default PostPage
