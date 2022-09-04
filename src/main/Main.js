import { useState } from 'react';
import ProductList from "../product/ProductList"
import BasketList from "../basket/BasketList"


export default function Main() {

    return (
        <div>
            <ProductList/>
            <BasketList/>
        </div>
    )
}