import MPEDetails from '@/components/categories/materialProcess/MPEDetails'
import DefaultLayout from '@/components/DefaultLayout'
import { SeikiProductsList } from '@/libs/productsData'
import React from 'react'

const Page = () => {
    return (
        <DefaultLayout>
            <MPEDetails data={SeikiProductsList} type={"Presses"} query={"presses"} />
        </DefaultLayout>
    )
}

export default Page
