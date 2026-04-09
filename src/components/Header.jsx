export default function Header({ taskCount }) {
  return (
    <header className="bg-white p-6 rounded-b-2xl shadow-md mb-6">
      <h1 className="text-2xl font-bold text-gray-800">
        Productivity Task Manager
      </h1>
      <p className="text-gray-500 mt-1">Total tasks: {taskCount}</p>
    </header>
  )
}