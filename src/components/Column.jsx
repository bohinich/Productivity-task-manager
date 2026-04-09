import Task from './Task'

export default function Column({ title, tasks, onEdit, onDelete }) {
  return (
    <div className="flex-1 bg-gray-50 p-4 rounded-2xl min-w-[250px]">
      <h2 className="font-bold text-gray-700 mb-4">{title}</h2>
      {tasks.length === 0 ? (
        <p className="text-gray-400 text-sm">No tasks here</p>
      ) : (
        tasks.map((task) => (
          <Task key={task.id} task={task} onEdit={onEdit} onDelete={onDelete} />
        ))
      )}
    </div>
  )
}