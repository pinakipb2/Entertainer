import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import AccordionLayout from './AccordionLayout';
import Table from './Table';

const AccordionAnime = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [watchingAnime, setWatchingAnime] = useState([]);
  const [wishlistedAnime, setWishlistedAnime] = useState([]);
  const [completedAnime, setCompletedAnime] = useState([]);
  useEffect(() => {
    const controller = new AbortController();
    const fetchAllAnime = async () => {
      try {
        const resp = await axios.get('/api/allEntertainments?type=anime', { signal: controller.signal });
        setWatchingAnime(resp.data.watchingAnime);
        setWishlistedAnime(resp.data.wishlistedAnime);
        setCompletedAnime(resp.data.completedAnime);
      } catch (err) {
        toast.error(err.message);
      }
    };
    fetchAllAnime();
    return () => {
      controller.abort();
    };
  }, []);
  return (
    <div className="flex flex-col justify-center items-center pt-12">
      <AccordionLayout title="Watching Anime" index={1} activeIndex={activeIndex} setActiveIndex={setActiveIndex}>
        <Table data={watchingAnime} setWatching={setWatchingAnime} setWishlisted={setWishlistedAnime} setCompleted={setCompletedAnime} />
      </AccordionLayout>
      <AccordionLayout title="WishListed Anime" index={2} activeIndex={activeIndex} setActiveIndex={setActiveIndex}>
        <Table data={wishlistedAnime} setWatching={setWatchingAnime} setWishlisted={setWishlistedAnime} setCompleted={setCompletedAnime} />
      </AccordionLayout>
      <AccordionLayout title="Completed Anime" index={3} activeIndex={activeIndex} setActiveIndex={setActiveIndex}>
        <Table data={completedAnime} setWatching={setWatchingAnime} setWishlisted={setWishlistedAnime} setCompleted={setCompletedAnime} />
      </AccordionLayout>
    </div>
  );
};

export default AccordionAnime;
