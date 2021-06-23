import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { useParams } from "react-router-dom";
import { updateOneProduct } from "../../../store/products";


export default function EditProductForm(){
    const {id} = useParams()
    const dispatch = useDispatch();
    
    const product = useSelector(state => state.products[id]);


    const history = useHistory();

    const [title, setTitle] = useState(product.title);
    const [imageUrl, setImageUrl] = useState(product.imageUrl);
    const [description, setDescription] = useState(product.description);

    useEffect(() => {


    },[product])

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            id: product.id, title, imageUrl, description
        }
        const newProduct = await dispatch(updateOneProduct(payload));
        if(newProduct) history.push(`/products/${newProduct.id}`)
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