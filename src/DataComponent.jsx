import React, { useState } from 'react';

function DataComponent() {
  const [data, setData] = useState('');

  const fetchData = async () => {
    try {
      const response = await fetch('https://chatapp-lb5g.onrender.com/data');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h1>Data from Backend</h1>
      <button onClick={fetchData}>Fetch Data</button>
      <p> Here data will render--{data}</p>
    </div>
  );
}

export default DataComponent;
