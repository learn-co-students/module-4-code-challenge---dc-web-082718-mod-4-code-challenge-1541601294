import React from 'react'

const Navbar = props => {
  return (
    <div className="ui three item menu">
      <a className="item"
        onClick={props.renderAllBots}>All Bots</a>
      <div className="ui dropdown item simple">
        Sort Bots
        <i className="dropdown icon"></i>
        <div className="menu">
          <div
            className="item"
            onClick={() => props.sortBots('health')}
          >Health</div>
          <div
            className="item"
            onClick={() => props.sortBots('damage')}
          >Damage</div>
          <div
            className="item"
            onClick={() => props.sortBots('armor')}
          >Armor</div>
        </div>
      </div>
      <div className="ui dropdown item simple">
        Filter Bots
        <i className="dropdown icon"></i>
        <div className="menu">
          <div className="item"
            onClick={() => props.filterBots({field: 'bot_class', value: 'Support'})}
          >Support</div>
          <div className="item"
            onClick={() => props.filterBots({field: 'bot_class', value: 'Assault'})}
          >Assault</div>
          <div className="item"
            onClick={() => props.filterBots({field: 'bot_class', value: 'Defender'})}
          >Defender</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
