import React, { useState } from 'react'

export const CartContext = React.createContext({} as any)

export default function CartProvider({children}:{children:React.ReactNode}){
  const [items, setItems] = useState<any[]>([])

  function add(product:any, qty=1){
    setItems(prev=>{
      const found = prev.find(i=> i.product.id===product.id)
      if(found) return prev.map(i=> i.product.id===product.id ? {...i, qty: i.qty+qty} : i)
      return [...prev, { product, qty }]
    })
  }

  function remove(productId:any){
    setItems(prev=> prev.filter(i=> i.product.id !== productId))
  }

  function updateQty(productId:any, qty:number){
    setItems(prev=> prev.map(i=> i.product.id===productId ? {...i, qty: Math.max(0, qty)} : i).filter(i=> i.qty>0))
  }

  function clear(){
    setItems([])
  }

  return (
    <CartContext.Provider value={{ items, add, remove, updateQty, clear }}>
      {children}
    </CartContext.Provider>
  )
}
