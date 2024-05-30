import img from '../assets/bg-pattern-home-2.png'
import img2 from '../assets/bg-pattern-home-1.png'
export default function Hero() {
    return (
        <div
            style={{
                backgroundImage: `url(${img2})`,
            }}
            className="bg-[#014e56]  bg-no-repeat xl:bg-[-100px_80px] bg-[-1000px]">
            < div
                style={{
                    backgroundImage: `url(${img})`,
                }}
                className={`bg-no-repeat grid grid-rows-[max-content_max-content_max-content_150px]  px-4  bg-[bottom_center] 
               sm:bg-[100%_100%] sm:grid-cols-12 sm:grid-rows-[56px_auto_56px_144px]  sm:gap-x-0  md:gap-5 sm:gap-y-0 max-w-[1110px] sm:m-auto
            `} >
                <div className="row-start-2 row-end-3 text-4xl font-[700] text-center text-white 
                sm:row-start-2 sm:row-end-3 sm:col-start-1 sm:col-end-7 sm:text-left lg:text-[100px] sm:text-[80px] sm:leading-[100px] 
                    ">
                    Find the best <span className="row-start-2 row-end-3 text-4xl lg:text-[90px] sm:text-[80px]  text-center text-[#f67e7f] font-[700]">talent</span>
                </div>
                <div
                    className={`row-start-3 text-white  text-center row-end-4 font-[500] leading-6 text-[16px]
                            sm:col-start-8 sm:col-end-13 sm:text-left sm:row-start-2 sm:row-end-3 sm:font-[600] sm:text-[18px] sm:self-end
                            sm:before:block before:relative mt-4 sm:mt-0  before:w-14 before:h-1 before:bg-[#79c7c7] before:top-[-68px]
                        `}>
                    Finding the right people and building high performing teams can be hard. Most companies aren’t tapping into the abundance of global talent. We’re about to change that.
                </div>
            </div >
        </div>
    )
}

