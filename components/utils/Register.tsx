"use client";

import Image from "next/image";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { register } from "module";

export default function Register() {
  const router = useRouter();

  const handleRegister = async (e: any) => {
    e.preventDefault();

    // Collect form data
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    // Combine first name and last name into a single name field
    data.name = data.firstName + " " + data.lastName;
    delete data.firstName;
    delete data.lastName;

    // Rename email address field to match User schema
    // data.email = data.emailAddress;
    // delete data.emailAddress;

    // Send POST request to your server
    const response = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    // Handle response
    if (response.ok) {
      // Registration successful
      const user = await response.json();
      console.log(user);

      // Redirect to homepage

      router.push("/");
    } else {
      // Registration failed
      console.error("Registration failed");
    }
  };

  return (
    <div className="lg:m-20">
      <div className="relative border border-gray-100 space-y-5 max-w-screen-md mx-auto rounded-md bg-white p-6 shadow-md lg:p-10">
        <form onSubmit={handleRegister}>
          <h1 className="mb-6 text-xl font-bold lg:text-2xl">
            Create your Account
          </h1>

          <div className="grid gap-3 md:grid-cols-2 mb-8">
            <div>
              <label className="ml-2"> First Name </label>
              <input
                name="firstName"
                type="text"
                placeholder="Your Name"
                className="mt-2 h-12 w-full px-3 border border-gray-200 bg-gray-100 rounded-xl placeholder-gray"
              />
            </div>
            <div>
              <label className="ml-2"> Last Name </label>
              <input
                name="lastName"
                type="text"
                placeholder="Last  Name"
                className="mt-2 h-12 w-full  px-3 border border-gray-200 bg-gray-100 rounded-xl placeholder-gray"
              />
            </div>
          </div>
          <div className="mb-8">
            <label className="ml-2"> Username </label>
            <input
              name="username"
              type="text"
              placeholder="Username"
              className="mt-2 h-12 w-full   px-3 border border-gray-200 bg-gray-100 rounded-xl placeholder-gray"
            />
          </div>
          <div className="mb-8">
            <label className="ml-2"> Email Address </label>
            <input
              name="email"
              type="email"
              value="email"
              placeholder="Info@example.com"
              className="mt-2 h-12 w-full   px-3 border border-gray-200 bg-gray-100 rounded-xl placeholder-gray"
            />
          </div>
          <div className="mb-8">
            <label className="ml-2"> Password </label>
            <input
              name="password"
              type="password"
              placeholder="****************"
              className="mt-2 h-12 w-full  px-3 border border-gray-200 bg-gray-100 rounded-xl placeholder-gray"
            />
          </div>
          <div className="grid gap-3 lg:grid-cols-2">
            {/* <div> */}
            {/* <label className=""> Gender </label>
            <div className="relative w-56 mt-2  rounded-lg">
            <input
            className="peer hidden"
            type="checkbox"
            name="select-1"
            id="select-1"
            />
            <label
            htmlFor="select-1"
            className="flex w-full cursor-pointer rounded-lg select-none border p-2 px-3 text-sm text-gray-700 ring-blue-400 peer-checked:ring"
            >
            Select Option{" "}
            </label>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="pointer-events-none absolute right-5 top-3 h-4 text-gray-600 transition peer-checked:rotate-180"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
              <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                  />
                  </svg>
                  <ul className="max-h-0 select-none flex-col overflow-hidden rounded-b-lg shadow-md transition-all duration-300 peer-checked:max-h-56 peer-checked:py-3">
                  <li className="cursor-pointer px-3 py-2 text-sm text-gray-500 hover:bg-blue-500 hover:text-white">
                  Male
                  </li>
                  <li className="cursor-pointer px-3 py-2 text-sm text-gray-500 hover:bg-blue-500 hover:text-white">
                  Female
                  </li>
                  <li className="cursor-pointer px-3 py-2 text-sm text-gray-500 hover:bg-blue-500 hover:text-white">
                  Other
                  </li>
                  </ul>
                  </div>
                </div> */}
            <div>
              <label className="ml-2">
                {" "}
                Phone: <span className="text-sm text-gray-400">
                  (optional)
                </span>{" "}
              </label>
              <input
                name="phoneNumber"
                type="text"
                placeholder="+543 5445 0543"
                className="mt-2 h-12 w-full  px-3 border border-gray-200 bg-gray-100 rounded-xl placeholder-gray"
              />
            </div>
          </div>
          {/* <div className="checkbox">
          <input type="checkbox" id="chekcbox1" defaultChecked="" />
          <label htmlFor="checkbox1">
          I agree to the{" "}
          <a href="#" target="_blank" className="text-blue-600">
          {" "}
          Terms and Conditions{" "}
          </a>{" "}
          </label>
        </div> */}
          <div>
            <button
              type="submit"
              className="mt-10 w-full rounded-md bg-blue-600 p-2 text-center font-semibold text-white"
            >
              Get Started
            </button>
          </div>
          <div className="divider font-medium text-sm mt-10">
            Or continue with
          </div>
        </form>
        {/* <button
          className="justify-center items-center w-full hover:bg-gray-100 border border-gray-200 transition-all ease-in-out delay-50 py-[10px] px-6 rounded-lg text-sm font-medium login_font flex gap-4 mt-10"
          onClick={() => signIn("google")}
        >
          <Image src="/google.svg" width={20} height={20} alt="google_logo" />
          <span className="text-black">Sign in with Google</span>{" "}
        </button> */}
      </div>
    </div>
  );
}
