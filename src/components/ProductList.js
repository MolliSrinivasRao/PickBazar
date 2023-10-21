import { useContext } from 'react'
import ProductContext from '../context/ProductContext'
import '../style/ProductList.scss';
function ProductList() {
    const products = useContext(ProductContext);
    return (
        <div className='product-container'>
            {
                products?.map((e, i) => {
                    let cartQty = 0;
                    return (
                        <div key={i} className='product-card'>
                            {e.sale_price && <p className='product-discount'>{Math.ceil(((e.price - e.sale_price) / e.price) * 100)}%</p>}
                            <img className='product-image' src={e.image.original} />
                            <div className='price-container'>
                                {e.sale_price && <p className='product-price'>{e.sale_price}</p>}
                                <p className={`product-price ${e.sale_price && "product-price-strike"}`}>{e.price}</p>
                            </div>
                            <p className='product-name'>{e.name}</p>
                            <div className='product-cart-container'>
                                {cartQty > 0 && <button className='product-action-btn'>-</button>}
                                <button className='product-cart-btn'>{cartQty > 0 ? cartQty : "Add to Cart"}</button>
                                <button className='product-action-btn'>+</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default ProductList;