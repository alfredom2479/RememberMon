import PropTypes from 'prop-types';

function Card({children, onClick}){

  return(
    <div className="card" onClick={onClick}>
       <div className="img-container">
          Image
        </div> 
        <div className="name-container">
          Name
          {children}
        </div>
    </div>
  )
}

Card.propTypes ={
  children : PropTypes.any,
  onClick : PropTypes.func
}
export default Card;