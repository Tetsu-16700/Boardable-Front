

function FormAccountOrganism() {
  return (
    <form className="mt-16 w-80 flex flex-col gap-4">
      {/*  my-8  */}
      <div className="flex flex-col ">
        <label className="mb-2 font-semibold">Username</label>

        <input
          className="px-3 py-2 outline-none border  rounded-md"
          type="text"
        />
      </div>
      <div className="flex flex-col">
        <label className="mb-2 font-semibold">Name</label>

        <input
          className="px-3 py-2 outline-none border  rounded-md"
          type="text"
        />
      </div>
      <div className="flex flex-col">
        <label className="mb-2 font-semibold">E-mail</label>

        <input
          className="px-3 py-2 outline-none border  rounded-md"
          type="text"
        />
      </div>
      <div className="flex flex-col">
        <label className="mb-2 font-semibold">Password</label>
        <input
          className="px-3 py-2 outline-none border  rounded-md"
          type="password"
        />
      </div>
      <div className="flex flex-col gap-4">
        <button className="bg-violet-700 text-white px-8 py-2 rounded-md w-full">
          Update
        </button>
        <button className="bg-red-200 border-2 border-red-700 text-red-9500 px-8 py-2 rounded-md w-full">
          Delete my account
        </button>
      </div>
    </form>
  );
}

export default FormAccountOrganism;
