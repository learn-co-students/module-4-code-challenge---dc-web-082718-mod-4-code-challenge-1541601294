import React from "react";
import Adapter from '../Adapter'
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'
import Navbar from '../components/Navbar'

const api = new Adapter()
const BOTSURL = 'https://bot-battler-api.herokuapp.com/api/v1/bots'

class BotsPage extends React.Component {

  constructor() {
    super()
    this.state = {
      bots: [],
      currentBots: [],
      army: [],
      selected: null
    }
  }

  componentDidMount() {
    api.genericFetch(BOTSURL).then(this.setBotsState)
  }

  setBotsState = (data) => {
    this.setState({
      bots: data,
      currentBots: data
    })
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

  filterBots = ({field, value}) => {
    let botsCopy = this.state.bots
    botsCopy = botsCopy.filter(bot => bot[field] === value)
    console.log(field)
    console.log(value)
    this.setState({
      currentBots: botsCopy
    })
  }

  sortBots = (field) => {
    let botsCopy = this.state.currentBots
    botsCopy = botsCopy.sort((botA, botB) => {return botB[field] - botA[field]})
    console.log(field)
    this.setState({
      currentBots: botsCopy
    })
  }

  renderAllBots = () => {
    this.setState({
      currentBots: this.state.bots
    })
  }

  render() {
    return (
      <div>
        <Navbar
          filterBots={this.filterBots}
          renderAllBots={this.renderAllBots}
          sortBots={this.sortBots}
        />
        <YourBotArmy
          bots={this.state.bots.filter(bot => bot.enlisted === true)}
          handleClick={(bot) => this.updateBot({bot: bot, key: 'enlisted', value: false})}
        />
        {this.state.selected ?
          <BotSpecs
            bot={this.state.selected}
            handleEnlist={(bot) => this.updateBot({bot: bot, key: 'enlisted', value: true})}
            deselect={this.deselect}
          /> :
          <BotCollection
            bots={this.state.currentBots.filter(bot => bot.enlisted !== true)}
            handleClick={this.selectBot}
          /> }
      </div>
    );
  }

}

export default BotsPage;
