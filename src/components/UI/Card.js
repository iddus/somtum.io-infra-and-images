import PropTypes from "prop-types"; // ES6
// https://www.npmjs.com/package/prop-types

const style = {
  // width: "18rem",
};

const Card = ({ imgSrc, imgAlt, title, description, buttonText }) => {
  // https://getbootstrap.com/docs/5.0/components/card/#example
  return (
    <div className="card" style={style}>
      <img src={imgSrc} className="card-img-top" alt={imgAlt}></img>
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <article>
          <p className="card-text">{description}</p>
          <a href="#" className="btn btn-primary">
            {buttonText}
          </a>
        </article>
      </div>
    </div>
  );
};

Card.propTypes = {
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default Card;
