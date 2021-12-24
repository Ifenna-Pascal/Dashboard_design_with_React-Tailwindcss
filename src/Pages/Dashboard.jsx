import React from 'react';
import Profile_card from '../Components/Profile_card';

function Dashboard() {
  return (
    <div>
      <Profile_card
        logo={<i className="text-lg text-white fa fa-eye" aria-hidden="true"></i>}
        text="Profile Views"
        number={112.0}
        color={'bg-dashboard_purple'}
      />
      <Profile_card
        logo={<i className="text-lg text-white fa fa-user" aria-hidden="true"></i>}
        text="Followers"
        number={183.0}
        color={'bg-dashboard_blue'}
      />
    </div>
  );
}

export default Dashboard;
