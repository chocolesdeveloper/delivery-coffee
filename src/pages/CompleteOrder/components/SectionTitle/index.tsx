import { RegularText } from "../../../../components/Typography"
import { SectionTitleContainer } from "./styles"

interface SectionTitileProps {
  title: string
  subtitle: string
  icon: React.ReactNode
}

export function SectionTitle({ title, subtitle, icon }: SectionTitileProps) {
  return (
    <SectionTitleContainer>
      {icon}
      <div>
        <RegularText color="subtitle">{title}</RegularText>
        <RegularText size="s">{subtitle}</RegularText>
      </div>
    </SectionTitleContainer>
  )
}
