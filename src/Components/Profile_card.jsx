import React from 'react';
import PropTypes from 'prop-types';

function Profile_card({ text, number, logo, color }) {
  return (
    <div className="flex w-64 mx-auto my-4 flex-col py-6 items-center shadow-md rounded-md">
      <div className="max-w-fit max-auto flex flex-1 gap-x-5">
        <div className={`rounded-md p-4 ${color} shrink-0 justify-self-center `}>{logo}</div>
        <div>
          <p className="text-md font-Poppins text-gray-500">{text}</p>
          <b className="text-lg text-dashboard-charcoal">{number}</b>
        </div>
      </div>
    </div>
  );
}

Profile_card.propTypes = {
  text: PropTypes.node.isRequired,
  number: PropTypes.node.isRequired,
  logo: PropTypes.node.isRequired,
  color: PropTypes.node.isRequired
};

export default Profile_card;
