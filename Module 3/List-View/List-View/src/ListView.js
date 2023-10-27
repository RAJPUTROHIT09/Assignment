import React from 'react';

const ListView = ({ items }) => {
  return (
    <ul>
      {/* Using Maping for list view  */}
      {items.map((items) => (
        <li color='blue'>{items}</li>
      ))}
    </ul>
  );
};

export default ListView;
