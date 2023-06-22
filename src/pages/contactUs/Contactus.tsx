import { useForm } from "react-hook-form";
import contactus from "../../assets/ContactUsPageGraphic.png";
import HText from "@/components/HText";

const Contactus = () => {
  const {
    register,
    trigger,
    reset,
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
              action="https://formsubmit.co/e243206f25c96180379ae2610f301705 "
              method="POST"
              className=""
              target="_blank"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                className="w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white mt-5 outline-none"
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
              <input
                type="email"
                className="w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white mt-5 outline-none"
                placeholder="EMAIL"
                {...register("email", {
                  required: true,
                })}
              />
              {errors.email && (
                <p className="mt-1 text-primary-500 ">
                  {errors.email.type === "required" && "This field is required"}
                </p>
              )}
              <textarea
                className="w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white mt-5 outline-none"
                placeholder="MESSAGE"
                rows={4}
                cols={50}
                {...register("message", {
                  required: true,
                  maxLength: 1000,
                })}
              />
              {errors.message && (
                <p className="mt-1 text-primary-500 ">
                  {errors.message.type === "required" &&
                    "This field is required"}
                  {errors.message.type === "maxLength" && "Max length is 1000"}
                </p>
              )}
              <button
                className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
                type="submit"
                onClick={reset}
              >
                SUBMIT
              </button>
            </form>
          </div>
          <div className="relative mt-16 basis-2/5 md:mt-0">
            <div className="md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:right-10 before:z-[-1]">
              <img src={contactus} alt="contactus" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactus;
