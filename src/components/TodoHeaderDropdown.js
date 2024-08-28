const TodoHeaderDropdown = ({ filterStatus, setFilterStatus }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">TODO</h1>
        <div className="flex items-center">
          <label className="mr-2 text-gray-700 font-medium" htmlFor="status">
            Filter by:
          </label>
          <select
            id="status"
            className="border border-gray-300 rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Incomplete">Incomplete</option>
            <option value="Complete">Complete</option>
          </select>
        </div>
      </div>
      <hr className="mt-4 border-gray-300" />
    </div>
  );
};

export default TodoHeaderDropdown;
