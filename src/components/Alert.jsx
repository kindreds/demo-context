const Alert = ({ content = '' }) => {
  return (
    <div className="alert alert-danger" role="alert">
      {content}
    </div>
  )
}

export default Alert
