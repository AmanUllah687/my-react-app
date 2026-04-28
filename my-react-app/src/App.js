function Cup({guest}) {
  return <h2>Tea Cup for guest #{guest}</h2>
}

export default function TeaSet() {
  const cups = [];
  for(let i=1; i<=12;i++) {
    cups.push(<Cup key={i} guest={i} />);
  }
  return cups;
}