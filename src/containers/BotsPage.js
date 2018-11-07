import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"

const API = "https://bot-battler-api.herokuapp.com/api/v1/bots";

class BotsPage extends React.Component {
  //start here with your code for step one

  constructor(){
      super();
      this.state = {
          army: [],
          bots: []
      }
  }

  componentDidMount(){
      fetch(API)
      .then(resp => resp.json())
      .then(bots => this.setState({bots:bots}));

  }


  addBotToArmy = (bot) => {
      if(this.state.army.includes(bot)){
          alert(`Bot ${bot.name} already in your army!`);
      }
      else{

          this.setState({
              army:[...this.state.army,bot]
          });
      }
  }

  removeBotFromArmy = (bot) => {
      console.log("remove");
      const position = this.state.army.indexOf(bot);
      let copy = [...this.state.army]
      copy.splice(position,1);
      this.setState({
          army: copy
      });
  }

  render() {
    return (
      <div>
        <YourBotArmy army={this.state.army} handleRemove={this.removeBotFromArmy}/>
        <BotCollection bots={this.state.bots} handleAdd={this.addBotToArmy}/>
      </div>
    );
  }

}

export default BotsPage;
