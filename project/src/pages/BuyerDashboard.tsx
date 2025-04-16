// src/pages/BuyerDashboard.tsx

const BuyerDashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome, Buyer!</h1>
      <p>Here you can view properties near your location.</p>
      {/* TODO: Fetch nearby properties based on user location */}
    </div>
  );
};

export default BuyerDashboard;