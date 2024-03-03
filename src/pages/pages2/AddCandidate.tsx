import React from "react";

const AddCandidate: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <p>Already have an account? <a href="/login" className="text-blue-500">Login</a></p>
    </div>
  );
};

export default AddCandidate;
