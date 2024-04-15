import { Link } from "react-router-dom";

function Signin() {
  return (
    <div className="p-5 mt-8">
      <div className="w-[57%]">
        <h1 className="font-bold text-2xl">Signin to your PopX account</h1>
        <p className="mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <label
        htmlFor="email"
        className="text-[#6c25ff] font-semibold relative top-[18px] left-[8px] bg-white"
      >
        Email Address
      </label>
      <input
        className="border-2 rounded my-2 p-2 w-[90%]"
        placeholder="Enter email address"
        id="email"
      ></input>
      <label
        htmlFor="Password"
        className="text-[#6c25ff] font-semibold relative top-[22px] left-[8px] bg-white"
      >
        Password
      </label>
      <input
        placeholder="Enter password"
        className="my-3 border-2 rounded p-2 w-[90%]"
        id="Password"
      ></input>

      <Link to="/account-settings">
        <button className="p-2 mt-3 w-[90%] bg-[#cbcbcb] text-white rounded-md font-semibold">
          Login
        </button>
      </Link>
    </div>
  );
}

export default Signin;
