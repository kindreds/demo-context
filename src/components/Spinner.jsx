const Spinner = () => {
  return (
    <div style={{ paddingInline: '4.5px', paddingBlock: '1px' }}>
      <div className="spinner-border spinner-border-sm" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  )
}

export default Spinner
