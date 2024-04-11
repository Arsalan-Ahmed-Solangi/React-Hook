import React, { useContext } from 'react'
import { Data } from './HookUseContext'

function NestedChild() {
  const name = useContext(Data);
  return (
    <div>NestedChild  {name}</div>
  )
}

export default NestedChild