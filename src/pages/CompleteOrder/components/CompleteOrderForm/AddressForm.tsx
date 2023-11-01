import { useFormContext } from "react-hook-form"
import { Input } from "../../../../components/Input"
import { AddressFormContainer } from "./styles"

export function AddressForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <AddressFormContainer>
      <Input
        placeholder="CEP"
        type="number"
        className="cep"
        {...register("cep")}
        error={errors.cep && String(errors.cep.message)}
      />
      <Input
        placeholder="Rua"
        type="text"
        className="street"
        {...register("street")}
        error={errors.street && String(errors.street.message)}
      />
      <Input
        placeholder="Número"
        type="number"
        {...register("number")}
        error={errors.number && String(errors.number.message)}
      />
      <Input
        placeholder="Complemento"
        type="text"
        className="complement"
        {...register("complement")}
        error={errors.complement && String(errors.complement.message)}
        rightText="Opcional"
      />
      <Input
        placeholder="Bairro"
        type="text"
        {...register("district")}
        error={errors.district && String(errors.district.message)}
      />
      <Input
        placeholder="Cidade"
        type="text"
        {...register("city")}
        error={errors.city && String(errors.city.message)}
      />
      <Input
        placeholder="UF"
        type="text"
        {...register("uf")}
        error={errors.uf && String(errors.uf.message)}
      />
    </AddressFormContainer>
  )
}
