import { useState } from "react";
import Carousel from "./carousel";
import { BsGithub } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";

function Project(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      <div
        className="w-full cursor-pointer"
        key={props.project.id}
        onClick={() => openModal(props.project)}
      >
        <div className="bg-white h-full w-full justify-center items-center flex rounded-lg overflow-hidden p-5 relative group">
          <div className="w-full h-[200px] overflow-hidden">
            <img
              src={props.project.images[0]}
              alt={props.project.title}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="absolute p-5 bg-third w-full h-full flex items-center opacity-0 group-hover:opacity-100 transition ">
            <div className="text-center w-full text-white mt-[-60px] group-hover:mt-0 transition-all">
              <div className="bg-white rounded-full px-5 inline-block mb-2">
                <h4 className="text-gradient">{props.project.title}</h4>
              </div>
              <p>{props.project.description}</p>
            </div>
          </div>
        </div>
      </div>

      {isOpen && selectedProject && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 transition z-10"
          data-aos="zoom-in"
          data-aos-duration="500"
        >
          <div className="bg-slate-100 p-6 rounded-lg w-11/12 h-5/6 overflow-y-auto">
            <div className="flex flex-col lg:flex-row">
              {/* carousel */}
              <div className="w-full lg:w-1/2">
                <Carousel images={selectedProject.images}></Carousel>
              </div>

              {/* description */}
              <div className="w-full lg:w-1/2 pl-4 text-left my-auto">
                <h2 className="text-xl font-bold text-center mb-10">
                  {selectedProject.title}
                </h2>
                <ul>
                  <li>
                    <h5 className="font-semibold">Description:</h5>
                    {selectedProject.description}
                  </li>
                  <li>
                    <h5 className="font-semibold">Build with:</h5>
                    {selectedProject.stack}
                  </li>
                  <li>
                    <h5 className="font-semibold">Responsibilities:</h5>
                    <ul>
                      {selectedProject.responsibilities.map(
                        (responsibility, index) => (
                          <li key={index} className="flex items-center">
                            <GoDotFill />
                            {responsibility}
                          </li>
                        )
                      )}
                    </ul>
                  </li>
                  <li>
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-500 font-semibold mt-3"
                    >
                      <BsGithub className="mr-1" />
                      Github
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <button
              onClick={closeModal}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Project;
