import { IndependentCard } from "./components/IndependentCard"

export const IndependentCards = () => {
  return (
    <div className='x-container max-w-7xl mx-auto py-10 flex flex-col items-center gap-10 ss:px-12'>
      <div className="">
        <div className="grid grid-cols-1 ss:grid-cols-2 md:grid-cols-3 gap-5 md:gap-5">
          <IndependentCard
            itemLink="#"
            itemLogo='https://flowbite.com/docs/images/blog/image-1.jpg'
            itemName="How To Set Up and Configure an OpenVPN Server on Ubuntu 20.04"
            description="OpenVPN is an open-source Virtual Private Network (VPN) application that lets you create and join a private network over the  Internet.."
          />
          <IndependentCard
            itemLink="#"
            itemLogo='https://flowbite.com/docs/images/blog/image-2.jpg'
            itemName="How To Set Up and Configure an OpenVPN Server on CentOS 8"
            description="OpenVPN is an open-source Virtual Private Network (VPN) application that lets you create and join a private network securely over the Internet."
          />
          <IndependentCard
            itemLink="#"
            itemLogo='https://flowbite.com/docs/images/blog/image-3.jpg'
            itemName="How To Set Up an OpenVPN Server on Debian 10"
            description="OpenVPN is a full-featured, open-source Secure Socket Layer (SSL) VPN solution that accommodates a wide range of configurations."
          />
        </div>
      </div>
    </div>
  )
}
