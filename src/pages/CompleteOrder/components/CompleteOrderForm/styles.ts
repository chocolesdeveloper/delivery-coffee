import styled from "styled-components"
import { SectionBaseStyle } from "../../styles"

export const CompleteOrderFormContainer = styled.div`
  width: 40rem;

  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const FormSectionContainer = styled(SectionBaseStyle)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const AddressFormContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 12.5rem 17.25rem 3.75rem;
  column-gap: 0.75rem;
  row-gap: 1rem;

  .cep {
    grid-column: 1/2;
  }

  .street {
    grid-column: 1/4;
  }

  .complement {
    grid-column: 2/4;
  }
`

export const PaymentMethodOptionsContainer = styled.div`
  display: grid;

  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;

  > p {
    grid-column: 1/4;
    color: ${({ theme }) => theme.colors["base-error"]};
  }
`
