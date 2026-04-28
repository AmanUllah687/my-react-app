function Cup({guest}) {
  return <h2>Tea Cup for guest #{guest}</h2>
}

export default function TeaSet() {
  return (
    <>
    <Cup  guest={1}/>
    <Cup  guest={2}/>
    <Cup  guest={3}/>
    </>
  )
}