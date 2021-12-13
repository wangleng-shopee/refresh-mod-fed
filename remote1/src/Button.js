import React from "react";

export default function Button () {
  const handleClick = React.useCallback(() => {
    console.log('Button clicked!');
  });

  return <button onClick={handleClick}>from remote1: log console</button>;
}
