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



export const delete_template = {
  title: 'Are you sure?',
  text: "You won't be able to revert this!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonText: 'Yes, delete it!',
  buttonsStyling: false,
  customClass: {
    confirmButton: 'MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedSizeSmall MuiButton-sizeSmall bg-gradient line-height-inherit',
    cancelButton: 'MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedSizeSmall MuiButton-sizeSmall ml-2 line-height-inherit'
  }
}