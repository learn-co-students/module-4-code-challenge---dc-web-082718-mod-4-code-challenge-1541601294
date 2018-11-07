import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...


  generateRemoveBots = () => {
      return this.props.army.map(bot => {
          return (<BotCard key={bot.id} bot={bot} handleClick={this.props.handleRemove}/>)
      })

  }

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
          <h1>Your Bot Army</h1>
          </div>
          <div className="row bot-army-row">
            {this.generateRemoveBots()}
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
