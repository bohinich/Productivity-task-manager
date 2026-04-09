import Column from './Column'
import { STATUS, filterTasksByStatus } from '../utils/helpers'

export default function Board({ tasks, onEdit, onDelete, onAdd, filter }) {
  return (
    <div className="grid grid-cols-3 gap-5 p-6">
      {STATUS.map((status) => (
        <Column
          key={status}
          title={status}
          tasks={filterTasksByStatus(tasks, filter).filter((t) => t.status === status)}
          onEdit={onEdit}
          onDelete={onDelete}
          onAdd={() => onAdd(status)}
        />
      ))}
    </div>
  )
}