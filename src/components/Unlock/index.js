// Write your code here
import {useState} from 'react'

import {MainBacground, ButtonDesign, Para, Image} from './styledComponents'

const Unlock = () => {
  const [initialdisplay, toggleDisplay] = useState(true)

  const onChangestatus = event => {
    toggleDisplay(prevState => !prevState)
  }

  const textStatus = initialdisplay ? 'Locked' : 'Unlocked'
  const imageUrl = initialdisplay
    ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png '
  const imageAlt = initialdisplay ? 'lock' : 'unlock'
  const buttontext = initialdisplay ? 'Unlock' : 'Lock'

  return (
    <MainBacground>
      <Image src={imageUrl} alt={imageAlt} />
      <Para>Your Device is {textStatus}</Para>
      <ButtonDesign onClick={onChangestatus}>{buttontext}</ButtonDesign>
    </MainBacground>
  )
}

export default Unlock
