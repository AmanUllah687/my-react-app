import { people } from "./data";
import { getImageUrl } from "./utils";

export default function List() {
  const chemist = people.filter(person => 
    person.profession === 'chemist'
  );
  const everyOneElse = people.filter(person => 
    person.profession !== 'chemist'
  );
  return (
    <article>
      <h1>scientists</h1>
      <h2>Chemists</h2>
      <ul>{chemist.map(person =>
        <li key={person.id}>
        <img 
        src={getImageUrl(person)}
        alt={person.name} />
        <p>
          <b>{person.name}:</b>
          {"" + person.profession + "" } 
          known for {person.accomplishment}
        </p>
        </li>
      )}</ul>
      <h2>everyOneElse</h2>
      <ul>{everyOneElse.map(person =>
        <li key={person.id}>
        <img 
        src={getImageUrl(person)}
        alt={person.name} />
        <p>
          <b>{person.name}:</b>
          {"" + person.profession + "" } 
          known for {person.accomplishment}
        </p>
        </li>
      )}</ul>
    </article>
  )
}