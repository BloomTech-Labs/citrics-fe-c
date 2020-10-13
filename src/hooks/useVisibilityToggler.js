import React, { useState } from 'react';

function useVisibilityToggler(
  component,
  altComponent = null,
  visability = false
) {
  const [visible, setVisibility] = useState(() => visability);
  return [visible ? component : altComponent, () => setVisibility(v => !v)];
}

export default useVisibilityToggler;
