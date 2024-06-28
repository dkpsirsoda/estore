import './_products.scss';

const Products = ()=>{

    const productData = [
        {
            pName:"Women wear",
            pPrice:48,
            img:"shop-1.jpg"
        },
        {
            pName:"Jacket",
            pPrice:50,
            img:"shop-2.jpg"
        },
        {
            pName:"Kids",
            pPrice:60,
            img:"shop-3.jpg"
        },
        {
            pName:"Salwar",
            pPrice:35,
            img:"shop-4.jpg"
        },
        {
            pName:"Suite",
            pPrice:70,
            img:"shop-5.jpg"
        },
        {
            pName:"Suite",
            pPrice:55,
            img:"shop-6.jpg"
        },
        {
            pName:"Suite",
            pPrice:70,
            img:"shop-7.jpg"
        },
        {
            pName:"Suite",
            pPrice:55,
            img:"shop-8.jpg"
        }

    ]
    return(
        <div className='products-container'>
            {
                productData.map((product,key)=>{
                        return(
                            <div className='mx-5 p-3 product-card'>
                            <div className='product-image-container'>
                                <img src={require('../../assets/images/shop/'+product.img)}/>
                            </div>
                            <div className='product-info'>
                                <h5><a href='#'>{product.pName}</a></h5>
                                <p className='product-price'>${product.pPrice}</p>
                                <div className='product-rating'>
                                    <i className='fa fa-star'/>
                                    <i className='fa fa-star'/>
                                    <i className='fa fa-star'/>
                                    <i className='fa fa-star'/>
                                    <i className='fa fa-star'/>
                                </div>
                            </div>
                        </div>
                        )
                })
            }
        </div>
    )
}

export default Products;