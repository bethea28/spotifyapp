

export var getData = (text) =>({
  type: 'data', data:text
})

export var handleSubmit = (text) =>({
  type: 'hand', data:text
})