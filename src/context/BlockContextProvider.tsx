import { useState } from "react"
import blockContext from "./block-context"

const BlockContextProvider = (
    {
        children
    }:{
        children: React.ReactNode
    }
) => {
  const [isBlock, setIsBlock] = useState(false)
  const block = () => setIsBlock(true)
  const unblock = () => setIsBlock(false)  
  return (
    <blockContext.Provider
        value={{
            isBlock,
            block,
            unblock
        }}
    >
        { children }
    </blockContext.Provider>
  )
}

export default BlockContextProvider