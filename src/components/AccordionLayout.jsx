import React from 'react';

import { BsFillArrowDownCircleFill, BsFillArrowUpCircleFill } from 'react-icons/bs';

const AccordionLayout = ({ title, children, index, activeIndex, setActiveIndex }) => {
  const handleSetIndex = (index) => (activeIndex !== index ? setActiveIndex(index) : setActiveIndex(0));
  return (
    <>
      <div onClick={() => handleSetIndex(index)} className="flex w-11/12 justify-between p-3 px-6 mt-3 rounded bg-gray-600 shadow-md">
        <div className="flex">
          <div className="text-white font-semibold text-xl">{title.toUpperCase()}</div>
        </div>
        <div className="flex items-center justify-center">{activeIndex === index ? <BsFillArrowUpCircleFill className="w-8 h-8" /> : <BsFillArrowDownCircleFill className="w-8 h-8" />}</div>
      </div>
      {activeIndex === index && <div className="shadow-white rounded-b-md p-4 mb-1 bg-white text-black w-11/12">{children}</div>}
    </>
  );
};

export default AccordionLayout;
