import { useState, useEffect } from 'react'
import { useLocalStorage } from './hooks/useLocalStorage'
import Header from './components/Header'
import Filter from './components/Filter'
import Board from './components/Board'
import TaskModal from './components/TaskModal'
import Loader from './components/Loader'

export default function App() {
  const [tasks, setTasks] = useLocalStorage('tasks', [])
  const [filter, setFilter] = useState('All')
  const [modalOpen, setModalOpen] = useState(false)
  const [editingTask, setEditingTask] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleAdd = () => {
    setEditingTask(null)
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
        if (exists) {
          return prev.map((t) => (t.id === task.id ? task : t))
        }
        return [...prev, task]
      })
      setLoading(false)
    }, 500)
  }

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <Header taskCount={tasks.length} />
      <div className="flex justify-between items-center mb-4">
        <Filter status={filter} setStatus={setFilter} />
        <button
          onClick={handleAdd}
          className="px-4 py-2 rounded-2xl bg-green-500 text-white hover:bg-green-600 transition"
        >
          + Add Task
        </button>
      </div>
      {loading && <Loader />}
      <Board tasks={tasks} onEdit={handleEdit} onDelete={handleDelete} filter={filter} />
      <TaskModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSave={handleSave}
        task={editingTask}
      />
    </div>
  )
}