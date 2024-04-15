import { IoCameraSharp } from "react-icons/io5";

function AccountSettings() {
  return (
    <>
      <h1 className="text-2xl p-4 bg-white">Account Settings</h1>

      <div className="setting-container">
        <img
          src="https://tse4.mm.bing.net/th?id=OIP.y-R6b74yIBCpAOfYIBVQpAHaLH&pid=Api&P=0&h=180"
          alt="profile-pic"
          className="m-6"
        ></img>
        <div className="camera_icon_box relative left-[80px] bottom-[55px] rounded-full bg-[#6c25ff]">
          {" "}
          <IoCameraSharp className="camera_icon w-[20px] h-[20px] relative left-[5px] top-1 bg-[#6c25ff]" />
        </div>
        <div className="float-right relative bottom-[130px] right-[120px]">
          <h3 className="font-bold text-1xl">Marry Doe</h3>
          <h4>Marry@gmail.com</h4>
        </div>

        <p className="w-[100%] px-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
          officiis fugiat quasi tempore ea ratione! Explicabo consequuntur quia
          nobis quasi.
        </p>

        <hr className="relative top-[450px]"></hr>
      </div>
    </>
  );
}

export default AccountSettings;
