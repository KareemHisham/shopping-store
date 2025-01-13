import { IProgressItem } from '../../../constant/Interfaces';

const BackItems = ({ items }: { items: IProgressItem[] }) => {
  return (
    <div className="flex gap-2 h-5/6">
      {items.map((item) => (
        <div
          key={item.id}
          className="w-[40vw] md:w-[25vw] h-full flex-shrink-0"
        >
          <img src={item.img} alt={item.description} className="cover-img" />
        </div>
      ))}
    </div>
  );
};

export default BackItems;
