import img from '../assets/393512.png'
import img2 from '../assets/3671c4.png'
import img3 from '../assets/015c88.png'
import img4 from '../assets/bg-pattern-about-2-contact-1.png'
import img5 from '../assets/bg-pattern-about-1-mobile-nav-1.png'

import A from '../components/A'
export default function Contact() {
    return (
        <div 
            style={{
                backgroundImage : `url(${img4}), url(${img5})`,
                // backgroundPosition : '-100px 100px, calc(100% + 100px) 100%'
            }}
            className=" bg-no-repeat  bg-[-100px_-100px]
                        grid grid-cols-[20px_1fr_20px]  grid-rows-[24px_max-content_24px] bg-[#014e56] text-[#ffffff]
                        sm:grid-cols-[2vw_auto_2vw] lg:grid-cols-[15vw_auto_15vw]
                        md:grid-rows-[100px_max-content_100px] md:bg-[-100px_20%] 
                        ">

            <div className="
                col-start-2 col-end-3 row-start-2 row-end-3 grid grid-rows-2 gap-5
                md:grid-rows-1 md:grid-cols-[repeat(12,1fr)]
            ">
                <ContactText className={"md:col-start-1 md:col-end-6"}/>
                <Form className={"md:col-start-7 md:col-end-13"}/>
            </div>
        </div>
    )
}

function Form({className}){
    return (
        <form className={`${className}`}>
            <Input type={"text"} placeholder={"Name"}/>
            <Input type={"email"} placeholder={"Email Address"}/>
            <Input type={"text"} placeholder={"Company Name"}/>
            <Input type={"text"} placeholder={"Title"}/>
            <Input type={"textarea"} placeholder={"Message"} className={""}/>
            <button>
                <A label={"submit"} fat={true} className={"mt-8"}/>
            </button>
        </form>
    )
}


function Input({type, placeholder, className}){

    if( type == "textarea" ) {

        return (<>
            <textarea 
                    className={`bg-transparent p-4 border-b focus:border-[#5bdbff]
                    block outline-none w-full ${className} `}
                    placeholder={placeholder}></textarea>
        </>)

    } else {
        return (<>
            <input 
            className={`bg-transparent p-4 border-b focus:border-[#5bdbff]
            block outline-none w-full ${className} `}
            type={type} placeholder={placeholder}/>
        </>)
    }

}

function ContactText({className}) {
    return (
        <div className={`grid grid-rows-[max-content_max-content] gap-10 ${className}`}>

            <div className="row-start-1 row-end-2 text-center text-4xl font-[700] >> md:text-7xl md:text-left">
                Contact <span className="text-4xl block text-[#f57d7e]">Ask us about</span>
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

