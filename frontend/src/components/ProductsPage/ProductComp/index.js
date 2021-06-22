


export default function ProductDetail({product: {title, description, imageUrl}}){

    return (
        <>
            <section className={'content__div'}>{/* image and description */}
                <h1 className={'product__title'}>{title}</h1>
                <div className={'product__desc'}>{description}</div>{/* description */}
                <img src={imageUrl} alt={'pic'} className={'product__img'}/>{/* thumbnail */}
            </section>
            <div className={'button__container'}>{/* 2 buttons for upvote and GET*/}
                {/* <a></a>GET */}
                <button className={'button__upvote'}> Upvote </button>{/*UPVOTE*/}
            </div>
            <div className={'product__discussion'}></div>{/* for discussion */}
        </>
    )
}