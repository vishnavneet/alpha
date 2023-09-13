import React from 'react'
import { UserContextProvider } from '../../UserContextProvider'
import UserConsumer from '../../userConsumer'

export default function Movies(children) {
  return (
    <UserContextProvider>
      <UserConsumer />
  </UserContextProvider>
  )
}
