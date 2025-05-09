import styled from "styled-components";

const TextArea = styled.textarea`
  display: flex;
  min-height: 80px;
  width: 100%;
  border-radius: 0.375rem; /* rounded-md */
  border: 1px solid var(--color-input, #d1d5db); /* border-input */
  padding: 0.5rem 0.75rem; /* py-2 px-3 */
  font-size: 0.875rem; /* text-sm */
  resize: vertical;
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
    border-color: var(--color-ring, #3b82f6); /* focus-visible:ring-ring */
  }

  &:disabled {
    cursor: not-allowed; /* disabled:cursor-not-allowed */
    opacity: 0.5; /* disabled:opacity-50 */
  }
`;

export default TextArea;
