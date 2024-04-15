import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="p-5 mt-8">
      <div className="w-[57%] mb-3">
        <h1 className="font-bold text-3xl">Create your PopX account</h1>
      </div>
      <form>
        <label
          htmlFor="fullName"
          className="text-[#6c25ff] font-semibold relative top-[18px] left-[8px] bg-[#f7f8f9]"
        >
          Full Name <span className="text-[#FF0000]">*</span>
        </label>
        <input
          className="border-2 rounded mt-2 p-2 w-[95%] "
          placeholder="Enter email address"
          id="fullName"
          required
          value="Marry Doe"
        ></input>
        <label
          htmlFor="PhoneNumber"
          className="text-[#6c25ff] font-semibold relative top-[22px] left-[8px] bg-[#f7f8f9]"
        >
          Phone Number<span className="text-[#FF0000]">*</span>
        </label>
        <input
          placeholder="Enter password"
          className="mt-3 border-2 rounded p-2 w-[95%]"
          id="PhoneNumber"
          required
          value="Marry Doe"
        ></input>

        <label
          htmlFor="email"
          className="text-[#6c25ff] font-semibold relative top-[22px] left-[8px] bg-[#f7f8f9]"
        >
          Email Address<span className="text-[#FF0000]">*</span>
        </label>
        <input
          placeholder="Enter password"
          className="mt-3 border-2 rounded p-2 w-[95%]"
          id="email"
          required
          value="Marry Doe"
        ></input>

        <label
          htmlFor="Password"
          className="text-[#6c25ff] font-semibold relative top-[22px] left-[8px] bg-[#f7f8f9]"
        >
          Password<span className="text-[#FF0000]">*</span>
        </label>
        <input
          placeholder="Enter password"
          className="mt-3 border-2 rounded p-2 w-[95%]"
          id="Password"
          required
          value="Marry Doe"
        ></input>

        <label
          htmlFor="CompanyName"
          className="text-[#6c25ff] font-semibold relative top-[22px] left-[8px] bg-[#f7f8f9]"
        >
          Company Name
        </label>
        <input
          placeholder="Enter password"
          className="my-3 border-2 rounded p-2 w-[95%]"
          id="CompanyName"
          value="Marry Doe"
        ></input>

        <fieldset>
          <legend className="mb-2">Are you an agency?</legend>
          <input
            type="radio"
            id="yes"
            checked
            className="radioInput"
            name="agency"
          />
          <label htmlFor="yes" className="mx-2">
            Yes
          </label>

          <input
            type="radio"
            id="no"
            className="ml-3 radioInput"
            name="agency"
          />
          <label htmlFor="no" className="mx-2">
            No
          </label>
        </fieldset>

        <Link to="/account-settings">
          <button className="p-2 mt-[10%] w-[95%] bg-[#6c25ff] text-white rounded-md font-semibold">
            Create Account
          </button>
        </Link>
      </form>
    </div>
  );
}

export default Signup;
