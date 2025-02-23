import { useEffect, useState } from "react";
import { useToast } from "@/components/hooks/use-toast"
import { useFetchProducts } from "@/lib/react-query";
import { IProduct } from "@/constant/Interfaces";
import { Spinner } from "@/components/Index";

const ShareSetup = () => {
  const [items, setItems] = useState<IProduct[]>([]);
  const { data, isPending, error, isError } = useFetchProducts();
  const { toast } = useToast();

  if (error || isError) {
    if (error || isError) {
      toast({
        variant: "destructive",
        className: "bg-red-600 text-white",
        description: error.message,
      });
    }
  }
  useEffect(() => {
    if (data) {
      setItems(data)
    }

  }, [data])


  const randomRowSpan = () => Math.ceil(Math.random() * 3);
  const randomColsSpan = () => Math.ceil(Math.random() * 2);

  return (
    <section className="w-full mt-8 py-3">
      <header className="text-center mb-10">
        <h3 className="text-sm text-gray-500 font-semibold mb-4">
          Shape your setup with
        </h3>
        <h2 className="text-xl font-bold leading-8">#FuniroFurniture</h2>
      </header>
      {/** grid */}
      <div
        className={
          'grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] grid-flow-dense auto-rows-[100px] gap-4'
        }
      >
        {isPending && <Spinner />}
        {items && items.map((product) => (
          <div
            key={product.id}
            className={`block overflow-hidden`}
            style={{
              gridRowEnd: `span ${randomRowSpan()}`,
              gridColumnEnd: `span ${randomColsSpan()}`,
            }}
          >
            <img
              src={product.image}
              alt={product.description}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShareSetup;
