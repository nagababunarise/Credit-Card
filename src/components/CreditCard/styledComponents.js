import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  margin: 0px 12% 0px 12%;
  box-shadow: 2px 4px 4px 5px #c3cad9;
  @media screen and (max-width: 576px) {
    flex-direction: column;
    margin: 0;
  }
  @media screen and (min-width: 768px) {
    margin: 0;
  }
`
export const CreditCardContainer = styled.div`
  width: 50%;
  height: 100%;
  min-height: 100vh;
  background: #3b4b69;
  color: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 30px 20px 30px 20px;
  @media screen and (max-width: 576px) {
    width: 100%;
    height: 100%;
    padding: 20px 10px 20px 10px;
    min-height: 100%;
  }
`
export const Heading = styled.h1`
  font-size: 30px;
  border-bottom-style: solid;
  border-color: #ffd773;
  letter-spacing: 1px;
  border-width: 4px;
  padding-bottom: 10px;
`
export const CardImage = styled.div`
  background: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  border-radius: 20px;
  background-size: cover;
  padding: 100px 10% 10% 10%;
  width: 100%;
  margin: 40% 20px 0px 20px;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media screen and (max-width: 576px) {
    padding: 20px 5% 5% 5%;
    margin: 50px 10px 0px 10px;
    display: flex;
    height: 280px;
    flex-direction: column;
    justify-content: center;
  }
`
export const NumberText = styled.p`
  color: #fff;
  font-size: 30px;
  font-weight: 700;
  padding-bottom: 80px;
  letter-spacing: 1px;

  @media screen and (max-width: 576px) {
    padding-top: 30px;
  }
`
export const HolderNameText = styled.p`
  color: #d3d9e0;
  font-size: 13px;
  letter-spacing: 0.5px;
  font-weight: 400;
`
export const HolderName = styled.p`
  font-size: 18px;
  font-weight: 400;
  padding-top: 10px;
  letter-spacing: 1px;
`

// ---------------------------------This is the Payment Method Code---------------->

export const PaymentContainer = styled.div`
  background: #ffffff;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 30px 0px 30px;
  @media screen and (max-width: 576px) {
    width: 100%;
    height: 50%;
    padding-bottom: 50px;
  }
`

export const PaymentInputCard = styled.div`
  background: #fff;
  width: 100%;
  padding: 8% 8% 8% 5%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: 2px 4px 4px 5px #c3cad9;
  margin: 0px 20px 0px 20px;
  @media screen and (max-width: 576px) {
    margin: 30px 15px 30px 15px;
    border-radius: 10px;
  }
`
export const PaymentHeading = styled.h1`
  color: #344e7a;
  font-size: 30px;
`
export const InputEle = styled.input`
  padding: 8px 0px 8px 5px;
  border-color: #c3cad9;
  outline: none;
  border-width: 0.5px;
  width: 100%;
  margin-top: 20px;
`
