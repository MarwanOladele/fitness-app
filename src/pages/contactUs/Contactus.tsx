import { SelectedPage } from "@/shared/types"
import { useForm } from "react-hook-form"
import contactus from '../../assets/ContactUsPageGraphic.png'

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const Contactus = ({setSelectedPage}: Props) => {
  return (
    <section id="contactus" className="mx-auto w-5/6">Contactus</section>
  )
}

export default Contactus