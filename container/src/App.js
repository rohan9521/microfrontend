import React from 'react';
import MarketngApp from './components/MarketingApp';
export const App = () => {
  console.log("Production Domain:", process.env.PRODUCTION_DOMAIN);
  return (
    <>
      <div>Container</div>
      <MarketngApp />
    </>
  );
};
