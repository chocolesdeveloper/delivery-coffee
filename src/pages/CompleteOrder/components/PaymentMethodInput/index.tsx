import { PaymentMethodContainer, ContenteContainer } from "./styles"
import React, { InputHTMLAttributes, forwardRef } from "react"

type PaymentMethodInputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: React.ReactNode
  label: string
}

export const PaymentMethodInput = forwardRef<HTMLInputElement, PaymentMethodInputProps>(
  ({ id, icon, label, ...props }, ref) => {
    return (
      <PaymentMethodContainer>
        <input id={id} type="radio" {...props} name="paymentMethod" ref={ref} />

        <label htmlFor={id}>
          <ContenteContainer>
            {icon}
            {label}
          </ContenteContainer>
        </label>
      </PaymentMethodContainer>
    )
  }
)
