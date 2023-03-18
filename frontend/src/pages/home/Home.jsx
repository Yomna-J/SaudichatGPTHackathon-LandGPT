import { useFormik } from "formik";
import { formSchema } from "../../schemas";
import { default as logo } from "../../assets/logo.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Home = () => {
  const [res, setRes] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();


  const onSubmit = async (values, actions) => {
    
    try {
   await callChatGPT(
    `Create a landing page using react and tailwindcss called ${values.title} and the description of it is: ${values.description}. return all the code and no other text. and make all of the sections under the same LandingPage component. don't import tailwindcss and don't use style components ONLY TAILWINDCSS CLASSES. Also add dummy details to create a motivating website and with a great style`
      ).then(()=>{
        setIsLoading(true);
        if(res){
          actions.resetForm();
          setIsLoading(false);

        }
      })
  
      } catch (error) { 
    console.log(error);
    }
  };



   const callChatGPT = async (message) => {
    console.log("hellooo");
    var myHeaders = new Headers();

    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Access-Control-Allow-Origin", "http://localhost:3000");
    myHeaders.append(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    myHeaders.append("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    myHeaders.append("customer-id", "DEPRECATED");
    myHeaders.append("x-api-key", "DEPRECATED");

    var requestBody = JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: message,
        },
      ],
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: requestBody,
      redirect: "follow",
    };

    fetch(
      "https://experimental.willow.vectara.io/v1/chat/completions",
      requestOptions
    )
      .then((response) => response.text())
      .then((response) => JSON.parse(response))
      .then((result) => {
        const code = result.choices[0].message.content;
        console.log(code);
        const importIndex = code.indexOf("import");
        const exportIndex = code.indexOf(`export default LandingPage;`);
        const filteredCode =
          code.slice(importIndex, exportIndex) + 'export default LandingPage;';
        console.log("ress", filteredCode);
        setRes(filteredCode);
        download(filteredCode, `LandingPage.jsx`, "text/plain;charset=utf-8");
         generateComponent();
      })
      .catch((error) => console.log("error", error));
  };

  const generateComponent = async () => {
    try {
      const response = await fetch(`http://localhost:5001/generate`);
      const data = await response.text();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  function download(content, fileName, contentType) {
    var a = document.createElement("a");
    var file = new Blob([content], { type: contentType });
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
  }



  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    setFieldError,
    handleSubmit,
  } = useFormik({
    initialValues: {
      title: "",
      description: "",
      slogan: "",
      unfairAdv: "",  
      email: "",
      phone: "",
      about: "",
      instagram: "",
      twitter: "",
      linkedin: "",
      location: "",
      logo: null,
      productPic: null,
      colors: "#000000",
    },
    validationSchema: formSchema,
    onSubmit,
  });

  {
    /*  TODO: form
    
 -product description  
        slogan
        About your prodcut
        logo
        contact:
            - Address
            - Email
            - Phone no.
            - insta, twi, linkedin (optional)

         */
    // TODO: check color position
    // TODO: Add hints
    // TODO: upload images
    // TODO: add functionality to onSubmit
  }

  return (
    <div className="h-screen w-full bg-gradient-to-br from-primary to-lightGray p-2">
      <div className="flex items-center gap-[30%]">
        <div className="flex gap-3">
          <img src={logo} className="w-[3rem] self-start" />
          <h1 className="font-lato my-3 text-center text-2xl font-bold text-white">
            LandGPT
          </h1>
        </div>
        <h1 className="font-lato my-1 text-center text-2xl font-bold text-white">
          Create Your Landing Page
        </h1>
      </div>

      {/* FORM */}
      <form 
      onSubmit={handleSubmit}
      className="m-auto grid w-[75%] grid-cols-2 gap-2 rounded-xl bg-white p-2 shadow-lg md:p-8">
        <div className="col-span-1 ">
          <label htmlFor="title" className="block">
            * Title
          </label>
          <input
            value={values.title}
            onChange={handleChange}
            id="title"
            type="text"
            placeholder="what is your project name"
            onBlur={handleBlur}
            className={`w-full rounded-md border bg-transparent p-1 font-lato ${
              errors.title && touched.title ? "rounded-lg border-red-600" : ""
            }`}
          />
          {errors.title && touched.title && (
            <p className="text-xs text-red-600">{errors.title}</p>
          )}
        </div>
        <div className="col-span-1">
          <label htmlFor="slogan" className="block">
            Slogan
          </label>
          <input
            value={values.slogan}
            onChange={handleChange}
            id="slogan"
            placeholder="Do you have slogan?"
            type="text"
            onBlur={handleBlur}
            className={`w-full rounded-md border bg-transparent p-1 font-lato ${
              errors.slogan && touched.slogan ? "rounded-lg border-red-600" : ""
            }`}
          />
          {errors.slogan && touched.slogan && (
            <p className="text-xs text-red-600">{errors.slogan}</p>
          )}
        </div>
        <div className="col-span-2">
          <label htmlFor="description" className="block">
            * Description
          </label>
          <textarea
            value={values.description}
            onChange={handleChange}
            id="description"
            type="text"
            placeholder="Give me a short description about your product"
            onBlur={handleBlur}
            className={`h-20 w-full rounded-md border bg-transparent p-1 font-lato ${
              errors.description && touched.description
                ? "rounded-lg border-red-600"
                : ""
            }`}
          />
          {errors.description && touched.description && (
            <p className="text-xs text-red-600">{errors.description}</p>
          )}
        </div>
        {/* <div className="col-span-1">
          <label htmlFor="logo" className="block">
            Logo
          </label>
          <input
            value={values.logo}
            onChange={handleChange}
            id="logo"
            type="file"
            onBlur={handleBlur}
            className={`focus:outline-none" relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding py-[0.32rem] px-3 text-base font-normal  transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-primary file:px-3 file:py-[0.32rem] file:text-white file:transition file:duration-150 file:ease-in-out file:[margin-inline-end:0.75rem] file:[border-inline-end-width:1px] hover:file:bg-white hover:file:text-primary focus:border-primary focus:text-primary focus:shadow-[0_0_0_1px] focus:shadow-primary
 ${errors.logo && touched.logo ? "rounded-lg border-red-600" : ""}`}
          />
          {errors.logo && touched.logo && (
            <p className="text-xs text-red-600">{errors.logo}</p>
          )}
        </div>
        <div className="col-span-1">
          <label htmlFor="productPic" className="block">
            Product Picture
          </label>
          <input
            value={values.productPic}
            onChange={handleChange}
            id="productPic"
            type="file"
            onBlur={handleBlur}
            className={`focus:outline-none" relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding py-[0.32rem] px-3 text-base font-normal  transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-primary file:px-3 file:py-[0.32rem] file:text-white file:transition file:duration-150 file:ease-in-out file:[margin-inline-end:0.75rem] file:[border-inline-end-width:1px] hover:file:bg-white hover:file:text-primary focus:border-primary focus:text-primary focus:shadow-[0_0_0_1px] focus:shadow-primary
 ${errors.productPic && touched.productPic ? "rounded-lg border-red-600" : ""}`}
          />
          {errors.productPic && touched.productPic && (
            <p className="text-xs text-red-600">{errors.productPic}</p>
          )}
        </div> */}

        <div className="col-span-1">
          <label htmlFor="unfairAdv" className="block">
            Unfair Advantage
          </label>
          <input
            value={values.unfairAdv}
            onChange={handleChange}
            id="unfairAdv"
            type="text"
            placeholder="What is special about your product? "
            onBlur={handleBlur}
            className={`w-full rounded-md border bg-transparent p-1 font-lato ${
              errors.unfairAdv && touched.unfairAdv ? "rounded-lg border-red-600" : ""
            }`}
          />
          {errors.unfairAdv && touched.unfairAdv && (
            <p className="text-xs text-red-600">{errors.unfairAdv}</p>
          )}
        </div>
        <div className="col-span-1">
          <label htmlFor="vision" className="block">
            Vision
          </label>
          <input
            value={values.vision}
            onChange={handleChange}
            id="vision"
            type="text"
            onBlur={handleBlur}
            placeholder="What is your vision"
            className={`w-full rounded-md border bg-transparent p-1 font-lato ${
              errors.vision && touched.vision ? "rounded-lg border-red-600" : ""
            }`}
          />
          {errors.vision && touched.vision && (
            <p className="text-xs text-red-600">{errors.vision}</p>
          )}
        </div>
        <div className="col-span-1">
          <label htmlFor="email" className="block">
            Email Address
          </label>
          <input
            value={values.email}
            onChange={handleChange}
            id="email"
            type="email"
            placeholder="LandGPT@LanGPT.com"
            onBlur={handleBlur}
            className={`w-full rounded-md border bg-transparent p-1 font-lato ${
              errors.email && touched.email ? "rounded-lg border-red-600" : ""
            }`}
          />
          {errors.email && touched.email && (
            <p className="text-xs text-red-600">{errors.email}</p>
          )}
        </div>
        <div className="col-span-1">
          <label htmlFor="location" className="block">
            Location
          </label>
          <input
            value={values.location}
            onChange={handleChange}
            id="location"
            placeholder="Saudi Arabia, Riyadh"
            type="text"
            onBlur={handleBlur}
            className={`w-full rounded-md border bg-transparent p-1 font-lato ${
              errors.location && touched.location
                ? "rounded-lg border-red-600"
                : ""
            }`}
          />
          {errors.location && touched.location && (
            <p className="text-xs text-red-600">{errors.location}</p>
          )}
        </div>
        <div className="col-span-1">
          <label htmlFor="mobileNumber" className="block">
            Mobile Number
          </label>
          <input
            value={values.mobileNumber}
            onChange={handleChange}
            id="mobileNumber"
            placeholder="05XXXXXXXX"
            type="text"
            onBlur={handleBlur}
            className={`w-full rounded-md border bg-transparent p-1 font-lato ${
              errors.mobileNumber && touched.mobileNumber
                ? "rounded-lg border-red-600"
                : ""
            }`}
          />
          {errors.mobileNumber && touched.mobileNumber && (
            <p className="text-xs text-red-600">{errors.mobileNumber}</p>
          )}
        </div>
        <div className="col-span-1">
          <label htmlFor="linkedin" className="block">
            Linked in
          </label>
          <input
            value={values.linkedin}
            onChange={handleChange}
            id="linkedin"
            type="text"
            placeholder="linkedin acount"
            onBlur={handleBlur}
            className={`w-full rounded-md border bg-transparent p-1 font-lato ${
              errors.linkedin && touched.linkedin
                ? "rounded-lg border-red-600"
                : ""
            }`}
          />
          {errors.linkedin && touched.linkedin && (
            <p className="text-xs text-red-600">{errors.linkedin}</p>
          )}
        </div>
        <div className="col-span-1">
          <label htmlFor="twitter" className="block">
            Twitter
          </label>
          <input
            value={values.twitter}
            onChange={handleChange}
            id="twitter"
            placeholder="twitter acount"
            type="text"
            onBlur={handleBlur}
            className={`w-full rounded-md border bg-transparent p-1 font-lato ${
              errors.twitter && touched.twitter
                ? "rounded-lg border-red-600"
                : ""
            }`}
          />
          {errors.twitter && touched.twitter && (
            <p className="text-xs text-red-600">{errors.twitter}</p>
          )}
        </div>
        <div className="col-span-1">
          <label htmlFor="instagram" className="block">
            Instagram
          </label>
          <input
            value={values.c}
            onChange={handleChange}
            id="c"
            type="text"
            placeholder="instgram acount"
            onBlur={handleBlur}
            className={`w-full rounded-md border bg-transparent p-1 font-lato ${
              errors.instagram && touched.instagram
                ? "rounded-lg border-red-600"
                : ""
            }`}
          />
          {errors.instagram && touched.instagram && (
            <p className="text-xs text-red-600">{errors.instagram}</p>
          )}
        </div>

        <div className="col-span-2 flex w-full flex-col items-center justify-between  ">
          <hr className="mx-auto my-2 h-[.12rem] w-full rounded border-0 bg-lightGray" />
          <label className="mb-4">Choose your website colors combination</label>
          <div className="flex items-center justify-center gap-5 text-center">
            <div className="">
              <label htmlFor="primaryColor" className="block">
                Primary
              </label>
              <input
                value={values.primaryColor}
                onChange={handleChange}
                id="primaryColor"
                type="color"
                onBlur={handleBlur}
                className={`h-8 w-8 appearance-none border-none bg-transparent ${
                  errors.primaryColor && touched.primaryColor
                    ? "rounded-lg border-red-600"
                    : ""
                }`}
              />
              {errors.primaryColor && touched.primaryColor && (
                <p className="text-xs text-red-600">{errors.c}</p>
              )}
            </div>
            <div className="col-span-2">
              <label htmlFor="secondaryColor" className="block">
                Secondary
              </label>
              <input
                value={values.secondaryColor}
                onChange={handleChange}
                id="secondaryColor"
                type="color"
                onBlur={handleBlur}
                className={`h-8 w-8 appearance-none border-none bg-transparent ${
                  errors.secondaryColor && touched.secondaryColor
                    ? "rounded-lg border-red-600"
                    : ""
                }`}
              />
              {errors.secondaryColor && touched.secondaryColor && (
                <p className="text-xs text-red-600">{errors.secondaryColor}</p>
              )}
            </div>
            <div className="col-span-2">
              <label htmlFor="thirdColor" className="block">
                Secondary
              </label>
              <input
                value={values.thirdColor}
                onChange={handleChange}
                id="thirdColor"
                type="color"
                onBlur={handleBlur}
                className={`h-8 w-8 appearance-none border-none bg-transparent ${
                  errors.thirdColor && touched.thirdColor
                    ? "rounded-lg border-red-600"
                    : ""
                }`}
              />
              {errors.thirdColor && touched.thirdColor && (
                <p className="text-xs text-red-600">{errors.thirdColor}</p>
              )}
            </div>
          </div>
        </div>
        <button
          disabled={isSubmitting}
          type="submit"
          className="col-span-2 mt-2 flex items-center justify-center rounded-md bg-primary p-1 font-comfortaa text-xl text-white disabled:bg-lightGray"
        >
          {isSubmitting && (
            <div role="status">
              <svg
                aria-hidden="true"
                className="mr-2 h-6 animate-spin fill-white text-gray-300  "
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
            </div>
          )}
          {isSubmitting ? "Creating..." : "Create"}
        </button>

        <button className={res?'className="col-span-2 mt-2 flex items-center justify-center rounded-md bg-primary p-1 font-comfortaa text-xl text-white disabled:bg-lightGray': 'hidden'}
        onClick={()=>{
          navigate("/landing");

        }}
        
        >Check Result</button>
      </form>
    </div>
  );
};

export default Home;
