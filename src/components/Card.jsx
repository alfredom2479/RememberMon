import PropTypes from 'prop-types';

function Card({onClick,pokeName, pokeImgURI}){

  console.log(pokeName);
  return(
    <div className="card" onClick={onClick}>
       <div className="img-container">
          <img src={pokeImgURI} alt={pokeName} height="200px"></img>
        </div> 
        <div className="name-container">
          {pokeName}
          {/* {children} */}
        </div>
    </div>
  )
}

Card.propTypes ={
  children : PropTypes.any,
  onClick : PropTypes.func,
  pokeName : PropTypes.string,
  pokeImgURI : PropTypes.string 
}
export default Card;