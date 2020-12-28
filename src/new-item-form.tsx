import { useState } from 'react';
import { NewItemFormContainer, NewItemButton, NewItemInput } from './styles';

interface NewItemFormProps {
  onAdd(text: string): void
}

export const NewItemForm = (props: NewItemFormProps) => {
  const [ text, setText ] = useState("");
  const onAdd = props?.onAdd;

  return (
    <NewItemFormContainer>
      <NewItemInput value={text} onChange={event => setText(event.target.value)} />
        <NewItemButton onClick={() => onAdd(text)}>
          <p>Create</p>
        </NewItemButton>
    </NewItemFormContainer>
  )
}