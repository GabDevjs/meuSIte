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
            className="flex justify-center items-center h-full w-full py-2 px-3"
          >
            <a href={item.to} className="text-base xl:text-base  font-medium hover:text-primary-orange hover:scale-110 transition-all flex justify-between items-center cursor-pointer" >
              <span className="mr-1">
              < item.icon  />
              </span>
              {item.name}
            </a>
          </span>
        );
      })}
    </>
  );
};
