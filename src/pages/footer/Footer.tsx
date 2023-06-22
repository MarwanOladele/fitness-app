import Logo from "../../assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="logo" />
          <p className="my-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
            debitis, neque at odio iusto et totam culpa atque quidem rerum?
          </p>
          <p className="">Evogym All Rights Reserved</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Lorem, ipsum dolor.</p>
          <p className="my-5">totam culpa atque</p>
          <p className="">consectetur adipisicing</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact us</h4>
          <p className="my-5">io iusto et totam culp</p>
          <p className="my-5">+234 705 857 3243</p>
       
        </div>
      </div>
    </footer>
  );
};

export default Footer;
