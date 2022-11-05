import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { MdLibraryAddCheck } from 'react-icons/md';
import axios from 'axios';

const Form = () => {
  const [formData, setFormData] = useState({
    type: 'movie',
    season: 0,
    episode: 0,
    category: 'wishlist',
    entertainmentName: '',
    link: '',
  });
  const addEntertainment = async () => {
    if (!formData.entertainmentName) {
      toast.error('Check All Values!');
      return;
    }
    try {
      await axios.post('/api/addEntertainment', { formData });
      setFormData({
        type: 'movie',
        season: 0,
        episode: 0,
        category: 'wishlist',
        entertainmentName: '',
        link: '',
      });
      toast.success('Entertainment Added!');
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
    <section className="text-gray-400 bg-gray-900 body-font mt-11 w-full flex items-center justify-center">
      <div className="container py-12 w-full mx-0 px-0">
        <div className="flex flex-col text-center w-full mb-12">
          <div className="sm:text-3xl text-2xl font-medium title-font mb-1 text-white flex gap-4 items-center w-full justify-center">
            Add Entertainment <MdLibraryAddCheck />
          </div>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="px-2 w-1/3">
              <div className="relative">
                <label htmlFor="type" className="leading-7 text-sm text-gray-400">
                  Type <span className="text-red-500">*</span>
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
                  Category <span className="text-red-500">*</span>
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
                  Entertainment Name <span className="text-red-500">*</span>
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
            <div className="p-2 w-full mt-2">
              <button
                className="flex mx-auto text-white bg-blue-600 border-0 py-1.5 pb-2 px-8 focus:outline-none hover:bg-blue-700 rounded text-lg font-semibold items-end gap-2"
                onClick={() => {
                  addEntertainment();
                }}
              >
                Add Entertainment
                <MdLibraryAddCheck className="mb-[3px]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
