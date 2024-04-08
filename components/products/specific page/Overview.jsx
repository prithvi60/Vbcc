import Image from "next/image";
import ReactPlayer from "react-player/lazy";

const Overview = ({ specification, specificId }) => {
  const specificImg = specification[specificId].overViewImg;
  const specificDesc = specification[specificId].overViewDescription;
  const specificList = specification[specificId].overViewList;
  const specificGalleryImg = specification[specificId].gallery[0].img;
  const specificPara = specification[specificId].overViewLastPara;
  return (
    <section className="px-5 py-10 md:px-10 md:py-[60px] lg:px-[60px] lg:py-20 xl:px-20 font-urbanist text-white bg-primary space-y-5">
      <h4 className="font-Lora text-[40px]">Overview</h4>
      <div className="bg-secondary rounded-lg text-base p-5 xl:p-10 flex flex-col lg:flex-row items-start gap-5">
        <div className="block space-y-10 w-full lg:w-auto">
          {specificImg === "" ? (
            <div className="relative !w-full !h-[250px] md:!w-[450px] md:!h-[300px] 2xl:!w-[500px]">
              <Image
                fill
                src={specificGalleryImg}
                alt="..."
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPkY9gwEQACMwFRuhgGaQAAAABJRU5ErkJggg=="
                className="absolute object-contain lg:object-cover object-center rounded-md"
              />
            </div>
          ) : (
            <ReactPlayer
              playing={true}
              loop={true}
              muted
              height={"100%"}
              width={"100%"}
              controls
              className={"!w-full !h-[250px] lg:!w-[450px] md:!h-[300px] 2xl:!w-[500px]"}
              url="https://www.youtube.com/watch?v=-qObEU-WKsE"
            />
          )}
        </div>

        <ul className="font-urbanist text-base md:text-xl text-warning w-full space-y-6">
          {specificDesc.map((list, idx) => (
            <li key={idx} className="leading-normal">
              {list}
            </li>
          ))}
          {specificList.map((list, idx) => (
            <li key={idx}>
              <h5>{list.title}</h5>
              <p>{list.para}</p>
            </li>
          ))}
          <li>{specificPara}</li>
        </ul>
      </div>
    </section>
  );
};
export default Overview;
