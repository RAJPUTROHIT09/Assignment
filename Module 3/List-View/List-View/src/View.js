import React from 'react';
import ListView from './ListView';

const App2 = () => {
  const items = ['Use Array.map', 'Not a for loop', 'Give each item a unique key', 'Avoid Using Array Index as Key'];

  return (
    <div>
      <h1>The "React Way" to Render a List</h1>
      <ListView items={items} />
    </div>
  );
};

export default App2;
