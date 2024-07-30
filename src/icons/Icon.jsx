import React from 'react'
import { ImCross } from "react-icons/im";
import { FaRegCircle } from "react-icons/fa";
import { FaPen } from "react-icons/fa";

const Icon = ({name}) => {
    if(name === "circle")
  return <FaRegCircle/>
  else if(name === "cross")
    return <ImCross/>
    else
     return <FaPen />
}

export default Icon