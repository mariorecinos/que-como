
// TODO ADD MODEL 
const Modal = ({ open, children, onClose}) => {
  if (!open) return null

  return (
    <>
    <button onClick={onClose}>Close Form</button>
    {children}
    </>
  )
}

export default Modal;
