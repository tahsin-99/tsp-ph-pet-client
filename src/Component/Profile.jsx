import React, { useContext } from "react";
import userlogo from "../assets/user.png";
import { AuthContext } from "../Auth/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center pt-28 px-4">
      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        
        {/* Profile Image */}
        <div className="flex justify-center mt-6">
          <img
            src={
              user?.photoURL && user.photoURL.startsWith("http")
                ? user.photoURL
                : userlogo
            }
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-primary"
          />
        </div>

        {/* Profile Info */}
        <div className="card-body text-center">
          <h2 className="text-2xl font-bold">
            {user?.displayName || "User Name"}
          </h2>
          <p className="text-gray-500">{user?.email}</p>

          <div className="divider"></div>

          <div className="space-y-2 text-left">
            <p>
              <span className="font-semibold">Account Created:</span>{" "}
              {user?.metadata?.creationTime}
            </p>
            <p>
              <span className="font-semibold">Last Login:</span>{" "}
              {user?.metadata?.lastSignInTime}
            </p>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default Profile;
