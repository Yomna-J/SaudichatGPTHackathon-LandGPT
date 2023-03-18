import { useNavigate } from "react-router-dom";
import { default as logo } from "../../assets/logo.svg";
const Splash = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen w-full flex-col items-center gap-[10rem] bg-gradient-to-br from-primary to-lightGray p-5">
      <div className="flex items-center gap-3 self-start">
        <img src={logo} className="w-[4rem]" />
        <h1 className="font-lato my-3 text-center text-3xl font-bold text-white">
          LandGPT
        </h1>
      </div>

      <div className="flex flex-col items-center justify-center gap-12 ">
        <h1 className="font-lato text-9xl font-bold text-white">HELLO!</h1>
        <p className="font-lato w-[60%] text-center text-2xl text-white">
          Get started with online marketing quickly and easily with LandGPT. Our
          intuitive platform allows you to create personalized landing pages and
          brand identities without any hassle. We empower individuals and
          businesses with a user-friendly experience to showcase their products
          and services.
        </p>
        <button
          className="font-lato rounded-full bg-primary px-12 py-4 text-lg font-bold text-white"
          onClick={() => {
            navigate("/home");
          }}
        >
          TRY NOW
        </button>
      </div>
    </div>
  );
};

export default Splash;
