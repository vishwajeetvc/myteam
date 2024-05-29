import img from '../assets/393512.svg'
import img2 from '../assets/015c88.svg'
import img3 from '../assets/3671c4.svg'
import img4 from '../assets/bg-pattern-home-3.svg'


function Specs({ img, heading, para }) {
    return (
        <div className="items grid grid-rows-[max-content_max-content] | md:grid-cols-[100px_1fr] md:grid-rows-[1fr] md:gap-x-5 px-8">
            <div className=" row-start-1 row-end-2  justify-center flex | md:col-start-1 md:col-end-2">
                <div>
                    <img src={`${img}`} alt="img" />
                </div>
            </div>
            <div className="row-start-2 row-end-3 data grid grid-rows-[max-content_max-content] gap-2 | md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2 ">
                <h2 className="text-center font-[600] text-[#f67e7f] md:text-left | ">{heading}</h2>
                <p className="text-center font-[500] text-[16px] md:text-left | ">{para}</p>
            </div>
        </div>
    )
}





export default function Section1() {
    return (
        <div
            style={{
                backgroundImage: `url(${img4})`
            }}
            className='section1 bg-[#022f34] bg-no-repeat bg-[80vw_0] md:bg-[107%_100%]'>
            <div className="text-white grid grid-cols-[24px_1fr_24px] md:grid-cols-[1fr_auto_1fr] box-border max-w-[1110px] md:m-auto">

                <div className="col-start-2 col-end-3  grid grid-cols-9 md:gap-x-5 grid-rows-[100px_max-content_max-content_120px] px-1 ">
                    <div className="para before:block before:w-10 before:h-[4px]  before:bg-[#f67e7f] pt-[52px] before:relative before:top-[-52px]
                            col-start-1 col-end-7 leading-[35px] md:col-start-1 md:col-end-5 
                            row-stat-2 row-end-3 
                            text-[30px] md:text-[50px] md:leading-[50px] font-[700]">
                        Build & manage distributed teams like no one else.
                    </div>
                    <div className="row-start-3 row-end-4 col-start-1 col-end-10 pt-[52px] grid grid-rows-[max-content_max-content_max-content] gap-5 md:gap-8
                            md:row-start-2 md:row-end-3 
                            md:col-start-5 md:col-end-10
                        ">
                        <Specs img={img} para={'Our network is made up of highly experienced professionals who are passionate about what they do.'}
                            heading={'Experienced Individuals'} />
                        <Specs img={img2} para={'Our processes have been refined over years of implementation meaning our teams always deliver.'}
                            heading={'Easy to Implement'} />
                        <Specs img={img3} para={'Our customized platform with in-built analytics helps you manage your distributed teams.'}
                            heading={'Enhanced Productivity'} />
                    </div>
                </div>
            </div>
        </div>)
}
