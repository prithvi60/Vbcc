import CategoryTypes from "@/components/categories/CategoryTypes";
import MaterialProcessingEquipment from "@/components/categories/materialProcess/MaterialProcessingEquipment";
import DefaultLayout from "@/components/DefaultLayout";
import { MPEData } from "@/libs/otherPage";

export default function Home() {

  return (
    <DefaultLayout>
      <MaterialProcessingEquipment />
      <CategoryTypes lists={MPEData} />
    </DefaultLayout>
  );
}
