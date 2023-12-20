import { useContext } from "react";
import { UserContext } from "../lib/context/userContext";

export default  function Home() {
  const { user } =  useContext(UserContext);

  console.log(user);

  return (
    <div className="flex flex-col text-center m-auto w-full justify-center align-middle h-screen">
      <h1>Home</h1>
      <p>Welcome {user?.email}</p>
    </div>
  );
}
