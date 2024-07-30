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

const UserDetail: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
