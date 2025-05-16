import MPEDetails from '@/components/categories/materialProcess/MPEDetails'
import DefaultLayout from '@/components/DefaultLayout'
import { AnalyticalInstrumentsList, FunsaiProductsList } from '@/libs/productsData'
import React from 'react'

const Page = () => {
    return (
        <DefaultLayout>
            <MPEDetails data={AnalyticalInstrumentsList} type={"analytical"} query={"analyticalInstruments"} />
        </DefaultLayout>
    )
}

export default Page
