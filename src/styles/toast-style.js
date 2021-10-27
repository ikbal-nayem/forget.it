export const success = (msg)=>({
  render: msg,
  type: "success",
  isLoading: false,
  autoClose: 3000,
  theme: 'dark'
})

export const warning = (msg)=>({
  render: msg,
  type: "warning",
  isLoading: false,
  autoClose: 5000,
  theme: 'dark'
})

export const error = (msg)=>({
  render: msg,
  type: "error",
  isLoading: false,
  autoClose: 5000,
  theme: 'dark'
})