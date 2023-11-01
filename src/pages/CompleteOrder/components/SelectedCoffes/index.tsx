import { TitleText } from "../../../../components/Typography"
import { useCart } from "../../../../hooks/useCart"
import { CoffeeCartCard } from "../CoffeeCartCard"
import { ConfirmationSection } from "./ConfirmationSection"
import { DetailsContainer, SelectedCoffessContainer } from "./styles"

export function SelectedCoffes() {
  const { cartItems } = useCart()

  return (
    <SelectedCoffessContainer>
      <TitleText size="xs" color="subtitle">
        Café selecionados
      </TitleText>

      <DetailsContainer>
        {cartItems.map((coffee) => {
          return <CoffeeCartCard key={coffee.id} coffee={coffee} />
        })}
        <ConfirmationSection />
      </DetailsContainer>
    </SelectedCoffessContainer>
  )
}
