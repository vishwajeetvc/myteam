
import img3 from '../assets/bg-pattern-home-4-about-3.png'
import img4 from '../assets/bg-pattern-home-5.png'

import imgq from '../assets/icon-quotes.png'
function Card({ para, name, place, img, className }) {
    return (<div
        style={{
            backgroundImage: `url(${imgq})`

        }}
        className={`${className} bg-no-repeat bg-[top_center] `}
    >
        <p className="text-center pb-4  text-[16px] leading-6 font-[600] pt-8">{para}</p>
        <h3 className="text-center font-[700] text-[#74bebf] ">{name}</h3>
        <h2 className="text-center italic text-sm mt-1">{place}</h2>
        <div className="flex justify-center overflow-hidden mt-5">
            <img className="rounded-full border-2 border-[#c2fefe] " src={img} alt="Profile_image" />
        </div>
    </div>)
}


export default function Section2() {
    return (<div
        style={{
            backgroundImage: `url(${img3}),url(${img4})`,
            backgroundPosition: 'top left, bottom right'
        }}
        className="bg-no-repeat grid grid-cols-[25px_1fr_25px] md:grid-cols-[1fr_auto_1fr] bg-[#004147] text-white md:px-4">
        <div className="col-start-2 col-end-3 grid grid-rows-[140px_1fr_140px] max-w-[1110px]  m-auto ">
            <div className="row-start-2 row-end-3 grid grid-rows[max-content_max-content] gap-10">
                <h2
                    className="row-start-1 row-end-2 text-center text-3xl font-[700] leading-7
                        md:text-[50px] md:leading-[40px] md:px-[70px]
                    ">
                    Delivering real results for top companies. Some of our <span className="text-3xl text-[#74bebf] md:text-[50px] md:leading-[70px]">success stories</span>.</h2>
                <div className="cards row-start-2 row-end-3 flex flex-col md:flex-row gap-10">
                    <Card
                        para={'“The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”'}
                        name={"Kady Baker"}
                        place={"Product Manager at Bookmark"}
                        img={"https://myteam-multi-page-website-teal.vercel.app/_nuxt/image/306942.jpg"}
                    />
                    <Card para={"“We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”"}
                        name={"Aiysha Reese"}
                        place={"Founder of Manage"}
                        img={"https://myteam-multi-page-website-teal.vercel.app/_nuxt/image/d23913.jpg"}
                    />
                    <Card para={"“Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”"}
                        name={"Arthur Clarke"}
                        place={"Co-founder of MyPhysio"}
                        img={"https://myteam-multi-page-website-teal.vercel.app/_nuxt/image/db2316.jpg"}
                    />
                </div>
            </div>
        </div>
    </div>)
}
