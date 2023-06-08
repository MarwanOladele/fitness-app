import HText from "@/components/HText";
import { SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefit" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER SECTION */}
        <div className="md: my-5 md: w-3/5">
          <HText>More than just a gym.</HText>
          <p className="my-5 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            culpa harum cupiditate maxime est quo itaque magni recusandae,
            molestias aliquam velit, nobis optio quia nostrum voluptatem minima
            quasi.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
