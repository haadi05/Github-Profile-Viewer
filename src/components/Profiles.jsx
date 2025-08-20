import { NavLink } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import RepoCard from "./RepoCard";

function Profiles() {
  const { user, repos } = useLoaderData();

  return (
    <div className="h-screen bg-[#19191a] p-6 flex gap-6 text-white">
      {/* Left Sidebar */}
      <div className="bg-[#2b2b2b] border-2 border-[#464646] p-6 rounded-2xl shadow">
        <div className="flex flex-col items-center">
          {/* Profile Image */}
          <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
            <img
              src={user.avatar_url}
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-xl font-semibold">{user.name}</h2>
          <p className="text-gray-400">{user.login}</p>
          <p className="mt-2 text-gray-300 text-center">{user.bio}</p>
        </div>

        {/* Info */}
        <div className="mt-6 space-y-3 text-gray-300">
          <p>
            <span className="font-semibold text-white">Twitter: </span>
            {user.twitter_username}
          </p>
          <p>
            <span className="font-semibold text-white">Following:</span>{" "}
            {user.following}
          </p>
          <p>
            <span className="font-semibold text-white">Followers:</span>{" "}
            {user.followers}
          </p>
          <p>
            <span className="font-semibold text-white">Repos:</span>{" "}
            {user.public_repos}
          </p>
          <p className="text-sm text-gray-500">
            GitHub member since {new Date(user.created_at).getFullYear()}
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className=" flex flex-col space-y-6 p-6 rounded-2xl bg-[#2b2b2b] border-2 border-[#464646]">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Public Repositories</h3>
          <NavLink className="p-2 rounded-3xl hover:bg-[#585858]" to={"/"}>
            <img className="h-6" src="./src/assets/home.svg" alt="Home" />
          </NavLink>
        </div>

        {/* Repository Card */}

        <div className="grid h-screen overflow-y-auto gap-4">
          {repos.map((repo) => (
            <RepoCard key={repo.id} repo={repo} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Profiles;

// export const githubResponse = async () => {
//   const res = await fetch("https://api.github.com/users/haadi05");
//   return res.json();
// };
