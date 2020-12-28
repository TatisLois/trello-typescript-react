import { useState } from 'react';
import { NewItemForm } from './new-item-form';
import { AddItemButton } from './styles';

interface AddNewItemProps {
  onAdd(text: string): void,
  toggleButtonText: string,
  dark?: boolean
}

export const AddNewItem = (props: AddNewItemProps) => {
  const [ showForm, setShowForm ] = useState(false);
  const onAdd = props?.onAdd;
  const toggleButtonText = props?.toggleButtonText;
  const dark = props?.dark;

  if (showForm) {
    return (
      <NewItemForm onAdd={(text) => {
        onAdd(text);
        setShowForm(false);
      }} />
    )
  }

  return (
    <AddItemButton dark={dark} onClick={() => setShowForm(true)}>
      { toggleButtonText }
    </AddItemButton>
  )
}