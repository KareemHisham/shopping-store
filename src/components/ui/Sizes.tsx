interface SizesProps<T extends string[]> {
  sizes: T;
  active: T[number];
}

const Sizes = <T extends string[]>({ sizes, active }: SizesProps<T>) => {
  return (
    <div className="text-sm ">
      <h4 className="text-darkGrey">Size</h4>
      <div className="flex gap-2 mt-1">
        {sizes?.map((size) => (
          <span
            key={size}
            className={`w-8 h-7 text-xs text-center rounded-md p-1 ${
              size === active
                ? 'bg-primary text-white'
                : 'bg-tertiary text-black'
            }`}
          >
            {size}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Sizes;
