import avatar from '../../assets/profile_bg.webp'

const HeroesListItem = ({name, description, element, usersName, onDelete}) => {

    let elementClassName;

    switch (element) {
        case 'fire':
            elementClassName = 'bg-danger bg-gradient';
            break;
        case 'water':
            elementClassName = 'bg-primary bg-gradient';
            break;
        case 'wind':
            elementClassName = 'bg-success bg-gradient';
            break;
        case 'earth':
            elementClassName = 'bg-secondary bg-gradient';
            break;
        default:
            elementClassName = 'bg-warning bg-gradient';
    }

    return (
<li 
  className={`card flex-row mb-4 shadow-lg text-white ${elementClassName}`}>
    
  {/* <img src="http://www.stpaulsteinbach.org/wp-content/uploads/2014/09/unknown-hero.jpg" 
       className="img-fluid w-25 d-inline" 
       alt="unknown hero" 
       style={{'objectFit': 'cover'}}/> */}
    <img src={avatar}
       className="img-fluid w-25 d-inline" 
       alt="unknown hero" 
       style={{'objectFit': 'cover', opacity: '0.8px'}}/>
  <div className="card-body">
      <h3 className="card-title" >{name}</h3>
      {/* <h3 className={`card flex-row shadow-lg text-white ${elementClassName}`} >{name}</h3> */}
      <p className="card-text text-black">{description}</p>
      <h5>{usersName}</h5>
  </div>
  <span className="position-absolute top-0 start-100 translate-middle badge border rounded-pill bg-light" onClick={onDelete}>
      <button type="button" className="btn-close btn-close" aria-label="Close"></button>
  </span>
</li>
    )
}

export default HeroesListItem;