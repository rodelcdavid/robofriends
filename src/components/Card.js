import './Card.css'

const Card = (props) => {

    const {name, email, id} = props;
    return (
    <div className='tc w5 bg-light-green dib br3 pa3 ma2 grow ba bw1 shadow-5'>
        <img alt='robots' src={`https://robohash.org/${id}?size=200x200`}/>
        <div>
            <h3>{name}</h3>
            <p>{email}</p>
        </div>
    
    </div>
    );
}

export default Card;

