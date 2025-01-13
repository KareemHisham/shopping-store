import { IoIosArrowForward } from 'react-icons/io';
interface IControls {
  onClick: VoidFunction;
}
const Controls = ({ onClick }: IControls) => {
  return (
    <span
      onClick={onClick}
      className="absolute left-[calc(40vw-14px)] md:left-[calc(25vw-20px)] top-1/2 w-7 h-7 md:w-10 md:h-10 bg-white shadow-md rounded-full flex justify-center items-center cursor-pointer"
    >
      <IoIosArrowForward className="text-primary  " />
    </span>
  );
};

export default Controls;
