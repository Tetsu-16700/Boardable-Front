

function HomeFilterOrganism() {
  return (
    <div className="flex flex-col w-40 gap-2 outline-none">
      <span className="text-md font-semibold">Sort By</span>
      <select className="border rounded-md px-2 py-2" id="">
        <option value=""> Created date</option>
      </select>
    </div>
  );
}

export default HomeFilterOrganism;
