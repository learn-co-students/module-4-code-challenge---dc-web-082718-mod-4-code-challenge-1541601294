import React from "react";
import Adapter from '../Adapter'
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

const api = new Adapter()
const BOTSURL = 'https://bot-battler-api.herokuapp.com/api/v1/bots'

class BotsPage extends React.Component {

  constructor() {
    super()
    this.state = {
      bots: [],
      army: []
    }
  }

  componentDidMount() {
    api.genericFetch(BOTSURL).then(this.setBotsState)
  }

  setBotsState = (data) => {
    this.setState({
      bots: data
    })
  }

  addToArmy = (bot) => {
    const botsCopy = this.state.bots
    botsCopy.map(function(botCopy) {
      if(botCopy === bot) {
        botCopy.enlisted = true
      }
    })

    this.setState({
      bots: botsCopy
    })

  }

  removeFromArmy = (bot) => {
    const botsCopy = this.state.bots
    botsCopy.map(function(botCopy) {
      if(botCopy === bot) {
        botCopy.enlisted = false
      }
    })

    this.setState({
      bots: botsCopy
    })
  }

  // updateBot = (bot, key, value) => {
  //   const botsCopy = this.state.bots
  //   botsCopy.map(function(botCopy) {
  //     if(botCopy === bot) {
  //       botCopy[key] = value
  //     }
  //   })
  //
  //   this.setState({
  //     bots: botsCopy
  //   })
  // }

  render() {
    return (
      <div>
        <YourBotArmy
          bots={this.state.bots.filter(bot => bot.enlisted === true)}
          handleClick={this.removeFromArmy}
        />
        <BotCollection
          bots={this.state.bots.filter(bot => bot.enlisted !== true)}
          handleClick={this.addToArmy}
        />
      </div>
    );
  }

}

export default BotsPage;
