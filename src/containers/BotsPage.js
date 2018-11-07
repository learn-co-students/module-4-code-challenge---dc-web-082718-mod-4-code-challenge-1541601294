import React from "react";
import Adapter from '../Adapter'
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'

const api = new Adapter()
const BOTSURL = 'https://bot-battler-api.herokuapp.com/api/v1/bots'

class BotsPage extends React.Component {

  constructor() {
    super()
    this.state = {
      bots: [],
      army: [],
      selected: null
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
    this.updateBot({bot: bot, key: 'enlisted', value: true})
  }
  removeFromArmy = (bot) => {
    this.updateBot({bot: bot, key: 'enlisted', value: false})
  }

  selectBot = (bot) => {
    this.setState({
      selected: bot
    })
  }

  updateBot = ({bot, key, value}) => {
    const botsCopy = this.state.bots
    botsCopy.map(function(botCopy) {
      if(botCopy === bot) {
        botCopy[key] = value
      }
    })

    this.setState({
      bots: botsCopy
    })
  }

  deselect = () => {
    this.setState({
      selected: null
    })
  }

  render() {
    return (
      <div>
        <YourBotArmy
          bots={this.state.bots.filter(bot => bot.enlisted === true)}
          handleClick={this.removeFromArmy}
        />
        {this.state.selected ?
          <BotSpecs
            bot={this.state.selected}
            handleEnlist={this.addToArmy}
            deselect={this.deselect}
          /> :
          <BotCollection
            bots={this.state.bots.filter(bot => bot.enlisted !== true)}
            handleClick={this.selectBot}
          /> }
      </div>
    );
  }

}

export default BotsPage;
