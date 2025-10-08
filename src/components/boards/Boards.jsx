import { useQuery } from '@tanstack/react-query';
import Image from '../image/Image'
import './boards.css'
import apiRequest from '../../utils/apiRequest';
import {format} from 'timeago.js'

const Boards = ({ userId }) => {

  const { isPanding, error, data } = useQuery({
    queryKey: ['boards', userId],
    queryFn: () => apiRequest.get(`/boards/${userId}`).then((res) => res.data),
  });

  if (isPanding) return "Loading...";
  if (error) return "Something went wrong..." + error.message;
  if (!data) return "User not found";

  return (
    <div className='collections'>
      {/* Collection */}
      {
        data?.map((board) => (
          <div className="collection" key={board._id}>
            <Image src={board.firstPin.media} alt="" />
            <div className="collectionInformation">
              <h1>{board.title} </h1>
              <span>{board.pinCount} Pins . {format(board.createdAt)}</span>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Boards
