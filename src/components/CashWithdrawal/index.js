import {Component} from 'react'
import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  updateBalance = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {balance} = this.state
    const denominationsList = this.props
    return (
      <div className="bg-container">
        <div className="content-container">
          <div className="profile-container">
            <div className="icon">S</div>
            <p className="name">Sarah Williams</p>
          </div>
          <div className="balance-container">
            <p className="your-bal">Your Balance</p>
            <p className="amount">
              {balance}
              <br />
              <span>In Rupees</span>
            </p>
          </div>
          <p className="withdraw">Withdraw</p>
          <p className="choose-sum">CHOOSE SUM(IN RUPEES)</p>
          <ul className="list-container">
            {denominationsList.map(eachItem => (
              <DenominationItem
                denominationList={eachItem}
                key={eachItem.id}
                updateBalance={this.updateBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
