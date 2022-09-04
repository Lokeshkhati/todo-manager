import React from "react";

const User = () => {
  return (
    <div className="flex justify-around items-center p-4 border-b  border-gray-300">
      <div>
        <h1 className="text-lg font-bold ">LOGO</h1>
      </div>
      <div>
        <p>LOKESH Khati</p>
        <a className="flex justify-end" href="#">
          Logout
        </a>
      </div>
    </div>
  );
};

export default User;
