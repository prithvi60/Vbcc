import MPEDetails from '@/components/categories/materialProcess/MPEDetails'
import DefaultLayout from '@/components/DefaultLayout'
import { AnalyticalInstrumentsList } from '@/libs/productsData'
import React from 'react'

const Page = () => {
    return (
        <DefaultLayout>
            <MPEDetails data={AnalyticalInstrumentsList} type={"analytical"} query={"analyticalInstruments"} name={"Analytical-Instruments-Brochure"} />
        </DefaultLayout>
    )
}

export default Page
