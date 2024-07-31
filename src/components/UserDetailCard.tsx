import React from "react";

interface User {
  id: number;
  name: string;
  socialMediaHandle: string;
  profileImgSrc: string;
  bio: string;
  location: string;
  website: string;
}


/**
 * Renders a user detail card component.
 *
 * @param {Object} props - The component props.
 * @param {User} props.user - The user object containing user details.
 * @return {JSX.Element} The rendered user detail card component.
 */
const UserDetailCard: React.FC<{ user: User }> = ({ user }) => {
  const { name, socialMediaHandle, profileImgSrc, bio, location, website } =
    user;

  return (
    <div>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-xs md:min-w-[48rem] mx-auto flex flex-col md:flex-row">
        <div className="bg-custom-blue h-24 md:h-auto md:w-[50.333333%] flex justify-center items-center relative md:flex md:items-center md:justify-end">
          <img
            className="h-24 w-24 md:h-36 md:w-36 rounded-full border border-white absolute top-12 left-1/2 transform -translate-x-1/2 md:top-1/2 md:transform md:-translate-y-1/2 md:-translate-x-[-30px]"
            src={profileImgSrc}
            alt={name}
          />
        </div>
        <div className="pt-16 p-6 md:p-8 text-center md:text-center flex flex-col items-center  md:justify-center md:ml-[40px] md:w-[78%] testv">
          <h2 className="text-2xl md:text-3xl font-bold">{name}</h2>
          <p className="text-gray-600">{socialMediaHandle}</p>
          <p className="mt-4 text-gray-700 md:ml-10">{bio}</p>
          <p className="mt-2 text-gray-500">{location}</p>
          <a className="text-blue-500 mt-2 block" href={website}>
            {website}
          </a>
          <div className="mt-4 flex flex-col md:flex-row justify-center md:justify-start">
            <button className="bg-customPurple text-white rounded-full md:px-6 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 px-10 py-2 w-[205px] h-[40px]">
              View CV
            </button>
            <button className="bg-customPurple text-white rounded-full md:px-6 mt-2 md:mt-0 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 px-10 py-2 w-[205px] h-[40px] md:ml-[60px]">
              Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailCard;
