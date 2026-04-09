import Task from './Task'

export default function Column({ title, tasks, onEdit, onDelete, onAdd }) {
  return (
    <div className="flex flex-col gap-2.5">
      <div className="bg-white rounded-2xl px-4 py-3.5 shadow-sm border border-gray-100 flex justify-between items-start">
        <div>
          <h2 className="text-xl font-bold text-gray-800">{title}</h2>
          <p className="text-xs text-gray-400 mt-0.5">{tasks.length} task{tasks.length !== 1 ? 's' : ''}</p>
        </div>
        <div className="flex items-center gap-1.5">
          <button
            onClick={onAdd}
            className="text-xs font-medium text-blue-600 border border-gray-200 rounded-full px-3 py-1 hover:bg-blue-50 transition-colors"
          >
            + Add
          </button>
          <button className="w-6 h-6 flex items-center justify-center border border-gray-200 rounded-md hover:bg-gray-50 transition-colors">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="2.5">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-2.5">
        {tasks.length === 0 ? (
          <p className="text-gray-300 text-sm text-center py-6 border-2 border-dashed border-gray-200 rounded-xl">
            No tasks here
          </p>
        ) : (
          tasks.map((task) => (
            <Task key={task.id} task={task} onEdit={onEdit} onDelete={onDelete} />
          ))
        )}
      </div>
    </div>
  )
}