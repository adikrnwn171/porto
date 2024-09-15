import { useState } from "react";
import { BsArrowRightCircleFill, BsArrowLeftCircleFill } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";

function Carousel({ images }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState(null);

  const openImage = (image) => {
    setSelectedImages(image);
    setIsOpen(true);
  };

  const closeImage = () => {
    setIsOpen(false);
    setSelectedImages(null);
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <div className="relative">
        <div
          className="w-full h-[400px] overflow-hidden cursor-pointer"
          onClick={() => openImage(images)}
        >
          <img
            src={images[currentIndex]}
            alt="Project Image"
            className="w-full h-full object-contain"
          />
        </div>
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-0 transform -translate-y-1/2"
        >
          <BsArrowLeftCircleFill />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-0 transform -translate-y-1/2"
        >
          <BsArrowRightCircleFill />
        </button>
      </div>
      <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full mx-1 cursor-pointer ${
              index === currentIndex ? "bg-gray-800" : "bg-gray-400"
            }`}
            onClick={() => goToSlide(index)}
          ></div>
        ))}
      </div>

      {isOpen && selectedImages && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 transition z-10"
          data-aos="fade-down"
          data-aos-duration="500"
        >
          <div className="bg-slate-100 p-6 rounded-lg w-11/12 h-5/6 overflow-y-auto">
            <div className="">
              <img
                src={images[currentIndex]}
                alt="Project Image"
                className="w-full h-full object-contain"
              />
              <button
                onClick={closeImage}
                className=" text-white absolute top-4 right-4"
              >
                <IoMdClose />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Carousel;
