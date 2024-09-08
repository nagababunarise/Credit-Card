import {useState} from 'react'
import {
  MainContainer,
  CreditCardContainer,
  Heading,
  NumberText,
  HolderNameText,
  CardImage,
  HolderName,
  PaymentContainer,
  PaymentInputCard,
  InputEle,
  PaymentHeading,
} from './styledComponents'

const CreditCard = () => {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')

  const onNameHandle = e => {
    setName(e.target.value)
  }

  const onNumberHandle = e => {
    setNumber(e.target.value)
  }
  return (
    <MainContainer>
      <CreditCardContainer>
        <Heading>CREDIT CARD</Heading>
        <CardImage data-testid="creditCard">
          <NumberText>{number}</NumberText>
          <HolderNameText>CARDHOLDER NAME</HolderNameText>
          <HolderName>{name.toUpperCase()}</HolderName>
        </CardImage>
      </CreditCardContainer>

      {/* This is the payment method Code */}
      <PaymentContainer>
        <PaymentInputCard>
          <PaymentHeading>Payment Method</PaymentHeading>
          <InputEle
            type="text"
            onChange={onNumberHandle}
            placeholder="Card Number"
            value={number}
          />
          <InputEle
            type="text"
            placeholder="Cardholder Name"
            value={name}
            onChange={onNameHandle}
          />
        </PaymentInputCard>
      </PaymentContainer>
    </MainContainer>
  )
}
export default CreditCard
