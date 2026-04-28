let guest = 0;
function Cup() {
  // Bad changing a prexiting variable 
  guest = guest + 1;
  return <h2>Tea Cup for guest #{guest}</h2>
}

export default function TeaSet() {
  return (
    <>
    <Cup />
    <Cup />
    <Cup />
    </>
  )
}