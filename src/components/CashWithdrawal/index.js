import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  onDeduction = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state

    return (
      <div className="container">
        <p className="image-icon">s</p>
        <div className="name-container">
          <h1 className="name">Sarah Williams</h1>
        </div>
        <div className="balance-container">
          <p className="balance-name">Your Balance</p>
          <div className="column-container">
            <p className="balance-number">{balance}</p>
            <p className="balance-rs">In Rupees</p>
          </div>
        </div>
        <div>
          <p className="withdraw">Withdraw</p>
          <p className="choose-sum">CHOOSE SUM (IN RUPEES)</p>
        </div>
        <ul>
          {denominationsList.map(each => (
            <DenominationItem
              onDeduction={this.onDeduction}
              details={each}
              key={each.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default CashWithdrawal
