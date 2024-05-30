import img from '../assets/393512.png'
import img2 from '../assets/3671c4.png'
import img3 from '../assets/015c88.png'
export default function Contact() {
    return (
        <div className="grid grid-cols-[20px_1fr_20px] grid-rows-[56px_max-content_56px] bg-[#022f34] text-[#999999]">
            <div className="col-start-2 col-end-3 row-start-2 row-end-3 ">

                <ContactText />

            </div>
        </div>
    )
}

function ContactText() {
    return (
        <div className="grid grid-rows-[max-content_max-content] gap-10">
            <div className="row-start-1 row-end-2 text-center text-4xl font-[700]">
                Contact <span className="text-4xl block text-[#914e4f]">Ask us about</span>
            </div>
            <div className="row-start-2 row-end-3 grid gap-5">
                <Feature  img={img} description={"The quality of our talent newtork"}/>
                <Feature  img={img2} description={"Usagse & Implementation  of our software"}/>
                <Feature  img={img3} description={"How we help drive innovation"}/>
            </div>
        </div>
    )
}

function Feature({img, description}) {
    return (
        <div className='grid grid-cols-[max-content_1fr] gap-5'>
            <div className="col-start-1 col-end-2 w-[65px] ">
                <img src={img} alt="image" />
            </div>
            <div className="description col-start-2 col-end-3 self-center  text-[19px] font-[700]">
                {description}
            </div>
        </div>
    )
}

