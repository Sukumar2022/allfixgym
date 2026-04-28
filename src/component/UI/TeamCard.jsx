import React from "react";

const TeamCard = ({img, name, role}) => {
  return (
    <>
      <div className="w-auto h-auto bg-[#192124] rounded-lg flex flex-col items-center justify-center gap-4 p-6">
        <img
          src={img}
          alt={name}
          className="md:h-100 md:w-80"
        />
        <div className="flex flex-col items-center justify-center gap-2">
          <p className="text-gray-500 text-center w-70 text-2xl">
            {role}
          </p>
          <h2 className="text-white text-3xl font-semibold">{name}</h2>
        </div>
      </div>
    </>
  );
};

export default TeamCard;
