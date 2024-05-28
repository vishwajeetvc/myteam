
import img from '../assets/bg-pattern-home-6-about-5.svg'
import A from '../components/A'
export default function Ready() {
    return (<div
        style={{
            backgroundImage: `url(${img})`,
            backgroundPosition: '0% bottom'
        }}
        className='bg-no-repeat py-16 bg-[#f67e7f] px-4'>

        <div className='grid gap-5 justify-center md:grid-cols-2 md:max-w-[1110px] m-auto'>
            <div className=' text-center md:text-left text-3xl text-[#022f33] md:text-4xl font-[700] my-4'>Ready to get started?</div>
            <div className='md:justify-self-end  justify-self-center'>
                <A to="contact" label="contact us" fat={true}
                    className={`text-[#022e33] border-[#022e33] hover:bg-[#022e33] hover:text-white `}
                />
            </div>
        </div>

    </div>)
}
