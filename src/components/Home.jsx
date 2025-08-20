import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Home() {
  const [UserName, setUserName] = useState("");

  const Navigate = useNavigate();

  const keyPress = (e) => {
    if (e.key === "Enter") {
      Navigate(`/profiles/${UserName}`);
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center bg-[#2b2b2b] p-12 border-2 border-[#464646] rounded-2xl">
        <p className="mb-3 font-bold text-3xl">Search your Github Profile</p>
        <div className="flex justify-center items-center">
          <input
            type="text"
            placeholder="Enter a Github Username"
            value={UserName}
            onChange={(e) => setUserName(e.target.value)}
            onKeyDown={keyPress}
            className="text-black bg-white text-[1.1rem] w-86 px-4 py-2 rounded-4xl outline-0"
          />
          <NavLink
            to={`/profiles/${UserName}`}
            className="ml-1 p-3  bg-white rounded-4xl"
          >
            <img src="./src/assets/search.svg" alt="Search" />
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Home;
