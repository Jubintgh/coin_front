import { useSelector } from "react-redux";


export default function ProductDetail({id}){
    
    const product = useSelector(state => state.products[id]);
    if(!product) return null

    return (
        <section className={'content__div'}>{/* image and description*/}
            <div className={'product__desc'}>{product.description}
            </div>{/* description */}
            <h1 className={'product__title'}>{product.title}</h1>
            <img src={product.imageUrl} alt={'pic'} className={'product__img'}/>{/* thumbnail */}
            <div className={'button__container'}>{/* 2 buttons for upvote and GET*/}
                {/* <a></a>GET */}
                <button className={'button__upvote'}> ^ </button>{/*UPVOTE*/}
            </div>
            <div className={'product__discussion'}>for discussion</div>
        </section>
    )
}