import React from 'react';
import Person from './Person';

function RecentMessage() {
  return (
    <div className="w-fit rounded-md flex p-6 gap-y-6 flex-col shadow-md items-start">
      <b className="font-PT font-semibold text-xl text-dashboard-charcoal">Recent Messages</b>
      <div className="flex flex-col gap-y-4 mt-5 self-start justify-self-start">
        <Person
          image="https://cdn.pixabay.com/photo/2018/01/13/19/39/fashion-3080644__480.jpg"
          name="John Smith"
          email={'john@gmail.com'}
          color={'bg-dashboard_purple'}
          pos={false}
        />
        <Person
          image="https://cdn.pixabay.com/photo/2018/01/13/19/39/fashion-3080644__480.jpg"
          name="John Smith"
          email={'john@gmail.com'}
          color={'bg-dashboard_purple'}
          pos={false}
        />
        <Person
          image="https://cdn.pixabay.com/photo/2018/01/13/19/39/fashion-3080644__480.jpg"
          name="John Smith"
          email={'john@gmail.com'}
          color={'bg-dashboard_purple'}
          pos={false}
        />
      </div>
      <button className="py-4 px-10 flex-1 text-lg font-semibold bg-slate-200 text-slate-600">
        Start Conversation
      </button>
    </div>
  );
}

export default RecentMessage;
