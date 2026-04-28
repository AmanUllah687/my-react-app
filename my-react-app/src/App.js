import { people } from "./data";
import { getImageUrl } from "./utils";
function ListSection({tittle, people}) {
  return (
    <>
     <h2>{tittle}</h2>
      <ul>{people.map(person =>
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
    </>
  );
}
export default function List() {
  const chemists = people.filter(person => 
    person.profession === 'chemist'
  );
  const everyOneElse = people.filter(person => 
    person.profession !== 'chemist'
  );
  return (
    <article>
      <h1>scientists</h1>
      <ListSection 
      tittle= 'chemists'
      people={chemists}
      />
      <ListSection 
      tittle= 'everyOneElse'
      people={everyOneElse}
      />
    </article>
  )
}