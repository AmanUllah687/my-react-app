import { people } from "./data";
import { getImageUrl } from "./utils";
let chemist = [];
let everyOneElse = [];
people.forEach(person => {
  if(person.profession === 'chemist') {
    chemist.push(person);

  } else {
    everyOneElse.push(person);
  }
});
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

  return (
    <article>
      <h1>scientists</h1>
      <ListSection 
      tittle= 'chemists'
      people={chemist}
      />
      <ListSection 
      tittle= 'everyOneElse'
      people={everyOneElse}
      />
    </article>
  )
}