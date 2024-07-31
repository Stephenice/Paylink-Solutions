import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import UserDetailCard from "./UserDetailCard";

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
 * Renders a component that displays detailed information about a user.
 *
 * @return {JSX.Element} The rendered component.
 */
const UserDetail: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);


  /**
 * Fetches user data from the server and updates the state accordingly.
 *
 * @return {Promise<void>} A Promise that resolves when the user data is fetched and the state is updated.
 */
  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `http://localhost:3000/user/${userId}`
        );
        setUser(response.data);
        console.log(response.data);
        setLoading(false);
      } catch (error) {
        setError(`Error fetching user data ${error}`);
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {!loading && !error && user && (
        <>
          <UserDetailCard user={user} />
        </>
      )}
      {!loading && !error && !user && <div>User not found</div>}
    </div>
  );
};

export default UserDetail;
