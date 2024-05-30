import logo1 from '../assets/logo-the-verge.png'
import logo2 from '../assets/logo-tech-radar.png'
import logo3 from '../assets/logo-gadgets-now.png'
import logo4 from '../assets/logo-jakarta-post.png'
import logo5 from '../assets/logo-the-guardian.png'
import img from '../assets/bg-pattern-about-4.png'

export default function Client() {
    return (<div
        style={{
            backgroundImage: `url(${img})`
        }}
        className="bg-no-repeat grid grid-cols-[25px_1fr_25px] md:grid-cols-[1fr_auto_1fr] bg-[#022f34] text-white md:px-4">
        <div className="col-start-2 col-end-3 grid grid-rows-[100px_1fr_100px] max-w-[1110px]  m-auto ">
            <div className="row-start-2">
                <h2 className="text-3xl text-center font-[700] >> md:text-[50px] >> md:mb-10">Some of our Clients</h2>
                <div className="p-4 flex flex-col items-center justify-center gap-4 >> md:flex-row  md:flex-wrap md:gap-4 md:items-center ">
                    <div>
                        <img src={`${logo1}`} className="max-w-[180px] font-[600] text-center text-xl p-3" />
                    </div>
                    <div>
                        <img src={`${logo2}`} className="max-w-[180px] font-[600] text-center text-xl p-3" />
                    </div>
                    <div>
                        <img src={`${logo5}`} className="max-w-[210px] font-[600] text-center text-xl p-3" />
                    </div>
                    <div>
                        <img src={`${logo4}`} className="max-w-[210px] font-[600] text-center text-xl p-3" />
                    </div>
                    <div>
                        <img src={`${logo3}`} className=" max-w-[200px] md:max-w-[150px] font-[600] text-center text-xl p-3" />
                    </div>
                </div>

            </div>
        </div>
    </div>)

}
