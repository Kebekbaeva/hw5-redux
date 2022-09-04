import ProductItem from "../product/ProductItem";
import { useState, useEffect } from 'react';



const ProductList = () => {

	// let products = [];
    // const products = 

  //       // {
        //     id: 1,
        //     name: "Яблоко"
        // },
        // {
        //     id: 2,
        //     name: "Груша"
        // },
				const [products, setProducts] = useState([])

				const getData = () => {
					let products = []
					fetch('https://jsonplaceholder.typicode.com/users')
							.then((res) => res.json())
							.then((data) => setProducts(data))
							.catch((er) => console.log(er));
	
			}
			useEffect(getData,[])

				// function getData() {
				// 	fetch("https://jsonplaceholder.typicode.com/users")
				// 	.then(response => response.json())
				// 	.then(data => {
				// 		setProducts (data)
				// 		const data = new Date()
				// 		console.log(date)
				// 	})

				// }

				// function getAxiosData() {
				// 	getAxiosData.get("https://jsonplaceholder.typicode.com/users")
				// 	.then(response => setResponse(response.data))
				// }
    	

    return (
        <div>
            <h1>Список товаров</h1>
            { products.map(
                product => <ProductItem
                    item={product}
                    key={product.id}
                />
            ) }
        </div>
    )
}

export default ProductList;