import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteProduct } from "../../../store/products";
import { useHistory } from "react-router";
import { useParams } from "react-router-dom";
import {createReview} from "../../../store/reviews";

export default function ProductDetail({id, homePage}){

    
    const dispatch = useDispatch();
    const product = useSelector(state => state.products[id]);
    const currUser = useSelector(state => state.session.user ? state.session.user.id : null)
    const history = useHistory();

    
    const [isAuth, setIsAuth] = useState(false);
    const [comment, setComment] = useState('');
    // const addComment = (e) => setComment(e.target.value)
    
    useEffect(()=> {
        if(product){
            setIsAuth(currUser === product.ownerId);   
        }
    }, [product, currUser])
    
    const {productId} = useParams();
    const deleteThis = async () => {
        await dispatch(deleteProduct(productId));
        history.push(`/products`);
        return;
    }
    const editThis = async () => {
        history.push(`/products/${product.id}/edit`);
    }
    const createComment = async (userId, productId, review) => {
        if(!userId){
            window.alert('please sign up or log in to post a comment');
            return;
        }
        
        await dispatch(createReview(userId, productId, review))
        return;
    }
    
    if(!product) return null
    
    return (
        <section className={'content__div'}>{/* image and description*/}
            <button className={'button__upvote'}> ^ </button>{/*UPVOTE*/}
            <div className={'product__desc'}>{product.description}</div>{/* description */}
            <div className={'product__price'}>{product.price}</div>
            <h1 className={'product__title'}>{product.title}</h1>
            <img src={product.imageUrl} alt={'pic'} className={'product__img'}/>
            <textarea style={{visibility: !homePage ? 'visible': 'hidden'}} disabled={currUser == null} onChange={e => setComment(e.target.value)}/>
            <button style={{visibility: !homePage ? 'visible': 'hidden'}} className={'product__comment--button'} onClick={() => createComment(currUser, product.id, comment)}>comment</button>
            <button style={{visibility: isAuth && !homePage ? 'visible': 'hidden'}} onClick={() => deleteThis()} type="button">DELETE</button>
            <button style={{visibility: isAuth && !homePage ? 'visible': 'hidden'}} onClick={() => editThis()}>EDIT</button>
        </section>
    )
}