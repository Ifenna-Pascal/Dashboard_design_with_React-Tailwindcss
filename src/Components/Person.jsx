import React from 'react';
import PropTypes from 'prop-types';

function Person({ name, image, email, pos }) {
  return (
    <div
      className={`flex w-64 ${pos && 'items-center'} flex-col ${
        pos ? 'py-6' : 'py-2'
      } bg-white rounded-md`}>
      <div className="max-w-fit max-auto flex flex-1 gap-x-5">
        <img src={image} className="block w-16 h-16 rounded-full" />
        <div>
          <b className="font-PT font-semibold text-xl font-medium text-dashboard-charcoal">
            {name}
          </b>
          <p className="text-md text-gray-500 ">{email}</p>
        </div>
      </div>
    </div>
  );
}

Person.propTypes = {
  name: PropTypes.node.isRequired,
  image: PropTypes.node.isRequired,
  email: PropTypes.node.isRequired,
  pos: PropTypes.bool
};

export default Person;
