import React from 'react';
import PropTypes from 'prop-types';

function TableBody({ name, image, comment }) {
  return (
    <tr className="border-b-2 hover:bg-slate-200 hover:cursor-pointer px-4 border-gray-100">
      <td>
        <div className="flex flex-1 justify-center items-center gap-x-3">
          <img src={image} className="block w-12 h-12 rounded-full" />
          <p className="text-lg text-gray-600 font-semibold ">{name}</p>
        </div>
      </td>
      <td>
        <p className="text-md text-gray-500 ">{comment}</p>
      </td>
    </tr>
  );
}

TableBody.propTypes = {
  comment: PropTypes.node.isRequired,
  image: PropTypes.node.isRequired,
  name: PropTypes.node.isRequired
};

export default TableBody;
