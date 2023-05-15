import React, { forwardRef } from 'react';

export default forwardRef<HTMLInputElement, React.HTMLProps<HTMLInputElement>>(
  function SearchInput(props, ref) {
    return (
      <input
        ref={ref}
        placeholder="Looking for something?"
      />
    );
  }
);
