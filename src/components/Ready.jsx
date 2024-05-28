
import img from '../assets/bg-pattern-home-6-about-5.svg'
import A from '../components/A'
export default function Ready() {
    return (<div
        style={{
            backgroundImage: `url(${img})`,
            backgroundPosition: '0% bottom'
        }}
        className='bg-no-repeat grid grid-rows-[100px_max-content_100px] bg-orange-400'>

        <div className='row-start-2 row-end-3 grid grid-cols-[25px_1fr_25px] bg-blue-700'>
            <div className='col-start-2 col-end-3 grid  grid-rows-[max-content_max-content] justify-center gap-5 bg-red-700'>
                <div className='text-3xl font-[700] text-center md:text-left '>Ready to get started?</div>
                <div className='justify-self-center'>
                    <A to="contact" label="contact us" fat={true}
                        className={`text-[black] border-[black]`}
                    />
                </div>
            </div>
        </div>

    </div>)
}
