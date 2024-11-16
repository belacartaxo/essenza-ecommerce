import React, { useState } from 'react'

const AddProduct = () => {
  const [category, setCategory] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault() // Inpede o recarregamento da página

    // Verifique se a categoria não está vazia
    if (!category) {
      alert("Please enter a category name.")
      return
    }

    try {
      // Envia a categoria para o backend
      console.log("esperando")
      const response = await fetch('http://localhost:5000/categories/add', { 
        /*
          O fetch é usado para fazer uma requisição HTTP
          Envia uma requisição POST para o endpoint /api/categories
        */
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ category_name: category }), //transforma o objeto em uma string json
      })

      console.log("respondeu")

      if (response.ok) { //Essa propriedade verifica se o status da resposta HTTP é 2xx (ou seja, uma requisição bem-sucedida).
        alert('Category added successfully!')
      } else {
        alert('Failed to add category.')
      }
    } catch (error) {
      console.error("Error adding category:", error)
      alert('An error occurred while adding the category.')
    }
  }

  return (
    <div className='flex flex-col'>
      Add product
      <input 
        type="text" 
        name="category-name" 
        id="category-name" 
        placeholder='Category name' 
        value={category} onChange={(e) => setCategory(e.target.value)} 
      />
      <button 
        type="submit" 
        className='bg-gray-600 w-36'
        onClick={handleSubmit}
      >
        Add
      </button>
    </div>
  )
}

export default AddProduct
