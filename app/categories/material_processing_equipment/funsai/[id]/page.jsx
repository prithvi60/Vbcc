import MPEDetails from '@/components/categories/materialProcess/MPEDetails'
import DefaultLayout from '@/components/DefaultLayout'
import { FunsaiProductsList } from '@/libs/productsData'
import React from 'react'

const Page = () => {
    return (
        <DefaultLayout>
            <MPEDetails data={FunsaiProductsList} type={"funsai"} />
        </DefaultLayout>
    )
}

export default Page
