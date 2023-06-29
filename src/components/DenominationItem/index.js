import './index.css'

const DenominationItem = props => {
  const {details, onDeduction} = props
  const {value} = details

  const onButton = () => {
    onDeduction(value)
  }

  return (
    <div className="denomination-container">
      <li className="item">
        <button type="button" onClick={onButton} className="amount">
          {value}
        </button>
      </li>
    </div>
  )
}

export default DenominationItem
