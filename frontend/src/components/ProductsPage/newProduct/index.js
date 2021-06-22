import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProduct } from "../../../store/products";
import { useHistory } from "react-router-dom";
import * as productActions from '../../../store/products';

export default function NewProduct(){
    const dispatch = useDispatch();
    const history = useHistory();
    const [title, setTitle] = useState('');
    const [imageUrl, setImageUrl] = useState();
    const [description, setDescription] = useState('');
    const ownerId = useSelector(state => state.session.user.id)


    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            ownerId,
            title,
            imageUrl,
            description
        }
        console.log(payload, "THIS IS THE PAYLOAD");
        const newProduct = await dispatch(createProduct(payload));
        if(newProduct) history.push(`products/${newProduct.id}`)
    };

    return(
        <section>
            <form onSubmit={handleSubmit}>
                <div>
                <label>title</label>
                <input
                value={title}
                onChange={e => setTitle(e.target.value)}
                />
                </div>
                <div>
                <label>url</label>
                <input
                value={imageUrl}
                onChange={e => setImageUrl(e.target.value)}
                />
                </div>
                <div>
                <label>description</label>
                <input
                value={description}
                onChange={e => setDescription(e.target.value)}
                />
                </div>
                <div>
                <button type="submit"> submit</button>
                </div>
            </form>
        </section>
    )
}