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

const filters = {
  searchText: '',
  hideCompleted: false
}

const renderTodos = function(todos, filters) {
  let filteredTodos = todos.filter(function(todo) {
    return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
  })

  filteredTodos = filteredTodos.filter(function(todo) {
    if(filters.hideCompleted) {
      return !todo.completed
    } else {
      return true
    }
  })

  const incompleteTodos = filteredTodos.filter(function(todo) {
    return !todo.completed
  })
  
  document.querySelector('#todos').innerHTML = ''

  const summary = document.createElement('h2')
  summary.textContent = `You have ${incompleteTodos.length} todos left`
  document.querySelector('#todos').appendChild(summary)
  
  filteredTodos.forEach(function(todo) {
    const p = document.createElement('p')
    p.textContent = todo.text
    document.querySelector('#todos').appendChild(p)
  })
}

renderTodos(todos, filters)

document.querySelector('#search-text').addEventListener('input', function(e) {
  filters.searchText = e.target.value
  renderTodos(todos, filters)
})

document.querySelector('#new-todo-form').addEventListener('submit', function(e) {
  e.preventDefault()
  todos.push({
    text: e.target.elements.addTodo.value,
    completed: false
  })
  renderTodos(todos, filters)
  e.target.elements.addTodo.value = ''
})

document.querySelector('#hide-completed').addEventListener('change', function(e) {
  filters.hideCompleted = e.target.checked
  renderTodos(todos, filters)
})





























// const newParagraph = document.createElement('p')
// newParagraph.textContent = 'This is new element from Javascript'
// document.querySelector('body').appendChild(newParagraph)