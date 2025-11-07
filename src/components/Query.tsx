import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

const Query = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const queryClient = useQueryClient();

  // ✅ GET Users
  const { data, isPending, error, refetch, isFetching } = useQuery({
    queryKey: ["repoData"],
    queryFn: async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      return res.data;
    },
  });

  // ✅ POST User
  const mutation = useMutation({
    mutationFn: (newUser: { name: string; email: string }) =>
      axios.post("https://jsonplaceholder.typicode.com/users", newUser),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey:["repoData"]});
      setEmail("");
      setName(""); // รีเซ็ต input
      console.log("New user is",email,name)
    },
  });

  const handleAddUser = (e: React.MouseEvent<HTMLButtonElement>) => {
    // e.preventDefault();
    mutation.mutate({ name, email });
    
  };

  if (error) return "An error has occurred: " + JSON.stringify(error);

  return (
    <div className="bg-black/60 flex items-center justify-center h-dvh flex-col gap-2">

      <input type="text" placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border border-white text-white px-4 py-2"
      />

      <input type="text" placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border border-white text-white px-4 py-2"
      />

      <button
        onClick={handleAddUser}
        disabled={mutation.isPending}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:cursor-pointer"
      >
        {mutation.isPending ? "Sending..." : "Add"}
      </button>

      <h1 className="text-2xl text-white">รายชื่อผู้ใช้</h1>

      {isPending
        ? "Loading..."
        : data?.map((user: any) => (
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
