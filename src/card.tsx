import { CardContainer } from "./styles"

interface CardProps {
  text: string
}

export const Card = (props: CardProps) => { 
  const { text } = props;

  return (
    <CardContainer>
      {text}
    </CardContainer>
  )
}