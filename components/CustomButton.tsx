'use client'

import { CustomButtonProps } from '@/types'
import React from 'react'

export default function CustomButton({title, containerStyles, handleClick, btnType}: CustomButtonProps) {
  return (
    <button
    disabled={false}
    type={btnType ||'button'}
    className={`custom-btn ${containerStyles}`}
    onClick={handleClick}
    >
    <span>{title}</span>
      
  </button>
  )
}
