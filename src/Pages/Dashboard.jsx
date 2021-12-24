import React from 'react';
import LatestComment from '../Components/LatestComment';
import Person from '../Components/Person';
import Profile_card from '../Components/Profile_card';
import RecentMessage from '../Components/RecentMessage';

function Dashboard() {
  return (
    <div>
      <Profile_card
        logo={<i className="text-lg bg-cover text-white fa fa-eye" aria-hidden="true"></i>}
        text="Profile Views"
        number={112.0}
        color={'bg-dashboard_purple'}
      />
      <Profile_card
        logo={<i className="text-lg bg-cover text-white fa fa-user" aria-hidden="true"></i>}
        text="Followers"
        number={183.0}
        color={'bg-dashboard_green'}
      />

      <Person
        image="https://cdn.pixabay.com/photo/2018/01/13/19/39/fashion-3080644__480.jpg"
        name="John Smith"
        email={'john@gmail.com'}
        color={'bg-dashboard_purple'}
        pos={true}
      />

      <RecentMessage />
      <LatestComment />
    </div>
  );
}

export default Dashboard;
