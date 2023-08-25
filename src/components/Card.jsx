import PropTypes from 'prop-types';

function Card({children}){

  return(
    <div className="card">
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
  children : PropTypes.any
}
export default Card;