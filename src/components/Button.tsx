import { clsx } from 'clsx'
import React from 'react';
import { Slot } from '@radix-ui/react-slot';
 
export interface ButtonProps{

  children: React.ReactNode;
  asChild?: boolean;
}

export function Button({ children, asChild}: ButtonProps) {
  const Comp = asChild ? Slot : "button"


  return (
    <Comp 
      className={clsx(
        'py-4 px-3 bg-cyan-500 rounded  font-semibold text-black text-sm w-full transition-colors hover:bg-cyan-300 focus:ring-2 ring-white',
      )}
    >
      {children}
    </Comp>
  )
}