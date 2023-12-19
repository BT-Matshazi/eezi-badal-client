import { useContext } from "react";
import { UserContext } from "../../context/userContext"

export default function Home() {
  const { user }  = useContext(UserContext);

  return (
    <div className="flex flex-col text-center m-auto w-full justify-center align-middle h-screen">
      <h1>Home</h1>
      <p>Welcome {user?.email}</p>
    </div>
  );
}
