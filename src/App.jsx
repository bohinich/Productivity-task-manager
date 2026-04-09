import { useState } from 'react'
import { useLocalStorage } from './hooks/useLocalStorage'
import Header from './components/Header'
import Board from './components/Board'
import TaskModal from './components/TaskModal'
import Loader from './components/Loader'

export default function App() {
  const [tasks, setTasks] = useLocalStorage('tasks', [])
  const [filter, setFilter] = useState('All Tasks')
  const [modalOpen, setModalOpen] = useState(false)
  const [editingTask, setEditingTask] = useState(null)
  const [defaultStatus, setDefaultStatus] = useState('To Do')
  const [loading, setLoading] = useState(false)

  const handleAdd = (status = 'To Do') => {
    setEditingTask(null)
    setDefaultStatus(status)
    setModalOpen(true)
  }

  const handleEdit = (task) => {
    setEditingTask(task)
    setModalOpen(true)
  }

  const handleDelete = (id) => {
    setTasks(tasks.filter((t) => t.id !== id))
  }

  const handleSave = (task) => {
    setLoading(true)
    setTimeout(() => {
      setTasks((prev) => {
        const exists = prev.find((t) => t.id === task.id)
        if (exists) return prev.map((t) => (t.id === task.id ? task : t))
        return [...prev, task]
      })
      setLoading(false)
    }, 500)
  }

  return (
    <div className="min-h-screen bg-slate-200 flex flex-col font-inter">
      <Header tasks={tasks} filter={filter} setFilter={setFilter} />

      <div className="flex justify-end px-6 pt-5">
        <button
          onClick={() => handleAdd()}
          className="flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
        >
          + Add Task
        </button>
      </div>

      {loading && <Loader />}

      <Board
        tasks={tasks}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onAdd={handleAdd}
        filter={filter}
      />

      <footer className="mt-auto px-6 py-4 flex justify-between text-xs text-gray-400">
        <span>Data saved to localStorage</span>
        <span>© 2026 Task Manager. All rights reserved.</span>
      </footer>

      <TaskModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSave={handleSave}
        task={editingTask}
        defaultStatus={defaultStatus}
      />
    </div>
  )
}