import React from 'react';

const App = () => {
  return (
    <div className="app-container">
      <h1>Cooking App</h1>
      <input type="text" placeholder="Tapez le nom d'un aliment"/>
      <div className="cooking-container"></div>
    </div>
  );
};

export default App;