import { useState, useEffect } from 'react';

export function useActiveOptionNavBar(initialActiveOption) {
  const [activeOptionNavBar, setActiveOptionNavBar] =
    useState(initialActiveOption);

  useEffect(() => {
    const activeOption = document.getElementById(activeOptionNavBar);
    activeOption.classList.add('active');
  }, [activeOptionNavBar]);
  return setActiveOptionNavBar;
}
