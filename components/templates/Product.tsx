'usec client'
import React from 'react'
import { Controller, UseFormReturn } from 'react-hook-form'
import { ProductList } from '../organisms'

interface ProductProps {
  stateStore: UseFormReturn<any, any>
}
const Product: React.FC<ProductProps> = ({ stateStore }) => {
  return (
    <div className="py-6">
      <Controller
        name="categories"
        control={stateStore.control}
        render={({ field }) => {
          return (
            <>
              {field.value.map((item) => (
                <ProductList id={item.id} title={item.name} />
              ))}
            </>
          )
        }}
      />
    </div>
  )
}

export default Product
