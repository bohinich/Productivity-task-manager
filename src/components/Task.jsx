export default function Task({ task, onEdit, onDelete }) {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-md mb-3 hover:shadow-lg transition cursor-pointer">
      <h3 className="font-semibold text-gray-800">{task.title}</h3>
      <p className="text-gray-500 text-sm mt-1">{task.description}</p>
      <div className="flex justify-between mt-3 items-center">
        <span className="text-xs px-2 py-1 bg-gray-100 rounded-full">{task.status}</span>
        <div className="flex gap-2">
          <button
            onClick={() => onEdit(task)}
            className="text-blue-500 hover:underline text-sm"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(task.id)}
            className="text-red-500 hover:underline text-sm"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}