interface ColorsProps<T extends string[]> {
  colors: T;
  active: T[number];
}
const ProductColors = ({ colors, active }: ColorsProps<string[]>) => {
  return (
    <div className="text-sm ">
      <h4 className="text-darkGrey">Color</h4>
      <div className="flex gap-4 mt-1">
        {colors?.map((color) => (
          <span
            key={color}
            className={`rounded-full w-6 h-6 text-sm text-center  p-1 ${
              color === active ? 'outline outline-2 outline-offset-2 ' : ''
            }`}
            style={{ backgroundColor: color, outlineColor: color }}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ProductColors;
