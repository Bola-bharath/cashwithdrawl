import './index.css'

const DenominationItem = props => {
  const {denominationList, updateBalance} = props
  const {value} = denominationList

  const subtractAmount = () => {
    updateBalance(value)
  }

  return (
    <li className="item-container">
      <button className="amount" onClick={subtractAmount} type="button">
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
