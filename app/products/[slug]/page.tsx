import ProductAmount from "@/components/products/ProductAmount";

type ProductDetailProps = { //property
    params: Promise<{slug: String}>; //slug bertipe string
}

export default async function ProductDetail(props: ProductDetailProps){
    const params = await props.params;

    return(
        <div>
            <h1>Products Detail Page</h1>
            <p>Show detail product here</p>
            <p>Slug : {params.slug}</p>

            <ProductAmount/>

        </div>
    );
}