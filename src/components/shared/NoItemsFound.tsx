import { Link } from 'react-router-dom'

const NoItemsFound = () => {
    return (
        <p className="bg-primary text-white text-center font-bold py-2 flex flex-col">
            <span>  No Items in your cart</span>
            <Link to="/products" className="underline">Shopping now</Link>
        </p>
    )
}

export default NoItemsFound