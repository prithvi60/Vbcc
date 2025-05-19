import MPEDetails from '@/components/categories/materialProcess/MPEDetails'
import DefaultLayout from '@/components/DefaultLayout'
import { SeikiProductsList } from '@/libs/productsData'
import React from 'react'

const Page = () => {
    return (
        <DefaultLayout>
            <MPEDetails data={SeikiProductsList} type={"Presses"} query={"presses"} name={"Material Processing-Brochure"} />
        </DefaultLayout>
    )
}

export default Page
