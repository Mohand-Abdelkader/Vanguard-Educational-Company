import styled from "styled-components";

const Input = styled.input`
  height: 2.5rem; /* h-10 */
  width: 100%; /* w-full */
  border-radius: 0.375rem; /* rounded-md */
  border: 1px solid var(--color-input, #d1d5db); /* border-input with fallback */
  background-color: var(--color-background, #fff); /* bg-background */
  padding: 0.5rem 0.75rem; /* py-2 px-3 */
  font-size: 1rem; /* text-base */
  outline: none;
  transition: box-shadow 0.2s, border-color 0.2s;

  &::placeholder {
    color: var(
      --color-muted-foreground,
      #9ca3af
    ); /* placeholder:text-muted-foreground */
  }

  &:focus-visible {
    box-shadow: 0 0 0 2px var(--color-ring, #3b82f6); /* focus-visible:ring-2 */
    outline: none;
    border-color: var(--color-ring, #3b82f6); /* focus-visible:ring-ring */
  }

  &:disabled {
    cursor: not-allowed; /* disabled:cursor-not-allowed */
    opacity: 0.5; /* disabled:opacity-50 */
  }

  @media (min-width: 768px) {
    font-size: 0.875rem; /* md:text-sm */
  }

  &::file-selector-button {
    border: none; /* file:border-0 */
    background: transparent; /* file:bg-transparent */
    color: var(--color-foreground, #000); /* file:text-foreground */
    font-size: 0.875rem; /* file:text-sm */
    font-weight: 500; /* file:font-medium */
  }
`;

export default Input;
