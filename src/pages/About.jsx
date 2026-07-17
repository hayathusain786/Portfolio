export default function About() {
  const techStackdata = [
    {
      title: "Languages",
      content: "C#, SQL, JavaScript",
    },
    {
      title: "Frameworks",
      content: "ASP.NET Core MVC, ASP.NET Web Forms, ASP.NET MVC",
    },
    {
      title: "Frontend",
      content: "HTML5, CSS3, Bootstrap, JavaScript, React (Basics)",
    },
    {
      title: "Databases",
      content: "SQL Server, PostgreSQL",
    },
    {
      title: "ORM & Data Access",
      content: "Entity Framework Core, ADO.NET",
    },
    {
      title: "Tools",
      content:
        "Visual Studio, VS Code, Git, GitHub, SQL Server Management Studio",
    },
  ];
  return (
    <div id="about" className="container px-4 sm:px-16 sm:mx-auto">
      <div className="flex flex-row items-center   ">
        <div style={{ transform: "none", transformOrigin: "0% 50% 0px" }}>
          <div className="section-line bg-[#FC4370] w-16 h-1 mr-6"></div>
        </div>
        <div>
          <p className="section-category text-grey sm:text-base font-medium md:text-4xl">
            About
          </p>
        </div>
      </div>
      <h2 className="about-h2 lg:text-secheader mt-8 text-4xl font-semibold leading-normal text-white">
        Get a closer look About Me.
      </h2>
      <div className="flex flex-col overflow-hidden rounded-md shadow-sm md:flex-row-reverse">
        <div className="flex items-center justify-center ">
          <img src="/mobile_guy.svg" alt="" className="p-8 w-[20rem]" />
        </div>
        <div className="flex flex-col justify-center flex-1 px-6 py-12 ">
          <div>
            <div className="flex flex-row items-center ">
              <div style={{ transform: "none", transformOrigin: "0% 50% 0px" }}>
                <div className="section-line bg-[#FC4370] w-10 h-1 mr-6"></div>
              </div>
              <div>
                <p className="section-category text-grey text-2xl font-semibold ">
                  About Me
                </p>
              </div>
            </div>
            <div className="mt-4">
              <p className="my-6 dark:text-gray-400 text-xl">
                I'm a
                <span className="text-[#FC4370] font-semibold px-1">
                  .NET Developer
                </span>
                with
                <span className="text-[#FC4370] font-semibold px-1">
                  3+ years of professional experience
                </span>
                building web applications and ERP solutions. My expertise
                includes{" "}
                <span className="text-[#FC4370] font-semibold px-1">
                  ASP.NET Core
                </span>
                ,{" "}
                <span className="text-[#FC4370] font-semibold px-1">
                  ASP.NET Web Forms
                </span>
                , <span className="text-[#FC4370] font-semibold px-1">C#</span>,{" "}
                <span className="text-[#FC4370] font-semibold px-1">
                  SQL Server
                </span>
                ,
                <span className="text-[#FC4370] font-semibold px-1">
                  PostgreSQL
                </span>
                ,{" "}
                <span className="text-[#FC4370] font-semibold px-1">
                  Entity Framework Core
                </span>
                , and{" "}
                <span className="text-[#FC4370] font-semibold px-1">
                  ADO.NET
                </span>
                .
              </p>
              <p className="my-6 dark:text-gray-400 text-xl font-semibold">
                Throughout my career, I've worked on enterprise modules such as
                <span className="text-[#FC4370] font-semibold px-1">
                  Admissions
                </span>
                ,{" "}
                <span className="text-[#FC4370] font-semibold px-1">HRMS</span>,{" "}
                <span className="text-[#FC4370] font-semibold px-1">
                  Payroll
                </span>
                ,{" "}
                <span className="text-[#FC4370] font-semibold px-1">
                  Library Management
                </span>
                ,{" "}
                <span className="text-[#FC4370] font-semibold px-1">
                  E-File Management
                </span>
                , and{" "}
                <span className="text-[#FC4370] font-semibold px-1">
                  Affiliation Portals
                </span>
                , where I focused on developing reliable, secure, and
                maintainable applications.
              </p>
              <p className="my-6 dark:text-gray-400 text-xl font-semibold">
                I enjoy solving real-world business problems, designing
                efficient database structures, building REST APIs, and writing
                clean, scalable code. I'm always eager to learn new technologies
                and continuously improve my skills as a developer.
              </p>
              <p className=" dark:text-gray-400 text-xl font-semibold"></p>
            </div>
          </div>
          <div>
            <div className="flex flex-row items-center ">
              <div style={{ transform: "none", transformOrigin: "0% 50% 0px" }}>
                <div className="section-line bg-[#FC4370] w-10 h-1 mr-6"></div>
              </div>
              <div>
                <p className="section-category text-grey text-2xl font-semibold ">
                  Tech Stack
                </p>
              </div>
            </div>
            <div className="mt-4">
              {techStackdata.map((item, index) => (
                <p className="my-6 dark:text-gray-400 text-xl" key={index}>
                  <span className="text-[#FC4370] font-bold px-1">
                    {item.title}:
                  </span>
                  <span className="font-semibold px-1">
                    {item.content}
                  </span>
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
