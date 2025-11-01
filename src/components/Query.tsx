import { useQuery } from "@tanstack/react-query";

const Query = () => {
  const { isPending, error, data, refetch, isFetching } = useQuery({
    queryKey: ["repoData"],
    queryFn: (): Promise<any> =>
      fetch("https://jsonplaceholder.typicode.com/users").then(
        (res): Promise<any> => res.json()
      ),
  });

  // if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="bg-black/60 flex items-center justify-center h-dvh flex-col gap-2">
      <h1 className="text-2xl">รายชื่อผู้ใช้</h1>

      {isPending
        ? "Loading..."
        : data.map((user: any) => (
            <div key={user.id} className="flex gap-2 text-xl text-gray-600">
              <h2 className="text-white">คนที่ {user.id}</h2>
              <h2 className="text-purple-300">{user.name}</h2>
              <h2 className="text-green-400">{user.email}</h2>
            </div>
          ))}

      <button
        disabled={isFetching}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:cursor-pointer"
        onClick={() => refetch()}
      >
        {isFetching ? "Loading..." : "Refresh"}
      </button>
    </div>
  );
};
export default Query;
