export default function Filter({ status, setStatus }) {
  const options = ['All', 'To Do', 'In Progress', 'Done']

  return (
    <div className="flex gap-3 mb-4">
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => setStatus(opt)}
          className={`px-4 py-2 rounded-2xl transition ${
            status === opt
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  )
}