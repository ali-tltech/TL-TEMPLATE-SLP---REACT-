import "./App.css";
import logo from "./images/Landing_Page_Logo.png";
import BasicSlider from "./Components/BasicSlider";
import Tooltip from "@mui/material/Tooltip";
import AppointmentLayout from "./Components/AppointmentLayout";
import React from "react";

function App() {
  // <======================================== NOTES START ==============================================>

  // Libraries used : "material-ui" , "tailwind-css" for css
  // Read the documentaion in their respective sites for the above mentioned libraries before making changes in the code.
  // To run the code:
  // First install all dependencies :- npm intsall
  // Then run the code :- npm start

  // created date : 06-MAY-2024 || created by : Abid NK   || module : 1 ||
  // modified date : 05/09/2024 || modified by : Abid NK  || module : 1 ||

  // Technical summary(Pre-setups) created date/by :  Abid NK ||
  // Domain :   ||
  // Hosting :   ||
  // SSL :   ||
  // Database :  ||

  // Phase summary :   || created date/by :    ||
  // Phase 1 :  SetUps ||
  // Phase 2 :  Development/Main page creation ||
  // Phase 3 :  Production  ||

  // <======================================== NOTES END ==============================================>
  return (
    <>
      <div className="backgroundImg ">
        <div className="globe absolute top-[90vh] right-10 hidden md:block">
          <Tooltip title="Visit Our Site" placement="right-start" arrow>
            <a href="https://tltechnologies.net/" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-12 h-12"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                />
              </svg>
            </a>
          </Tooltip>
        </div>
        <div className="globe absolute top-[80vh] right-10 hidden md:block">
          <Tooltip title="Connect Us" placement="right" arrow>
            <a
              href="https://wa.me/917736149126?text=Hello,%20I%20am%20interested%20to%20know%20more%20about%20your%20service"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="svgImg"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA1MCA1MCIKc3R5bGU9ImZpbGw6IzQwQzA1NzsiPgogICAgPHBhdGggZD0iTTI1LDJDMTIuMzE4LDIsMiwxMi4zMTgsMiwyNWMwLDMuOTYsMS4wMjMsNy44NTQsMi45NjMsMTEuMjlMMi4wMzcsNDYuNzNjLTAuMDk2LDAuMzQzLTAuMDAzLDAuNzExLDAuMjQ1LDAuOTY2IEMyLjQ3Myw0Ny44OTMsMi43MzMsNDgsMyw0OGMwLjA4LDAsMC4xNjEtMC4wMSwwLjI0LTAuMDI5bDEwLjg5Ni0yLjY5OUMxNy40NjMsNDcuMDU4LDIxLjIxLDQ4LDI1LDQ4YzEyLjY4MiwwLDIzLTEwLjMxOCwyMy0yMyBTMzcuNjgyLDIsMjUsMnogTTM2LjU3LDMzLjExNmMtMC40OTIsMS4zNjItMi44NTIsMi42MDUtMy45ODYsMi43NzJjLTEuMDE4LDAuMTQ5LTIuMzA2LDAuMjEzLTMuNzItMC4yMzEgYy0wLjg1Ny0wLjI3LTEuOTU3LTAuNjI4LTMuMzY2LTEuMjI5Yy01LjkyMy0yLjUyNi05Ljc5MS04LjQxNS0xMC4wODctOC44MDRDMTUuMTE2LDI1LjIzNSwxMywyMi40NjMsMTMsMTkuNTk0IHMxLjUyNS00LjI4LDIuMDY3LTQuODY0YzAuNTQyLTAuNTg0LDEuMTgxLTAuNzMsMS41NzUtMC43M3MwLjc4NywwLjAwNSwxLjEzMiwwLjAyMWMwLjM2MywwLjAxOCwwLjg1LTAuMTM3LDEuMzI5LDEuMDAxIGMwLjQ5MiwxLjE2OCwxLjY3Myw0LjAzNywxLjgxOSw0LjMzYzAuMTQ4LDAuMjkyLDAuMjQ2LDAuNjMzLDAuMDUsMS4wMjJjLTAuMTk2LDAuMzg5LTAuMjk0LDAuNjMyLTAuNTksMC45NzMgcy0wLjYyLDAuNzYtMC44ODYsMS4wMjJjLTAuMjk2LDAuMjkxLTAuNjAzLDAuNjA2LTAuMjU5LDEuMTljMC4zNDQsMC41ODQsMS41MjksMi40OTMsMy4yODUsNC4wMzkgYzIuMjU1LDEuOTg2LDQuMTU4LDIuNjAyLDQuNzQ4LDIuODk0YzAuNTksMC4yOTIsMC45MzUsMC4yNDMsMS4yNzktMC4xNDZjMC4zNDQtMC4zOSwxLjQ3Ni0xLjcwMywxLjg2OS0yLjI4NiBzMC43ODctMC40ODcsMS4zMjktMC4yOTJjMC41NDIsMC4xOTQsMy40NDUsMS42MDQsNC4wMzUsMS44OTZjMC41OSwwLjI5MiwwLjk4NCwwLjQzOCwxLjEzMiwwLjY4MSBDMzcuMDYyLDMwLjU4NywzNy4wNjIsMzEuNzU1LDM2LjU3LDMzLjExNnoiPjwvcGF0aD4KPC9zdmc+"
              />
            </a>
          </Tooltip>
        </div>
        <div className="flex justify-center w-full  h-fit backdrop-blur-3xl">

        {/* <==================== Webiste link as sticky ====================> */}
        <div className="flex flex-wrap p-10">
          {/* <==================== HEADER ====================>  */}
          <div className="">
            <div className="flex justify-between h-fit pb-5">
              <div class="nav flex justify-center">
                <p class="text-blue-100 text-2xl font-extralight  place-content-center text-shadow tracking-wider ">
                  exmark
                </p>
              </div>

              {/* <img
                src={''}
                alt="landingPageLogo"
                className="p-1 w-full  md:w-auto md:h-auto"
              /> */}
            </div>
          </div>
          {/* <==================== BODY ====================>  */}
          <div className="grid grid-cols-2 gap-x-5 justify-center  items-center mb-5">
            <div className=" col-span-2 md:col-span-1 bg-black rounded-3xl mb-5">
              <BasicSlider />
            </div>
            <div className="col-span-2 md:col-span-1 mb-5 ">
              <AppointmentLayout />
            </div>
          </div>
          {/* <==================== FOOTER ====================>  */}
          <div className=" w-full mt-[20px] md:mt-2  max-w-xl mb-5">
            <div className="mt-0">
              <p className="bg-white rounded-lg p-1 text-center">
                Copyright © 2023
                <a
                  href="https://tltechnologies.net/"
                  target="_blank"
                  className="font-bold text-red-600 mr-1 ml-1"
                >
                  TL TECHNOLOGIES PVT LTD
                </a>
                All Rights Reserved.
              </p>
            </div>
          </div>
          <br />
          <br />
        </div>
        </div>

      </div>
    </>
  );
}

export default App;
