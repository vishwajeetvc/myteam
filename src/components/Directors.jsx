

import img from '../assets/bg-pattern-about-2-contact-1.svg'
import img2 from '../assets/bg-pattern-home-4-about-3.svg'



function Card({ name, place, para, img }) {
    function rotate(e) {

        const card = e.target.closest('.rotate');
        const angle = Number(card.style.transform.slice(8, 11));
        if (angle == 180) {
            card.style.transform = ` rotateY(360deg)`;
        } else {
            card.style.transform = ` rotateY(180deg)`;
        }
    }

    return (<div
        style={{
            perspective: '1000px',
        }}>

        <div
            style={{
                transformStyle: 'preserve-3d',
                transform: 'rotateY(0deg)',
                transition: 'transform 1s'
            }}
            className=" w-[300px] h-[285px] relative rotate ">
            <div

                className="flex flex-col gap-2 items-center bg-[#022f34] max-w-[350px] h-[235px] relative ">
                <img
                    className="rounded-full border-2 w-[90px] mt-[30px]"
                    src={img} alt="" />

                <h2 className=" font-[700] text-[#7cc6c7]">{name}</h2>

                <h3 className="mt-[-8px] text-[15px] text-[#dcf1f3] italic font-[500]">{place}</h3>

                <div className="bg-[#f67e7f] w-[50px] h-[50px] hover:bg-[#78c6c6] transition-colors duration-300 hover:cursor-pointer
                flex items-center justify-center rounded-full absolute bottom-[-25px]" >

                    <span onClick={rotate} className=" text-[#022f34] text-2xl ">&#x2726;</span>

                </div>
            </div>
            <div
                style={{
                    transform: 'rotateY(180deg) translateZ(5px)'
                }}
                className="absolute top-0 h-[82.3%] w-full bg-[#002528] flex justify-center">

                <div className="flex flex-col items-center text-center p-3">
                    <h2 className="font-[700] text-[#7cc6c7] p-1 mt-3">{name}</h2>
                    <div className=" w-[200px] text-[15px] font-[500] ">{para}</div>
                </div>

                <div className="bg-[#78c6c6] w-[50px] h-[50px] hover:bg-[#f67e7f] transition-colors duration-300 hover:cursor-pointer
                flex items-center justify-center rounded-full absolute bottom-[-25px]" >

                    <span
                        onClick={rotate}
                        className=" text-[#022f34] text-2xl hover:cursor-pointer">&#x2715;</span>

                </div>
            </div>
        </div>
    </div >)
}

export default function Directors() {
    return (<div
        style={{
            backgroundImage: `url(${img})`,
            // backgroundPosition: '-100px -100px'
        }}
        className=" bg-no-repeat bg-[-100px_-100px]
        grid grid-cols-[25px_1fr_25px]
        grid-rows-[56px_max-content_56px]
        bg-[#004147] text-white
        ==========
        md:grid-rows-[156px_max-content_156px]
        md:bg-[-100px_0px]
        md:grid-cols-[1fr_calc(65vw)_1fr]
        ">

        <div
            style={{
                backgroundImage: `url(${img2})`
            }}
            className=" bg-no-repeat bg-[100%_100%]
            col-start-2
            col-end-3
            row-start-2
            row-end-3
            grid gap-y-5
            grid-rows-[max-content_max-content]
            ">
            <div className="text-center text-2xl font-[700]
                >> md:text-5xl
                ">Meet the Directors</div>
            <div className="justify-center flex flex-wrap gap-5 md:mt-[20px]">

                <Card name={'Nikita Marks'} place={'Founder & CEO'} img={"https://myteam-multi-page-website-teal.vercel.app/_nuxt/image/339265.jpg"}
                    para={'“It always amazes me how much talent there is in every corner of the globe.”'}
                />
                <Card name={'Cristian Duncan'} place={'Founder & COD'} img={"https://myteam-multi-page-website-teal.vercel.app/_nuxt/image/eb2a3f.jpg"}
                    para={'“It always amazes me how much talent there is in every corner of the globe.”'}
                />
                <Card name={'Nikita Marks'} place={'Founder & CEO'} img={"https://myteam-multi-page-website-teal.vercel.app/_nuxt/image/339265.jpg"}
                    para={'“It always amazes me how much talent there is in every corner of the globe.”'}
                />
                <Card name={'Cristian Duncan'} place={'Founder & COD'} img={"https://myteam-multi-page-website-teal.vercel.app/_nuxt/image/eb2a3f.jpg"}
                    para={'“It always amazes me how much talent there is in every corner of the globe.”'}
                />
                <Card name={'Nikita Marks'} place={'Founder & CEO'} img={"https://myteam-multi-page-website-teal.vercel.app/_nuxt/image/339265.jpg"}
                    para={'“It always amazes me how much talent there is in every corner of the globe.”'}
                />
                <Card name={'Cristian Duncan'} place={'Founder & COD'} img={"https://myteam-multi-page-website-teal.vercel.app/_nuxt/image/eb2a3f.jpg"}
                    para={'“It always amazes me how much talent there is in every corner of the globe.”'}
                />

            </div>
        </div>
    </div>)
}
