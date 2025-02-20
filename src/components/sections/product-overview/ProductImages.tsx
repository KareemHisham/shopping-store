import { Button } from "@/components/Index";

const ProductImages = ({ img, imgs }: { img: string, imgs: string[] }) => {

  const handleChange = (i: string): void => {
    const imgElement = document.querySelector(".main_img img");
    if (imgElement) {
      imgElement.setAttribute("src", i);
    }
  };
  return (
    <div className="w-full md:w-5/12 flex gap-4 h-2/6 md:h-4/6">
      {/** small imgs */}
      <div className="flex flex-col gap-2">
        {imgs.map((photo, index) => {
          return (
            <Button type="button" classes="w-[100px] flex-1" key={index} onClick={() => handleChange(photo)}>
              <img src={photo} alt="" loading="lazy" className="rounded-lg object-cover" />
            </Button>
          )
        })}
      </div>
      {/** active img */}
      <div className="h-full main_img flex-1">
        <img src={img} alt="" loading="lazy" className="rounded-xl object-cover" />
      </div>
    </div>
  );
};

export default ProductImages;
