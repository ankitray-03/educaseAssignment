import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="p-4 mt-[90%]">
      <div className="welcomebox w-[75%]">
        <h1 className="font-bold text-2xl">Welcome to PopX</h1>
        <p className="mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
          officia?
        </p>
      </div>
      <Link to="/signup">
        <button className="p-2 mt-3 w-[90%] bg-[#6c25ff] text-white rounded-md font-semibold">
          Create Account
        </button>
      </Link>
      <Link to="/signin">
        <button className="p-2 mt-3 w-[90%] bg-[#cebafb] text-black rounded-md font-semibold">
          Already Registered? Login
        </button>
      </Link>
    </div>
  );
}

export default Home;
