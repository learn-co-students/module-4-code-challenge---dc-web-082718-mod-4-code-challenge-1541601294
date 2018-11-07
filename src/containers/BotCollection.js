import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  generateAddBots = () => {
      return this.props.bots.map(bot => {
          return (<BotCard key={bot.id} bot={bot} handleClick={this.props.handleAdd}/>)
      })

  }

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  <h1>Collection of all bots</h1>
               {this.generateAddBots()}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
