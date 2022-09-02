import { AiOutlineHome } from "react-icons/ai";
import { BsFillJournalBookmarkFill } from "react-icons/bs";

interface ItemsNavbarProps {
  mobile?: boolean;
  items?: any;
}
export const ItemsNavbar = (props: ItemsNavbarProps) => {
  const { mobile, items, ...rest } = props;

  return (
    <>
      {items  &&
      items.map((item: any, index: any) => {
        return (
          <span
            key={index}
            className="flex justify-center items-center h-full w-full py-2 px-2"
          >
            <a href={item.to} className="text-base font-medium hover:text-primary-blue hover:scale-105 transition-all flex justify-between items-center cursor-pointer" >
              <span className="mr-1">
              {item.icon}
              </span>
              {item.name}
            </a>
          </span>
        );
      })}
    </>
  );
};
