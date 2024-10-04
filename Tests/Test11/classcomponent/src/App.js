import {Component} from 'react'
import './App.css';

class Welcome extends Component {
  state = {isSubscribed: false}

  changeSubscribeStatus = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  render() {
    const {isSubscribed} = this.state
    const text = isSubscribed ? 'Subscribed' : 'Subscribe'

    return (
      <div className="bg">
        <h1>Welcome</h1>
        <p>Thank you, Happy Learning</p>
        <button type="button" onClick={this.changeSubscribeStatus}>
          {text}
        </button>
      </div>
    )
  }
}

export default Welcome;
