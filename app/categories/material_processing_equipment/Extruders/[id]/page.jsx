import MPEDetails from '@/components/categories/materialProcess/MPEDetails'
import DefaultLayout from '@/components/DefaultLayout'
import { OshidashiProductsList } from '@/libs/productsData'
import React from 'react'

const Page = () => {
    return (
        <DefaultLayout>
            <MPEDetails data={OshidashiProductsList} type={"Extruders"} query={"extruders"} />
        </DefaultLayout>
    )
}

export default Page
