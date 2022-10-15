import UnstyledLink from "@/components/links/UnstyledLink"

import { HTagBodyContent } from "./HTagBodyContent"
import { HTagNavItem } from "./HTagNavItem"

export const HTagScroll = () => {
  return (
    <div className='x-container max-w-7xl mx-auto py-10 flex flex-col items-center gap-10 ss:px-12'>
      <div className='flex flex-col items-center justify-center gap-7'>
        <h1 className='text-center'>What is Intelligent System</h1>
        <span className='max-w-xl text-center'>
          Intelligent systems are technologically advanced machines that perceive
          and respond to the world around them.
        </span>
      </div>

      <div className='container py-10 flex items-start'>
        <div className="sticky top-56 container__nav flex-1">
          <ul className="aside-menu border-l">
            <HTagNavItem itemName="Computer" itemUrl="computer" isActive />
            <HTagNavItem itemName="Service" itemUrl="service" isActive={false} />
            <HTagNavItem itemName="Storage" itemUrl="storage" isActive={false} />
            <HTagNavItem itemName="Networking" itemUrl="networking" isActive={false} />
            <HTagNavItem itemName="Managed Kubernetes" itemUrl="managed-kubernetes" isActive={false} />
          </ul>
        </div>

        <div className='container__content flex-[3] space-y-5'>
          <HTagBodyContent
            tagTitle="COMPUTER"
            sectionTitle="vStack cloud"
            description="Cost-effective and developer-friendly solution. It is a great choice for the fastest deploying your applications  Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis nam, est quam aliquam aut beatae a doloremque laboriosam animi! Vel inventore doloribus neque repudiandae similique nulla! Magnam libero doloribus blanditiis."
            learnMoreLink="#"
            parentUrl="computer"
          />
          <HTagBodyContent
            tagTitle="Service"
            sectionTitle="VMware cloud"
            description="Widescale service for building enterprise-level infrastructure. Works on Cisco and NetApp hardware  Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis nam, est quam aliquam aut beatae a doloremque laboriosam animi! Vel inventore doloribus neque repudiandae similique nulla! Magnam libero doloribus blanditiis."
            learnMoreLink="#"
            parentUrl="service"
          />
          <HTagBodyContent
            tagTitle="Storage"
            sectionTitle="Managed"
            description="Cloud servers’ maintenance and support by Cloud IT Engineering LTD technical experts  Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis nam, est quam aliquam aut beatae a doloremque laboriosam animi! Vel inventore doloribus neque repudiandae similique nulla! Magnam libero doloribus blanditiis."
            learnMoreLink="#"
            parentUrl="storage"
          />
        </div>
      </div>
    </div>
  )
}
