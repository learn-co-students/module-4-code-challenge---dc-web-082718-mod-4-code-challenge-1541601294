import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"
import BotSpecs from "../components/BotSpecs"
import { BrowserRouter as Router, Route } from 'react-router-dom';


const API = "https://bot-battler-api.herokuapp.com/api/v1/bots";

class BotsPage extends React.Component {
  //start here with your code for step one

  constructor(){
      super();
      this.state = {
          army: [],
          bots: [],
          selected: {}
      }
  }

  componentDidMount(){
      fetch(API)
      .then(resp => resp.json())
      .then(bots => this.setState({bots:bots}));

  }


  addBotToArmy = (bot) => {
      if(Object.keys(bot).length === 0 ){
          alert(`Select a bot first!`);
      }
      else if(this.state.army.includes(bot)){

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

  selectBot = (bot) => {
      this.setState({selected: bot})
      console.log("select");
  }

  listOfBots = () => {

      return <BotCollection bots={this.state.bots} handleClick={this.selectBot}/>
  };


  specs = () => {

      return <BotSpecs bot={this.state.selected} handleAdd={this.addBotToArmy} />
  }

  render() {
    return (
      <div>

        <YourBotArmy army={this.state.army} handleRemove={this.removeBotFromArmy}/>

         <Router>
            <React.Fragment>
                <Route exact path="/" render={this.listOfBots} />
                <Route path="/details" render={this.specs} />
            </React.Fragment>
        </Router>
      </div>
    );
  }

}

export default BotsPage;
