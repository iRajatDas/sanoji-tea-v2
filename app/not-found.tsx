import React from "react";

const Error = () => {
  return (
    <div>
      <div className="grid items-center px-4 pt-4 place-items-center relative h-[calc(100vh_-_65px)]">
        <div className="text-center space-y-2 xl:text-2xl">
          <h1 className="text-4xl xl:text-7xl font-extrabold">404 Not Found</h1>
          <p>The page you&apos;are looking for does not exists or deleted.</p>
        </div>
      </div>
    </div>
  );
};

export default Error;
