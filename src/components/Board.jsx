import Column from './Column'
import { STATUS, filterTasksByStatus } from '../utils/helpers'

export default function Board({ tasks, onEdit, onDelete, filter }) {
  return (
    <div className="flex gap-4 overflow-x-auto pb-4">
      {STATUS.map((status) => (
        <Column
          key={status}
          title={status}
          tasks={filterTasksByStatus(tasks, filter).filter(t => t.status === status)}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  )
}