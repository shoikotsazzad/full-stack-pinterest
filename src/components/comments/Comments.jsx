import './comments.css'
import apiRequest from '../../utils/apiRequest'
import { useQuery } from '@tanstack/react-query'
import Comment from './Comment'
import CommentForm from './CommentForm'

const Comments = ({ id }) => {

  

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
      </div>
      {/* Comment Form */}
      <CommentForm id={id} />
    </div>
  )
}

export default Comments
