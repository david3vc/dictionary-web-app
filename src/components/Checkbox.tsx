import '../styles/checkbox.css'

const Checkbox = () => {
  return (
    <label className='switch'>
        <input type="checkbox" />
        <span className='slider round'></span>
    </label>
  )
}

export default Checkbox