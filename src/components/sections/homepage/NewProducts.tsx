import { useFetchNewProducts } from "@/lib/react-query"
import { ProductCard } from "@/components/Index"
// import AutoScroll from 'embla-carousel-auto-scroll'

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { useToast } from "@/components/hooks/use-toast"
const NewProducts = () => {
    const { data, error, isError } = useFetchNewProducts();
    const { toast } = useToast();

    if (error || isError) {
        toast({
            variant: "destructive",
            className: "bg-red-600 text-white",
            description: error.message,
        });
    }

    return (
        <section className="py-3">
            <div className="container">
                <h2 className="text-center text-primary mb-4 font-medium text-lg">New Products</h2>

                {data?.length && data ? (
                    <Carousel
                        // plugins={[
                        //     AutoScroll({
                        //         speed:1
                        //     }),
                        // ]}
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full"
                    >
                        <CarouselContent className="w-full">
                            {data.map(product => {
                                return (
                                    <CarouselItem key={product.id}className="md:basis-1/2"><ProductCard item={product} />  </CarouselItem>
                                )
                            })}

                        </CarouselContent>
                        <CarouselPrevious className="text-primary border-primary" />
                        <CarouselNext className="text-primary border-primary" />
                    </Carousel>

                ) : <h2 className="text-center bg-red-700 text-white py-2">Sorry there is no new products</h2>}

            </div>
        </section>

    )
}

export default NewProducts