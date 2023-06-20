import { SelectedPage } from "@/shared/types";
import { useForm } from "react-hook-form";
import contactus from "../../assets/ContactUsPageGraphic.png";
import HText from "@/components/HText";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Contactus = ({ setSelectedPage }: Props) => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const handleSubmit = async (e: any) => {
    const isValid = await trigger();

    if (!isValid) {
      e.preventDefault();
    }
  };
  return (
    <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
      <div className="">
        <div className="md:w-3/5">
          <HText>
            {" "}
            <span className="text-primary-500">JOIN NOW</span> to get in shape
          </HText>
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ratione
            voluptas voluptatum earum dolores architecto, adipisci quasi, omnis
            officia delectus fugit voluptatem molestias exercitationem optio.
          </p>
        </div>
        <div className="mt-10 justify-between gap-8 md:flex">
          <div className="mt-10 basis-3/5 md:mt-0">
            <form
              action="https://formsubmit.co/oladelemarwan@gmail.com"
              method="POST"
              className=""
              target="_blank"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                className="w-full rounded-lg bg-primary px-5 py-3 placeholder-white"
                placeholder="NAME"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <p className="mt-1 text-primary-500 ">
                  {errors.name.type === "required" && "This field is required"}
                  {errors.name.type === "maxLength" && "Max length is 100"}
                </p>
              )}
              <input type="email" name="email" required />
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactus;
