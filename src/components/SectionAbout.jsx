
import img from '../assets/bg-pattern-about-1-mobile-nav-1.svg'

export default function SectionAbout() {
    return (<div
        style={{
            backgroundImage: `url(${img})`
        }}
        className=" bg-no-repeat bg-[calc(100%+100px)_calc(100%+100px)] grid grid-rows-[50px_max-content_max-content_100px] 
        grid-cols-[24px_1fr_24px] col-end-3  bg-[#014e56] text-white
        >> md:grid-cols-[1fr_auto_1fr] md:bg-[calc(100%+100px)_calc(100%)]         ">
        <div className="row-start-2 row-end-3 col-start-2 col-end-3  max-w-[1110px] md:px-4">

            <div className="grid >> md:grid-cols-[repeat(12,1fr)] md:gap-8">
                <p className="text-center text-4xl font-[700] 
                    >> md:col-start-1 md:col-end-4  md:text-left md:text-[60px] md:pt-8"
                >About</p>
                <p className="text-center pt-[20px] leading-[30px] font-[600] text-[15px] md:text-[18px]
                    >> md:col-start-5 md:col-end-13 md:pt-9 md:text-left md:font-[600]
                    md:before:block md:before:w-10 md:before:h-1 md:before:bg-[#e58587] md:before:relative md:before:top-[-40px]                  "
                >We help companies build dynamic teams made up of top global talent. Using our network of passionate professionals we drive innovation and deliver incredible outcomes. Talented, diverse teams shape the best products and experiences. We’ll bring those teams to you.</p>
            </div>

        </div>
    </div>)
}
