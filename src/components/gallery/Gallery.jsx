import { useInfiniteQuery } from '@tanstack/react-query';
import GalleryItem from '../galleryItem/GalleryItem';
import InfiniteScroll from 'react-infinite-scroll-component';
import './gallery.css'
import axios from 'axios';

const fetchPins = async ({ pageParam, search, userId}) => {
  const res = await axios.get(`${import.meta.env.VITE_API_ENDPOINT}/pins?cursor=${
    pageParam
  }&serch=${search || '' 
  }&userId=${userId || ''}`);
  return res.data;
}

const Gallery = ({search, userId}) => {
  const { data, fetchNextPage, hasNextPage, status } = useInfiniteQuery({
    queryKey: ['pins', search, userId],
    queryFn:({pageParam = 0}) => fetchPins({pageParam, search, userId}),
    initialPageParam: 0,
    getNextPageParam: (lastPage) =>
      lastPage.nextCursor !== null && lastPage.nextCursor !== undefined
        ? lastPage.nextCursor
        : undefined,
  });

  if (status === "loading") return "Loading...";
  if (status === "error") return "Something went wrong...";

  const allPins = data?.pages.flatMap(page => page.pins) || [];
  console.log(allPins);

  return (
    <InfiniteScroll
      dataLength={allPins.length}
      next={fetchNextPage}
      hasMore={!hasNextPage}
      loader={<h4>Loading more posts...</h4>} 
      endMessage={<h3>All Posts Loaded!</h3>}   
    >
      <div className="gallery">
        {allPins.map(item => (
          <GalleryItem key={item._id} item={item} />
        ))}
      </div>
    </InfiniteScroll>
  )
}

export default Gallery;
