import Benefit from "@/components/Benefit";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import HText from "../../components/HText";
import ActionButton from "../../components/ActionButton";
import benefitImg from "../../assets/BenefitsPageGraphic.png";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the art facilties",
    description:
      "culpa harum cupiditate maxime est quo itaque magni recusandae molestias aliquam velit, nobis optio quia nostrum voluptatem minima",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "State of the art facilties",
    description:
      "culpa harum cupiditate maxime est quo itaque magni recusandae molestias aliquam velit, nobis optio quia nostrum voluptatem minima",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "State of the art facilties",
    description:
      "culpa harum cupiditate maxime est quo itaque magni recusandae molestias aliquam velit, nobis optio quia nostrum voluptatem minima",
  },
];

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefit" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER SECTION */}
        <div className="md: my-5 md:w-3/5">
          <HText>More than just a gym.</HText>
          <p className="my-5 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            culpa harum cupiditate maxime est quo itaque magni recusandae,
            molestias aliquam velit, nobis optio quia nostrum voluptatem minima
            quasi.
          </p>
        </div>

        {/* BENEFITS */}
        <div className="md:flex items-center justify-between gap-8 mt-5">
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              {...benefit}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </div>

        {/* GRAPHICS AND DESCRIPTION */}

        <div className="md:flex  items-center justify-between gap-20 mt-16 md:mt-28">
          {/*  GRAPHICS*/}
          <img
            src={benefitImg}
            alt="benefits-page-graphic"
            className="mx-auto"
          />

          {/*  DESCRIPTION*/}

          <div className="">
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves">
                <div className="">
                  <HText>
                    MILLIONS OF HAPPY MEMBER GETTING{"    "}
                    <span className="text-primary-500">FIT</span>
                  </HText>
                </div>
              </div>
            </div>
            <div className="">
              <p className="my-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo fugit minus itaque deleniti aliquam, consequatur
                perspiciatis voluptatem animi, numquam quis rerum culpa? Dolor,
                illo animi fuga aut, minima nemo perspiciatis, explicabo
                recusandae provident accusantium tenetur similique quibusdam
                esse voluptatem magni et velit a culpa distinctio ratione nulla!
                Sapiente, unde quo.
              </p>
              <p className="mb-5">
                Explicabo fugit minus itaque deleniti aliquam, consequatur
                perspiciatis voluptatem animi, numquam quis rerum culpa? Dolor,
                illo animi fuga aut, minima nemo perspiciatis, explicabo
                recusandae provident accusantium tenetur similiq
              </p>
            </div>
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
