import React from "react";
import BotCard from "../components/BotCard";
import { Link } from 'react-router-dom';

class BotCollection extends React.Component {
  //your code here





  generateAddBots = () => {
      return this.props.bots.map(bot => {
          return ( <Link key={bot.id} to={`/details`}><BotCard key={bot.id} bot={bot} handleClick={this.props.handleClick}/></Link>

          )
      })

  }

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  <h1>Collection of all bots</h1>  
    		</div>
            <div className="row">
                {this.generateAddBots()}
            </div>
  	  </div>
  	);
  }

};

export default BotCollection;
