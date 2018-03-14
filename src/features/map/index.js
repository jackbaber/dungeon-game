import React from 'react'
import { connect } from 'react-redux'
import { SPRITE_SIZE } from '../../config/constants'

import './styles.css'

function getTileSprite(type){
  switch(type){
    case 0: 
      return 'grass'
    case 5: 
      return 'rock'
    case 6: 
      return 'tree'
    default:
      return
  }
}
const MapTile = (props) => (
  <div
    className={`tile ${getTileSprite(props.tile)}`}
    style={{
      height: SPRITE_SIZE,
      width: SPRITE_SIZE,
    }}
  >
  </div>
)

const MapRow = (props) => (
  <div
    className="row"
    style={{
      height: SPRITE_SIZE
    }}
  >
  {
    props.tiles.map( tile => <MapTile tile={tile}/>)
  }
  </div>

)


const Map = (props) => (
  <div style={{
    position: 'relative',
    top: '0px',
    left: '0px',
    width: '800px',
    height: '400px',
    backgroundColor: 'green',
    border: '4px solid white'
  }}>
  {
    props.tiles.map( row => <MapRow tiles={row} />)
  }
  </div>
)

function mapStateToProps(state){
  return {
    tiles: state.map.tiles,
  }
}


export default connect(mapStateToProps)(Map)