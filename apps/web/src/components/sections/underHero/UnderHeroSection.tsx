import { BsBoxArrowUp, BsCheckCircle, BsSpeedometer2, BsWallet2 } from "react-icons/bs"

export const UnderHeroSection = () => {
    return (
        <div className="container max-w-7xl mx-auto py-10">
            <div className="container__block w-full grid grid-cols-1 sd:grid-cols-2 gap-16 lg:flex items-center justify-center lg:gap-10 px-4">
                <div className="block__item flex flex-col items-center gap-7">
                    <span className="bg-primary-50 px-3 py-3 rounded-full">
                        <BsWallet2 size={20} className="text-primary-400" />
                    </span>
                    <h3>Predictable</h3>
                    <span className="text-center font-light max-w-sm lg:max-w-lg">Billing charges by the minute. Only for active services.</span>
                </div>
                <div className="block__item flex flex-col items-center gap-7">
                    <span className="bg-primary-50 px-3 py-3 rounded-full">
                        <BsBoxArrowUp size={20} className="text-primary-400" />
                    </span>
                    <h3>Scalable</h3>
                    <span className="text-center font-light max-w-sm lg:max-w-lg">It is easy to modify configurations even after deployment in seconds.</span>
                </div>
                <div className="block__item flex flex-col items-center gap-7">
                    <span className="bg-primary-50 px-3 py-3 rounded-full">
                        <BsCheckCircle size={20} className="text-primary-400" />
                    </span>
                    <h3>Reliable</h3>
                    <span className="text-center font-light max-w-sm lg:max-w-lg">Infrastructure availability is 99.9%. Guaranteed by the agreement.</span>
                </div>
                <div className="block__item flex flex-col items-center gap-7">
                    <span className="bg-primary-50 px-3 py-3 rounded-full">
                        <BsSpeedometer2 size={20} className="text-primary-400" />
                    </span>
                    <h3>Fastest</h3>
                    <span className="text-center font-light max-w-sm lg:max-w-lg">Xeon Gold CPUs and NVMe SSDs perform better in benchmarks.</span>
                </div>
            </div>
        </div>
    )
}
