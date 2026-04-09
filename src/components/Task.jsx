const STATUS_BADGE = {
  'In Progress': { label: 'In Progress', bg: 'bg-amber-100', text: 'text-amber-700' },
  Done: { label: 'Completed', bg: 'bg-emerald-100', text: 'text-emerald-700' },
}

export default function Task({ task, onEdit, onDelete }) {
  const badge = STATUS_BADGE[task.status]

  return (
    <div
      className={`rounded-xl border border-gray-200 p-4 pb-3 shadow-sm hover:shadow-md transition-shadow ${
        task.status === 'In Progress' ? 'bg-amber-50' : 'bg-white'
      }`}
    >
      {badge && (
        <div className="mb-2">
          <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-md ${badge.bg} ${badge.text}`}>
            {badge.label}
          </span>
        </div>
      )}

      <h3 className="font-bold text-gray-800 text-sm leading-snug">{task.title}</h3>

      {task.description && (
        <p className="text-gray-400 text-xs mt-1.5 leading-relaxed">{task.description}</p>
      )}

      <div className="flex items-center gap-1 mt-3 pt-2.5 border-t border-gray-100">
        <button
          onClick={() => onEdit(task)}
          className="w-7 h-7 flex items-center justify-center rounded-md hover:bg-gray-100 transition-colors"
          title="Edit"
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2">
            <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
            <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
          </svg>
        </button>
        <button
          onClick={() => onDelete(task.id)}
          className="w-7 h-7 flex items-center justify-center rounded-md hover:bg-gray-100 transition-colors"
          title="Delete"
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#f87171" strokeWidth="2">
            <polyline points="3 6 5 6 21 6" />
            <path d="M19 6l-1 14H6L5 6" />
            <path d="M10 11v6M14 11v6" />
            <path d="M9 6V4h6v2" />
          </svg>
        </button>

        {task.status === 'Done' && (
          <div className="ml-auto w-7 h-7 rounded-full border-2 border-emerald-500 flex items-center justify-center">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
        )}
      </div>
    </div>
  )
}