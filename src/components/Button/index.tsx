import { ComponentPropsWithoutRef } from "react"
import { ButtonContainer } from "./styles"

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  text: string | number
}

export function Button({ text, ...props }: ButtonProps) {
  return <ButtonContainer {...props}>{text}</ButtonContainer>
}
