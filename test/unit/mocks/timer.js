module.exports = function () {
  const tasks = new Set()

  const schedule = (action, delay, interval) => {
    const task = {
      action,
      delay,
      elapsed: 0,
      interval,
      canceled: false
    }
    tasks.add(task)
    return task
  }

  const clear = (task) => {
    if (!task) return
    task.canceled = true
    tasks.delete(task)
  }

  const wind = (time) => {
    // Use a snapshot so timers scheduled by callbacks start on the next wind.
    for (const task of [...tasks]) {
      if (task.canceled) continue

      task.elapsed += time
      if (task.interval) {
        while (!task.canceled && task.elapsed >= task.delay) {
          task.elapsed -= task.delay
          task.action()
        }
      } else if (task.elapsed >= task.delay) {
        tasks.delete(task)
        task.canceled = true
        task.action()
      }
    }
  }

  return {
    setTimeout: (action, delay) => schedule(action, delay, false),
    clearTimeout: clear,
    setInterval: (action, delay) => schedule(action, delay, true),
    clearInterval: clear,
    wind
  }
}
