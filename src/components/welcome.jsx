import { useState } from "react";

function Welcome({ onsubmit }) {
  const [inputName, setInputName] = useState("");
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  const handleInputChange = (e) => {
    setInputName(e.target.value);
    setIsButtonVisible(e.target.value.trim().length > 0);
  };

  const handleSubmit = () => {
    onsubmit(inputName);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg w-11/12 max-w-md mx-auto">
        <h2 className="text-2xl font-bold">Hi! I'am Wira Adi Kurniawan.</h2>
        <h3 className="text-2xl font-bold mb-4">Welcome to my portfolio</h3>
        <p className="mb-4">Please enter your name to continue:</p>
        <input
          type="text"
          value={inputName}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
          className="border border-gray-300 p-2 w-full rounded"
          placeholder="Enter your name"
        />
        {isButtonVisible && (
          <button
            onClick={handleSubmit}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
          >
            Oke
          </button>
        )}
      </div>
    </div>
  );
}

export default Welcome;
