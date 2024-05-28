import A from "./A"
export default function Footer() {
    return (<div className="bg-[#002528] text-white grid grid-cols-[24px_1fr_24px] grid-rows-[52px_max-content_52px] >> md:grid-cols-[1fr_auto_1fr]">
        <div className="_center_box col-start-2 col-end-3 row-start-2 row-end-3>> max-w-[1110px]">

            <div className="grid grid-rows-3 gap-y-5 text-center >> md:gap-y-0  lg:gap-x-40 md:gap-x-20 md:grid-rows-1  md:grid-cols-[max-content_1fr_max-content]">
                <div className="row-start-1 row-end-2 >> md:col-start-1 md:col-end-2 ">
                    <p className="text-2xl font-[700] >> ">myteam</p>
                    <A className="" to="/" label="home" />
                    <A to="about" label="about" />
                </div>
                <div className="row-start-2 row-end-3 text-[#93abad] >> md:row-start-1  md:col-start-2 md:col-end-3 md:text-left">
                    <p className="">
                        <div className="text-[14px] font-[700] leading-[28px] >>">987 Hillcrest Lane</div>
                        <div className="text-[14px] font-[700] leading-[28px] >>">Irvine, CA</div>
                        <div className="text-[14px] font-[700] leading-[28px] >>">California 92714</div>
                        <div className="text-[14px] font-[700] leading-[28px] >>">Call Us : 949-833-7432</div>
                    </p>
                </div>
                <div className="row-start-3 row-end-4 >> md:row-start-1  md:col-start-3 md:col-end-4">
                    <p className="text-[#93abad] text-[14px] font-[700] md:text-right">
                        <p>Copyright 2020. All Rights Reserved</p>
                        <p>Cloned by <span className="text-orange-300 text-xl">" Vishwajeet kr. "</span></p>

                    </p>
                </div>
            </div>

        </div>
    </div>)
}
