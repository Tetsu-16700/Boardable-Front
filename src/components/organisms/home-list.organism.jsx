import { useState } from "react";
import { initialStatus } from "../../hooks/home-hooks.list";

function HomeListOrganism() {
  // para controlar el boton de los colores

  // se trae paleta de colores desde hooks
  const { optionsColors, color, handleClick, handleSelect, paletVisible } =
    initialStatus();

  const [title, setTitle] = useState("");

  const [boards, setBoards] = useState([]);

  function handleCreate() {
    const format = {
      color,
      title,
    };
    // console.log(format);
    setBoards([...boards, format]);
  }

  return (
    <div className="flex flex-wrap gap-4">
      <div className="relative ">
        {/* card */}
        <div className="rounded-md bg-slate-200 p-4 min-w-[18rem]">
          <h2>Board Title</h2>
          <input
            className="w-full px-3 py-2 border outline-none rounded-md mt-2"
            type="text"
            onChange={(e) => setTitle(e.target.value)}
          />
          <div className="flex flex-row justify-between mt-4">
            <div className="flex items-center gap-2">
              <span>Color</span>
              <div
                onClick={handleClick}
                role="button"
                className={`rounded-full border border-black  w-6 h-6 ${color}`}
              ></div>
            </div>
            <button
              className="bg-violet-700 text-white px-8 py-2 rounded-md "
              onClick={handleCreate}
            >
              Create
            </button>
          </div>
        </div>
        {/* paleta dec colores */}

        {paletVisible ? (
          <div className="shadow-md rounded-md bg-white w-32  absolute left-4 top-36 flex flex-wrap justify-around py-2 px-2 gap-1">
            {optionsColors.map((item, index) => (
              <div
                onClick={() => handleSelect(item)}
                key={index}
                role="button"
                className={`rounded-full border border-black  w-6 h-6 ${item}`}
              ></div>
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
      {/* iterar */}
      {boards.map((board, index) => (
        <div
          key={index}
          className={`rounded-mdm min-h-40 ${board.color} p-4 min-w-[18rem] flex items-center justify-center`}
        >
          <h1 className="font-bold text-xl">{board.title}</h1>
        </div>
      ))}
    </div>
  );
}

export default HomeListOrganism;

/* <div className="rounded-full border border-black  w-6 h-6 bg-[#FECACA]"></div>
            <div className="rounded-full border border-black  w-6 h-6 bg-[#FED7AA]"></div>
            <div className="rounded-full border border-black  w-6 h-6 bg-[#FEF08A]"></div>
            <div className="rounded-full border border-black  w-6 h-6 bg-[#D9F99D]"></div>
            <div className="rounded-full border border-black  w-6 h-6 bg-[#BFDBFE]"></div>
            <div className="rounded-full border border-black  w-6 h-6 bg-[#FBCFE8]"></div>
            <div className="rounded-full border border-black  w-6 h-6 bg-[#DDD6FE]"></div> */
