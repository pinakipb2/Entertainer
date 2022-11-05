import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { MdCancel, MdLibraryAddCheck } from 'react-icons/md';
import axios from 'axios';

const Modal = ({ setModalOpen, modalData, setWatching, setWishlisted, setCompleted }) => {
  const [formData, setFormData] = useState({
    type: modalData.type,
    season: modalData.season,
    episode: modalData.episode,
    category: modalData.category,
    entertainmentName: modalData.entertainmentName,
    link: modalData.link,
  });
  const fetchAll = async () => {
    try {
      if (modalData.type === 'movie') {
        const resp = await axios.get('/api/allEntertainments?type=movie');
        setWatching(resp.data.watchingMovies);
        setWishlisted(resp.data.wishlistedMovies);
        setCompleted(resp.data.completedMovies);
      } else {
        const resp = await axios.get('/api/allEntertainments?type=anime');
        setWatching(resp.data.watchingAnime);
        setWishlisted(resp.data.wishlistedAnime);
        setCompleted(resp.data.completedAnime);
      }
    } catch (err) {
      toast.error(err.message);
    }
  };
  const updateEntertainment = async () => {
    if (!formData.entertainmentName) {
      toast.error('Check All Values!');
      return;
    }
    try {
      await axios.post('/api/updateEntertainment', { id: modalData.id, formData });
      fetchAll();
      setModalOpen(false);
      toast.success('Entertainment Updated!');
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };
  const onFormChange = (e) => {
    if (e.target.name === 'season' || e.target.name === 'episode') {
      setFormData({ ...formData, [e.target.name]: parseInt(e.target.value, 10) });
      return;
    }
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <section className="text-gray-400 bg-gray-800 body-font mt-0 w-8/12 flex items-center justify-center rounded-2xl">
      <div className="container py-12 w-full mx-0 px-0">
        <div className="flex flex-col text-center w-full mb-12">
          <div className="sm:text-3xl text-2xl font-medium title-font mb-1 text-white flex gap-4 items-center w-full justify-center">
            Update {modalData.type[0].toUpperCase() + modalData.type.slice(1)} <MdLibraryAddCheck />
          </div>
        </div>
        <div className="lg:w-2/3 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="px-2 w-1/3">
              <div className="relative">
                <label htmlFor="type" className="leading-7 text-sm text-gray-400">
                  Type
                </label>
                <select
                  name="type"
                  id="type"
                  className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-blue-500 focus:bg-gray-900 focus:ring-2 focus:ring-blue-900 text-base outline-none text-gray-100 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  onChange={onFormChange}
                  value={formData.type}
                >
                  <option value="movie">Movie / Series</option>
                  <option value="anime">Anime</option>
                </select>
              </div>
            </div>
            <div className="px-2 w-1/3">
              <div className="relative">
                <label htmlFor="season" className="leading-7 text-sm text-gray-400">
                  Season
                </label>
                <input
                  type="number"
                  min="0"
                  value={formData.season}
                  id="season"
                  name="season"
                  className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-blue-500 focus:bg-gray-900 focus:ring-2 focus:ring-blue-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  onChange={onFormChange}
                />
              </div>
            </div>
            <div className="px-2 w-1/3">
              <div className="relative">
                <label htmlFor="episode" className="leading-7 text-sm text-gray-400">
                  Episode
                </label>
                <input
                  type="number"
                  min="0"
                  value={formData.episode}
                  id="episode"
                  name="episode"
                  className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-blue-500 focus:bg-gray-900 focus:ring-2 focus:ring-blue-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  onChange={onFormChange}
                />
              </div>
            </div>
            <div className="px-2 my-4 w-1/3">
              <div className="relative">
                <label htmlFor="category" className="leading-7 text-sm text-gray-400">
                  Category
                </label>
                <select
                  name="category"
                  id="category"
                  value={formData.category}
                  className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-blue-500 focus:bg-gray-900 focus:ring-2 focus:ring-blue-900 text-base outline-none text-gray-100 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  onChange={onFormChange}
                >
                  <option value="wishlist">Add To WishList</option>
                  <option value="watching">Watching</option>
                  <option value="completed">Completed</option>
                </select>
              </div>
            </div>
            <div className="px-2 my-4 w-2/3">
              <div className="relative">
                <label htmlFor="entertainmentName" className="leading-7 text-sm text-gray-400">
                  Entertainment Name
                </label>
                <input
                  id="entertainmentName"
                  name="entertainmentName"
                  value={formData.entertainmentName}
                  className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-blue-500 focus:bg-gray-900 focus:ring-2 focus:ring-blue-900 h-10 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  onChange={onFormChange}
                />
              </div>
            </div>
            <div className="px-2 mb-2 w-full">
              <div className="relative">
                <label htmlFor="link" className="leading-7 text-sm text-gray-400">
                  Link
                </label>
                <input
                  id="link"
                  name="link"
                  value={formData.link}
                  className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-blue-500 focus:bg-gray-900 focus:ring-2 focus:ring-blue-900 h-10 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  onChange={onFormChange}
                />
              </div>
            </div>
            <div className="p-2 px-3 w-full mt-2 flex space-x-2">
              <button
                className="flex w-1/2 text-white bg-red-600 border-0 py-1.5 pb-2 px-8 focus:outline-none hover:bg-red-700 justify-center rounded text-lg font-semibold items-end gap-2"
                onClick={() => {
                  setModalOpen(false);
                }}
              >
                Cancel
                <MdCancel className="mb-[4px]" />
              </button>
              <button
                className="flex w-1/2 text-white bg-green-600 border-0 py-1.5 pb-2 px-8 focus:outline-none hover:bg-green-700 rounded text-lg font-semibold items-end gap-2"
                onClick={() => {
                  updateEntertainment();
                }}
              >
                Update Entertainment
                <MdLibraryAddCheck className="mb-[3px]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Modal;
