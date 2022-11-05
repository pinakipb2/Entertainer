import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import AccordionLayout from './AccordionLayout';
import Table from './Table';

const AccordionMovies = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [watchingMovies, setWatchingMovies] = useState([]);
  const [wishlistedMovies, setWishlistedMovies] = useState([]);
  const [completedMovies, setCompletedMovies] = useState([]);
  useEffect(() => {
    const controller = new AbortController();
    const fetchAllMovies = async () => {
      try {
        const resp = await axios.get('/api/allEntertainments?type=movie', { signal: controller.signal });
        setWatchingMovies(resp.data.watchingMovies);
        setWishlistedMovies(resp.data.wishlistedMovies);
        setCompletedMovies(resp.data.completedMovies);
      } catch (err) {
        toast.error(err.message);
      }
    };
    fetchAllMovies();
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div className="flex flex-col justify-center items-center pt-12">
      <AccordionLayout title="Watching Movies / Series" index={1} activeIndex={activeIndex} setActiveIndex={setActiveIndex}>
        <Table data={watchingMovies} setWatching={setWatchingMovies} setWishlisted={setWishlistedMovies} setCompleted={setCompletedMovies} />
      </AccordionLayout>
      <AccordionLayout title="WishListed Movies / Series" index={2} activeIndex={activeIndex} setActiveIndex={setActiveIndex}>
        <Table data={wishlistedMovies} setWatching={setWatchingMovies} setWishlisted={setWishlistedMovies} setCompleted={setCompletedMovies} />
      </AccordionLayout>
      <AccordionLayout title="Completed Movies / Series" index={3} activeIndex={activeIndex} setActiveIndex={setActiveIndex}>
        <Table data={completedMovies} setWatching={setWatchingMovies} setWishlisted={setWishlistedMovies} setCompleted={setCompletedMovies} />
      </AccordionLayout>
    </div>
  );
};

export default AccordionMovies;
