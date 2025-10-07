import { useInfiniteQuery } from '@tanstack/react-query';
import GalleryItem from '../galleryItem/GalleryItem';
import InfiniteScroll from 'react-infinite-scroll-component';
import './gallery.css'
import axios from 'axios';



const fetchPins = async ({ pageParam }) => {
  const res = await axios.get(`${import.meta.env.VITE_API_ENDPOINT}/pins?cursor=${pageParam}`);
  return res.data
}

const Gallery = () => {

  const { data, fetchNextPage, hasNextPage, status } = useInfiniteQuery({
    queryKey: ['pins'],
    queryFn: fetchPins,
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
  })

  if (status === "pending") return "Loading..."
  if (status === "error") return "Something went wrong..."

  console.log(data)

  const allPins = data?.pages.flatMap((page) => page.pins) || [];


  return (
    <InfiniteScroll
      dataLength={allPins.length}
      next={fetchNextPage}
      hasMore={!!hasNextPage}
      loader={<h4>Loading more posts...</h4>} 
      endMessage={<h3>All Posts Loaded!</h3>}   
    >
      <div className="gallery">
        {allPins?.map(item => (
          <GalleryItem key={item._id} item={item} />
        ))}
      </div>
    </InfiniteScroll>

  )
}

export default Gallery;

