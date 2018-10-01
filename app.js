const todos = [{
  text: 'Go for a walk',
  completed: false
}, {
  text: 'Make a dinner',
  completed: true
}, {
  text: 'Buy a bike',
  completed: false
}, {
  text: 'Order cat food',
  completed: true
}, {
  text: 'Clean kitchen',
  completed: false
}]

const incompleteTodos = todos.filter(function(todo) {
  return !todo.completed
})

const summary = document.createElement('h2')
summary.textContent = `You have ${incompleteTodos.length} todos left`
document.querySelector('body').appendChild(summary)

todos.forEach(function(todo) {
  const p = document.createElement('p')
  p.textContent = todo.text
  document.querySelector('body').appendChild(p)
})








































// const newParagraph = document.createElement('p')
// newParagraph.textContent = 'This is new element from Javascript'
// document.querySelector('body').appendChild(newParagraph)