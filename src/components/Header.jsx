export default function Header({ tasks, filter, setFilter }) {
  const inProgressCount = tasks.filter((t) => t.status === 'In Progress').length
  const doneCount = tasks.filter((t) => t.status === 'Done').length

  return (
    <header className="bg-white border-b border-gray-200 px-6 h-14 flex items-center justify-between">
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
            <rect x="3" y="3" width="18" height="18" rx="3" />
            <path
              d="M8 12l3 3 5-5"
              stroke="#2563eb"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        </div>
        <span className="text-base font-bold text-gray-800">Task Manager</span>
      </div>

      <div className="flex items-center gap-1.5 border border-gray-300 rounded-full px-4 py-1.5">
        <span className="text-sm text-gray-400">Filter:</span>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="text-sm font-medium text-gray-700 bg-transparent border-none outline-none cursor-pointer appearance-none pr-4"
        >
          <option>All Tasks</option>
          <option>To Do</option>
          <option>In Progress</option>
          <option>Done</option>
        </select>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2.5">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>

      <div className="flex items-center gap-2.5 text-sm text-gray-500">
        <span>Tasks: <strong className="text-gray-800">{tasks.length}</strong></span>
        <span className="text-gray-300">|</span>
        <span>In Progress: <strong className="text-gray-800">{inProgressCount}</strong></span>
        <span className="text-gray-300">|</span>
        <span>Done: <strong className="text-gray-800">{doneCount}</strong></span>
      </div>
    </header>
  )
}