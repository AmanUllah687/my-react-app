import { useState } from "react";

function RenderFunctionComponents() {
  const [firstName, setFirstName] = useState("Rudi");
  const [lastName, setLastName] = useState("Yardley");

  return (
    <div>
      <h1>
        {firstName} {lastName}
      </h1>

      <button onClick={() => setFirstName("Fred")}>
        Fred
      </button>
    </div>
  );
}

export default RenderFunctionComponents;