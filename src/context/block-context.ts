import { createContext } from "react";

const blockContext = createContext<BlockContext>({
    isBlock: false,
    block: () => {},
    unblock: () => {}
})

export default blockContext