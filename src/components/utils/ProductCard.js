import React from 'react'
import Button from './Button'
export default function ProductCard({index,title,description,images,price}) {
  return (
    <>
      <div class="max-w-sm rounded overflow-hidden shadow-lg"key={index}>
        <img class="w-full" src={images} alt="Sunset in the mountains"/>
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">
              {title}</div>

            <p class="text-gray-700 text-base">
            {description}
            </p>
        </div>
        <div class="px-6 pt-4 pb-2 flex justify-between ">
        <p class="text-3xl font-medium text-gray-900 dark:text-white">${price} <span class="uppercase">identity</span> primitive.</p>
        <Button title={"Add To Card"}/>
        <Button title={"Buy Now"}/>
        </div>
</div>
    </>
  )
}
