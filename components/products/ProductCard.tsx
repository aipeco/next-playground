type ProductCardProps = {
    title: string;
    description: string;
};

export default function ProductCard(props: ProductCardProps){
    return(
        <div className="flex-1 border border-gray-300 p-4 rounded-md">
            <img src="https://placehold.co/200x120" alt={props.title}></img>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </div>
    );
}