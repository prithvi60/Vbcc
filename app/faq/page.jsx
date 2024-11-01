import DefaultLayout from '@/components/DefaultLayout';
import dynamic from 'next/dynamic'
const FAQContentComponent = dynamic(() => import("@/components/faq/FAQContent"))
export default function Home() {
  return (
    <main>
      <DefaultLayout>
        <FAQContentComponent />
      </DefaultLayout>
    </main>
  );
}
