import MPEDetails from '@/components/categories/materialProcess/MPEDetails'
import DefaultLayout from '@/components/DefaultLayout'
import { LabEquiptProductsList } from '@/libs/productsData'
import React from 'react'

const Page = () => {
    return (
        <DefaultLayout>
            <MPEDetails data={LabEquiptProductsList} type={"lab_equipment"} />
        </DefaultLayout>
    )
}

export default Page
