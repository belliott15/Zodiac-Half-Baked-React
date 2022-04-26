import './ZodiacCard.css';

export default function ZodiacCard({ name, dates }) {
  {/* in this component,  use the `name` and `dates` props to render the name and 
dates of the sign, as well as load the correct image  from the public directory */}
  return <div className='zodiac-card'>
    <img src={`./images/${name}.png`}/>
    <h2 style = {{ fontFamily: 'cursive' }}>{ name }</h2>
    <h4 style = {{ fontFamily: 'cursive' }}>{ dates }</h4>
  </div>;
}
