function Skill({ url, alt, title }) {
  return (
    <>
      <div className="w-full">
        <div className="bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group">
          <img src={url} alt={alt} />
          <div className="absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear">
            <div className="text-center w-full text-white">
              <div className="bg-white rounded-full px-5 py-2 inline-block mb-2">
                <h4 className="text-gradient">{title}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skill;
