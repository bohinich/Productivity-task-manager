export const STATUS = ['To Do', 'In Progress', 'Done']

export const filterTasksByStatus = (tasks, status) => {
  if (status === 'All Tasks') return tasks
  return tasks.filter((task) => task.status === status)
}