import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteProduct } from "../../../store/products";
import { useHistory } from "react-router";
import { useParams } from "react-router-dom";



export default function ProductDetail({id}){
    
    const dispatch = useDispatch();
    const product = useSelector(state => state.products[id]);
    const currUser = useSelector(state => state.session.user.id);
    const history = useHistory();
    
    const [isAuth, setIsAuth] = useState(false);
    
    useEffect(()=> {
        if(product){
            setIsAuth(currUser === product.ownerId);   
        }
    }, [product, currUser])
    
    const {productId} = useParams();
    const deleteThis = async (id) => {
        await dispatch(deleteProduct(productId));
        history.push(`/products`)
        return;
    }
    const editThis = async (id) => {
        await dispatch()
    }
    
    if(!product) return null
    
    return (
        <section className={'content__div'}>{/* image and description*/}
            <div className={'product__desc'}>{product.description}</div>{/* description */}
            <div className={'product__price'}>{product.price}</div>
            <h1 className={'product__title'}>{product.title}</h1>
            <img src={product.imageUrl} alt={'pic'} className={'product__img'}/>{/* thumbnail */}
            <div className={'button__container'}>{/* 2 buttons for upvote and GET*/}
                {/* <a></a>GET */}
                <button className={'button__upvote'}> ^ </button>{/*UPVOTE*/}
            </div>
            <div className={'product__discussion'}>for discussion</div>
            <button disabled={!isAuth} onClick={() => deleteThis(product.id)} type="button">DELETE</button>
            <button disabled={!isAuth} onClick={() => deleteThis(product.id)} type="button">EDIT</button>
        </section>
    )
}