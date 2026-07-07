/* eslint-disable @next/next/no-img-element */
import { useState } from "react";

// Images

const data = [
  {
    name: "Survey & Taxation ERP",
    subTitle:"ASP.NET Core MVC • PostgreSQL",
    description: "A GIS-enabled municipal taxation system designed to manage property surveys, tax assessment, demand generation, and payment tracking. I contributed to backend development, database design, tax calculation logic, GIS integration, report generation, and performance optimization while building scalable modules for local government operations.",
    highlights:"Property Survey Management,GIS Mapping Integration,Tax Assessment & Demand Generation,Payment & Reports,PostgreSQL + PostGIS",
    img: "/Group1.jpg",
  },
  {
    name: "College ERP",
    subTitle:"ASP.NET Web Forms • ASP.NET MVC • SQL Server • jQuery • Bootstrap",
    description: "An enterprise resource planning system developed for educational institutions to streamline academic and administrative operations. I worked on multiple modules including Admission, Examination, HRMS, Payroll, Library, and Inventory, developing new features, optimizing SQL queries, fixing production issues, and enhancing overall system performance.",
    highlights:"Admission Management,Examination System,HRMS,Payroll,Library Management,Inventory Management",
    img: "/Group2.jpg",
  },
  {
    name: "E-File Management System",
    subTitle:"ASP.NET Core MVC • Entity Framework Core • SQL Server",
    description: "A digital document workflow system that enables secure file movement across departments with complete tracking and approval history. I developed features for role-based access, document forwarding, authentication, workflow management, and document status tracking to improve organizational efficiency.",
    highlights:"Role-Based Access Control,File Movement Workflow,Document Tracking,Approval Process,Authentication & Authorization",
    img: "/Group3.jpg",
  },
  {
    name: "Affiliation Portal",
    subTitle:"ASP.NET Web Forms • ADO.NET • SQL Server",
    description: "A web portal designed to simplify the college affiliation process by digitizing application submission, document verification, and approval workflows. I implemented backend functionality, database operations, document management, status tracking, and administrative workflows using ASP.NET Web Forms and ADO.NET.",
    highlights:"College Registration,Document Upload & Verification,Application Tracking,Approval Workflow,Administrative Dashboard",
    img: "/Group4.jpg",
  },
  {
    name: "Grocefy – Grocery E-Commerce Web Application",
    subTitle:"React.js • Vite • ASP.NET Core Web API • SQL Server",
    description: "A responsive grocery shopping web application built to provide a modern online shopping experience. The application allows users to browse products, search and filter items, manage a shopping cart, and place orders through an intuitive interface. I developed the frontend using React.js and integrated it with RESTful APIs built in ASP.NET Core.",
    highlights:"Responsive User Interface,Product Catalog,Search & Filtering,Shopping Cart,API Integration,State Management with React Hooks,Authentication,Order Management",
    img: "/grocify.png",
  },
];
// const featuredData = [{}]
let count = 0;

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOnNextClick = () => {
    // count = (count + 1) % featuredImages.length;
    count = (count + 1) % data.length;
    setCurrentIndex(count);
  };
  const handleOnPrevClick = () => {
    // const productsLength = featuredImages.length;
    const productsLength = data.length;
    count = (currentIndex + productsLength - 1) % productsLength;
    setCurrentIndex(count);
  };

  return (
    <section className="p-4 lg:p-8 " id="work">
      <div className="container mx-auto space-y-3">
        <div className="flex flex-row items-center">
          <div className="section-line bg-[#FC4370] w-16 h-1 mr-6" style={{width:'4rem',}}></div>
          <p
            className="section-category text-greyText text-base font-medium"
            style={{opacity: 1, transform:'translate(0px, 0px)',}}
          >
            Work
          </p>
        </div>
        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
          <div className="flex items-center justify-center max-w-[36rem] ">
            <img className=" rounded-xl" src={data[currentIndex].img} alt="" />
          </div>
          <div className="flex flex-col justify-center flex-1 px-6 py-12 dark:bg-coolGray-900">
            <div className=" flex items-center px-3 my-[4rem] sm:ml-[-2rem]">
              <button
                onClick={handleOnPrevClick}
                aria-label="previous"
                className="mx-3 default-focus bg-[#393D5F] hover:bg-lighterGrey focus:outline-none p-4 mr-4 text-2xl duration-300 ease-in-out"
              >
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth={0}
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16l-4-4m0 0l4-4m-4 4h18"
                  />
                </svg>
              </button>
              <span>
                0{count + 1}/0{data.length}
              </span>
              <button
                onClick={handleOnNextClick}
                aria-label="next"
                className="mx-3 default-focus bg-[#393D5F] hover:bg-lighterGrey focus:outline-none p-4 mr-4 text-2xl duration-300 ease-in-out"
              >
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  ></path>
                </svg>
              </button>
            </div>
            <h1 className="text-4xl font-bold">{data[currentIndex].name}</h1>
            <h3 className="text-xl font-semibold pt-2">{data[currentIndex].subTitle}</h3>
            <p className="my-6 dark:text-gray-400 text-lg">
              {data[currentIndex].description}
            </p>
            <div>
              <ul className="list-disc ps-5">
                {data[currentIndex].highlights.split(",").map((highlight, index) => (
                  <li key={index} className="text-lg dark:text-gray-400">
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}