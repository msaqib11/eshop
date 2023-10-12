'use client'
import React, { useState } from 'react'

const Quantity:React.FC<{qty:number}> = ({qty}) => {
    const [quantity, setQuantity] = useState<number>(qty);
    const handleQuanity = (operator: string) => {
        if (operator == "+") {
          setQuantity(quantity + 1);
        } else if (operator == "-" && quantity > 1) {
          setQuantity(quantity - 1);
        }
      };
    return (
        <>

            <div className="flex items-center gap-x-4">
                <button
                    className="w-8 h-8 bg-slate-50 border border-black rounded-full"
                    onClick={() => handleQuanity("-")}
                >
                    -
                </button>
                <span>{quantity}</span>
                <button
                    className="w-8 h-8 bg-slate-50 border border-black rounded-full"
                    onClick={() => handleQuanity("+")}
                >

                    +
                </button>
            </div>
        </>
    )
}

export default Quantity