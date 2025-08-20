function RepoCard({ repo }) {
  return (
    <>
      <div className="bg-[#19191a] p-4 rounded-2xl shadow">
        <h4 className="text-lg font-semibold">{repo.name}</h4>
        <p className="text-gray-400 text-sm mt-1">{repo.description}</p>
        <div className="flex justify-between items-center mt-3 text-sm text-gray-500">
          <span className="px-2 py-1 bg-white text-black rounded">
            {repo.language}
          </span>
          <span className="text-gray-400">
            {new Date(repo.updated_at).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </span>
        </div>
      </div>
    </>
  );
}

export default RepoCard;
