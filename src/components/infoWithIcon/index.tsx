import { IconContainer, InfoWithIconContainer } from "./styles"

interface InfoWithIconProps {
  icon: React.ReactNode
  text: string | React.ReactNode
  iconBg: string
}

export function InfoWithIcon({ icon, text, iconBg }: InfoWithIconProps) {
  return (
    <InfoWithIconContainer>
      <IconContainer iconBg={iconBg}>{icon}</IconContainer>
      {typeof text === "string" ? <p>{text}</p> : text}
    </InfoWithIconContainer>
  )
}
