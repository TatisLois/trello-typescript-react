import { PropsWithChildren } from "react"
import { AddNewItem } from './add-new-item';
import { ColumnContainer, ColumnTitle } from './styles';

interface ColumnProps {
  text?: string,
}

// TODO: remove
const x = console.log

export const Column = (props: PropsWithChildren<ColumnProps>) => {
  const { text, children } = props;

  return (
    <ColumnContainer>
      <ColumnTitle>{ text }</ColumnTitle>
      { children }
      <AddNewItem
        toggleButtonText="+ Add another task"
        onAdd={x}
        dark
      />
    </ColumnContainer>
  )
}