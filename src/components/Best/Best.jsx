import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function BestSection() {
  const containerRef = useRef();
  const segmentOne = useRef();
  const segmentTwo = useRef();
  const segmentThree = useRef();

  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom bottom",
        markers: true,
      },
    });
    timeline
      .from(segmentOne.current, { x: -1600, duration: 5 })
      .from(segmentTwo.current, { x: 1600, duration: 5 })
      .from(segmentThree.current, { x: -1600, duration: 5 });

    //gsap code here
  });

  return (
    <>
      <section
        ref={containerRef}
        className="bg-yellow"
        style={{ height: "100vh" }}
      >
        <div ref={segmentOne} className="bg-blue relative">
          we are best
        </div>

        <div ref={segmentTwo} className="bg-blue relative">
          another reason we are the best
        </div>

        <div ref={segmentThree} className="bg-blue relative">
          we are best because of this!
        </div>
      </section>
    </>
  );
}
