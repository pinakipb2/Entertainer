import React, { useState } from 'react';
import { FiExternalLink } from 'react-icons/fi';
import Modal from './Modal';
import { FaEdit } from 'react-icons/fa';

const Table = ({ data, setWatching, setWishlisted, setCompleted }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState([]);
  return (
    <div className="flex flex-col pb-1">
      <div className="overflow-x-auto -mx-2">
        <div className="py-2 inline-block min-w-full px-4">
          <div className="overflow-hidden text-center">
            {data.length > 0 ? (
              <table className="min-w-full">
                <thead className="border-b font-bold">
                  <tr className="w-full">
                    <th scope="col" className="text-sm text-gray-900 px-6 py-3">
                      #
                    </th>
                    <th scope="col" className="text-sm text-gray-900 px-6 py-3">
                      Entertainment Name
                    </th>
                    <th scope="col" className="text-sm text-gray-900 px-6 py-3">
                      Season
                    </th>
                    <th scope="col" className="text-sm text-gray-900 px-6 py-3">
                      Episode
                    </th>
                    <th scope="col" className="text-sm text-gray-900 px-6 py-3">
                      Created At
                    </th>
                    <th scope="col" className="text-sm text-gray-900 px-6 py-3">
                      Updated At
                    </th>
                    <th scope="col" className="text-sm text-gray-900 px-6 py-3">
                      Link
                    </th>
                    <th scope="col" className="text-sm text-gray-900 px-6 py-3">
                      Update
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((r, idx) => (
                    <tr className="border-b text-gray-600" key={r.id}>
                      <td className="px-6 py-3 whitespace-nowrap text-sm font-medium">{idx + 1}</td>
                      <td className="text-sm font-light px-3 py-3 whitespace-nowrap">{r.entertainmentName}</td>
                      <td className="text-sm font-light px-6 py-3 whitespace-nowrap">{r.season}</td>
                      <td className="text-sm font-light px-6 py-3 whitespace-nowrap">{r.episode}</td>
                      <td className="text-sm font-light px-6 py-3 whitespace-nowrap">{new Date(r.createdAt).toLocaleString('hi')}</td>
                      <td className="text-sm font-light px-6 py-3 whitespace-nowrap">{new Date(r.updatedAt).toLocaleString('hi')}</td>
                      <td className={`text-sm font-light px-6 py-3 whitespace-nowrap ${r.link !== '' ? 'hover:cursor-pointer text-gray-900' : 'hover:cursor-not-allowed text-gray-400'}`}>
                        {r.link === '' ? (
                          <FiExternalLink size={20} />
                        ) : (
                          <a href={r.link} target="_blank" rel="noopener noreferrer">
                            <FiExternalLink size={20} />
                          </a>
                        )}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-3 whitespace-nowrap">
                        <button
                          className="bg-red-600 hover:bg-red-700 text-white p-2 rounded"
                          onClick={() => {
                            setModalOpen(true);
                            setModalData(data[idx]);
                          }}
                        >
                          <FaEdit />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="text-2xl font-semibold text-gray-500">No Entertainment Found</div>
            )}
          </div>
        </div>
      </div>
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
          <Modal
            setModalOpen={setModalOpen}
            modalData={modalData}
            key={modalData.id}
            setWatching={setWatching}
            setWishlisted={setWishlisted}
            setCompleted={setCompleted}
          />
        </div>
      )}
    </div>
  );
};

export default Table;
