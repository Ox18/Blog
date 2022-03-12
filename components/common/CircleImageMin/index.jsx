import { Image } from '@chakra-ui/react'
import React from 'react'

const CircleImageMin = () => {
  return (
    <Image
            src={"/images/profile/profile.jpg"}
            width="32px"
            height="32px"
            alt='profile'
            loading={"lazy"}
            rounded="full"
            cursor={'pointer'}
    />
  )
}

export default CircleImageMin