import { Button } from "@nextui-org/react"

const Newsletter = () => {
  return (
    <section className="px-6 md:px-10 xl:px-16 2xl:px-20 py-16 xl:py-12 2xl:py-16 bg-secondary">
        <div className="py-10 px-5 md:p-10 2xl:p-12 bg-primary space-y-10 2xl:space-y-12 rounded-lg md:rounded-none">
            <div className="text-center space-y-9 2xl:space-y-10">
                <h2 className="text-2xl md:text-[32px] xl:text-[40px] 2xl:text-5xl font-Lora">Get the Latest Updates</h2>
                <p className="text-sm md:text-xl 2xl:text-2xl font-urbanist w-full lg:w-[65%] mx-auto">Stay updated on our digital marketplace`&apos;s latest launches of products, updates, and valuable content revisions.</p>
            </div>
            <div className="flex items-center gap-5 max-w-[300px] md:w-[350px] rounded-full border py-2 px-3 border-zinc-500 focus:border-secondary mx-auto">
            <input type="email" placeholder="Enter your email" className="w-full bg-primary placeholder:text-zinc-500 !border-none !outline-none"/>
            <Button size="lg" color="secondary" radius="full" className="text-warning">
            Subscribe
            </Button>
            </div>
        </div>
    </section>
  )
}

export default Newsletter