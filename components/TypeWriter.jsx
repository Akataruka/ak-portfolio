"use client";

import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const TypeWritercursor = ({words, speed}) => {
  return (
    <Typewriter
            words={words}
            cursor
            loop={false}
            cursorStyle='_'
            typeSpeed={speed}
            deleteSpeed={50}
            delaySpeed={1500}
          />
  )
}

export default TypeWritercursor