import React, {useEffect} from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


const Product = () => {
    const [Product, setProduct] = useState([])

    const getProduct = async () => {
        try {
            let response = await axios.get("http://localhost:5000/product")
            setProduct(response.data.products)
            console.log(response.data)
        } catch (error) {
            console.error(error.message)
        }
    }

    useEffect(() => {
        getProduct()
    }, [])

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Image
            </th>
            <th scope="col" className="px-6 py-3">
              Product Name
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {Product.map((Product, index) => (
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <img src={`http://localhost:5000/${Product.url}`} width="250px" height="100px" />
              </th>
              <td className="px-6 py-4">
                {Product.name}
              </td>
              <td className="px-6 py-4">{Product.price}</td>
              <td className="px-6 py-4">
                <Link to=""
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Product