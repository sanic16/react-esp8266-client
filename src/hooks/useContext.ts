import { useContext } from "react";
import blockContext from "../context/block-context";

export const useBlockContext = () => useContext(blockContext)