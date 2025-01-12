import { MiniHero, Pagination, ProductCard } from "../../components/Index"
import { PRODUCTS, FEATURES } from "../../constant/Index"

const Products = () => {
    return (
        <>
            <MiniHero>
                <h1 className="text-xl font-bold tracking-[5px]">Shop</h1>
            </MiniHero>
            {/* Products */}
            <section className='py-4'>
                <div className="container">
                    <div className=' grid grid-cols-1 md:grid-cols-4 gap-3 mb-4'>
                        {PRODUCTS.map(product => {
                            return (
                                <ProductCard item={product} />
                            )
                        })}
                    </div>
                    {/* Pagination */}
                    <Pagination />
                    {/*  */}
                    <section className="py-4">
                        <div className="grid grid-cols-1 md:grids-cols-2 lg:grid-cols-4">
                            {
                                FEATURES.map(feature => {
                                    return (
                                        <div key={feature.id} className="p-4 flex items-center gap-2">
                                            <img src={feature.img} alt={feature.title} width={55} height={55} loading="lazy" />
                                            <div>
                                                <h3 className="text-sm font-semibold">{feature.title}</h3>
                                                <p className="text-xs text-lightGrey">{feature.description}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </section>
                </div>
            </section>
        </>
    )
}

export default Products