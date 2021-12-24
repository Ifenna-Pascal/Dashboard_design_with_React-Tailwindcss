import React from 'react';
import TableBody from './TableBody';

function LatestComment() {
  return (
    <div className="bg-white px-5 py-6 flex flex-col items-start">
      <b className="font-PT font-semibold text-xl mb-5 font-semibold text-dashboard-charcoal">
        {' '}
        Latest Comment
      </b>
      <table className="mx-4 mt-3">
        <thead className="py-3">
          <th>Name</th>
          <th>Comment</th>
        </thead>
        <tbody>
          <TableBody
            name="Ifenna"
            comment="Congratulations on your graduation!"
            image="https://cdn.pixabay.com/photo/2018/01/13/19/39/fashion-3080644__480.jpg"
          />
          <TableBody
            name="Ifenna"
            comment="!Wow amazing design! Can you make another tutorial for this design?"
            image="https://cdn.pixabay.com/photo/2018/01/13/19/39/fashion-3080644__480.jpg"
          />
          <TableBody
            name="Ifenna"
            comment="Congratulations on your graduation!"
            image="https://cdn.pixabay.com/photo/2018/01/13/19/39/fashion-3080644__480.jpg"
          />
        </tbody>
      </table>
    </div>
  );
}

export default LatestComment;
