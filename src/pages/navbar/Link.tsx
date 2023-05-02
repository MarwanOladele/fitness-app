import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  page: string;
  selectedPage: string;
  setSelectedPage: (value: string) => void;
};

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
  const pageLowerCase = page.toLowerCase().replace(/ /g, "");
  return (
    <AnchorLink
      className={`${selectedPage === pageLowerCase ? "text-primary-500" : ""} transition duration-500 hover:text-primary-300`}
      href={`#${pageLowerCase}`}
      onClick={() =>setSelectedPage(pageLowerCase)} 
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
