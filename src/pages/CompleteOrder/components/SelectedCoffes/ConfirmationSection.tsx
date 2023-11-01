import { Button } from "../../../../components/Button"
import { RegularText } from "../../../../components/Typography"
import { useCart } from "../../../../hooks/useCart"
import { FormatMoney } from "../../../../utils/formatMoney"
import { ConfirmationSectionContainer } from "./styles"

const DELIVERY_PRICE = 3.5

export function ConfirmationSection() {
  const { cartItemsTotal, cartQuantity } = useCart()

  const formattedTotalItem = FormatMoney(cartItemsTotal)
  const formattedTotalWithDelivery = FormatMoney(cartItemsTotal + DELIVERY_PRICE)

  return (
    <ConfirmationSectionContainer>
      <div>
        <RegularText size="s">Total de itens</RegularText>
        <RegularText>R$ {formattedTotalItem}</RegularText>
      </div>
      <div>
        <RegularText size="s">Entrega</RegularText>
        <RegularText>R$ 3,50</RegularText>
      </div>
      <div>
        <RegularText size="l" weight="700" color="subtitle">
          Total
        </RegularText>
        <RegularText size="l" weight="700" color="subtitle">
          R$ {formattedTotalWithDelivery}
        </RegularText>
      </div>

      <Button text="Conrfimar Pedido" disabled={cartQuantity <= 0} type="submit" />
    </ConfirmationSectionContainer>
  )
}
