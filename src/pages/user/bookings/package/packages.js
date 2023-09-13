import React from 'react'
import { UserContextProvider } from '../../UserContextProvider'
import UserConsumer from '../../userConsumer'

export default function Packages() {
  return (
    <UserContextProvider>
        <UserConsumer />
    </UserContextProvider>
  )
}
