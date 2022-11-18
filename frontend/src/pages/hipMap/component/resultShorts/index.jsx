import React, { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { ShortsBody, ShortsWrappingDiv, ShortsDiv, ShortsUl, ShortsImage1 } from "../../styles/result";
import Image1 from "../../../../assets/hipMap/bg1.jpg"
import Image2 from "../../../../assets/hipMap/bg2.png"
import Image3 from "../../../../assets/hipMap/bg3.jpg"
import Image4 from "../../../../assets/hipMap/bg4.jpg"
import Image5 from "../../../../assets/hipMap/bg5.jpg"
import Image6 from "../../../../assets/hipMap/bg6.jpg"
import { List, useMediaQuery } from "@mui/material";
import Modal from "../../../../components/modal/Modal";
import SingleShorts from "../../../singleShorts";

gsap.registerPlugin(ScrollTrigger);

function ResultShorts(shorts) {
    console.log("너희는 누구냐?", shorts.shorts);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectId, setSelectId] = useState();
    const isMobile = useMediaQuery("(max-width:1023px)");

    const liRef = useRef([]);
    const nextRef = useRef(null);
    const prevRef = useRef(null);
    const pinRef = useRef(null);
    liRef.current = [];

  useEffect(() => {
    function buildSeamlessLoop(items, spacing) {
      const overlap = Math.ceil(1 / spacing), // number of EXTRA animations on either side of the start/end to accommodate the seamless looping
        startTime = items.length * spacing + 0.5, // the time on the rawSequence at which we'll start the seamless loop
        loopTime = (items.length + overlap) * spacing + 1, // the spot at the end where we loop back to the startTime
        rawSequence = gsap.timeline({ paused: true }), // this is where all the "real" animations live
        seamlessLoop = gsap.timeline({
          // this merely scrubs the playhead of the rawSequence so that it appears to seamlessly loop
          paused: true,
          repeat: -1, // to accommodate infinite scrolling/looping
          onRepeat() {
            // works around a super rare edge case bug that's fixed GSAP 3.6.1
            this._time === this._dur && (this._tTime += this._dur - 0.01);
          }
        }),
        l = items.length + overlap * 2;
      let time = 0,
        i,
        index,
        item;

      // set initial state of items
      gsap.set(items, { xPercent: 0, yPercent: 100, opacity: 0, scale: 0 });

      // now loop through and create all the animations in a staggered fashion. Remember, we must create EXTRA animations at the end to accommodate the seamless looping.
      for (i = 0; i < l; i++) {
        index = i % items.length;
        item = items[index];
        time = i * spacing;
        rawSequence
          .fromTo(
            item,
            { scale: 0, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              zIndex: 100,
              duration: 0.5,
              yoyo: true,
              repeat: 1,
              ease: "power1.in",
              immediateRender: false
            },
            time
          )
          .fromTo(
            item,
            { yPercent: 200 },
            {
              yPercent: -200,
              duration: 1,
              ease: "none",
              immediateRender: false
            },
            time
          );
        i <= items.length && seamlessLoop.add("label" + i, time); // we don't really need these, but if you wanted to jump to key spots using labels, here ya go.
      }

      // here's where we set up the scrubbing of the playhead to make it appear seamless.
      rawSequence.time(startTime);
      seamlessLoop
        .to(rawSequence, {
          time: loopTime,
          duration: loopTime - startTime,
          ease: "none"
        })
        .fromTo(
          rawSequence,
          { time: overlap * spacing + 1 },
          {
            time: startTime,
            duration: startTime - (overlap * spacing + 1),
            immediateRender: false,
            ease: "none"
          }
        );
      return seamlessLoop;
    }

    let iteration = 0; // gets iterated when we scroll all the way to the end or start and wraps around - allows us to smoothly continue the playhead scrubbing in the correct direction.

    const spacing = 0.1,
      snap = gsap.utils.snap(spacing),
      cards = liRef.current,
      seamlessLoop = buildSeamlessLoop(cards, spacing),
      scrub = gsap.to(seamlessLoop, {
        // we reuse this tween to smoothly scrub the playhead on the seamlessLoop
        totalTime: 0,
        duration: 0.5,
        ease: "power3",
        paused: true
      }),
      trigger = ScrollTrigger.create({
        start: 0,
        onUpdate(self) {
          if (self.progress === 1 && self.direction > 0 && !self.wrapping) {
            wrapForward(self);
          } else if (
            self.progress < 1e-5 &&
            self.direction < 0 &&
            !self.wrapping
          ) {
            wrapBackward(self);
          } else {
            scrub.vars.totalTime = snap(
              (iteration + self.progress) * seamlessLoop.duration()
            );
            scrub.invalidate().restart(); // to improve performance, we just invalidate and restart the same tween. No need for overwrites or creating a new tween on each update.
            self.wrapping = false;
          }
        },
        end: "+=3000",
        pin: pinRef.current
      });

    function wrapForward(trigger) {
      // when the ScrollTrigger reaches the end, loop back to the beginning seamlessly
      iteration++;
      // trigger.wrapping = true;
      trigger.scroll(trigger.start + 1);
    }

    function wrapBackward(trigger) {
      // when the ScrollTrigger reaches the start again (in reverse), loop back to the end seamlessly
      iteration--;
      if (iteration < 0) {
        // to keep the playhead from stopping at the beginning, we jump ahead 10 iterations
        iteration = 9;
        seamlessLoop.totalTime(
          seamlessLoop.totalTime() + seamlessLoop.duration() * 10
        );
        scrub.pause(); // otherwise it may update the totalTime right before the trigger updates, making the starting value different than what we just set above.
      }
      // trigger.wrapping = true;
      trigger.scroll(trigger.end - 1);
    }

    function scrubTo(totalTime) {
      // moves the scroll position to the place that corresponds to the totalTime value of the seamlessLoop, and wraps if necessary.
      const progress =
        (totalTime - seamlessLoop.duration() * iteration) /
        seamlessLoop.duration();
      if (progress > 1) {
        wrapForward(trigger);
      } else if (progress < 0) {
        wrapBackward(trigger);
      } else {
        trigger.scroll(
          trigger.start + progress * (trigger.end - trigger.start)
        );
      }
    }
    nextRef.current &&
      nextRef.current.addEventListener("click", () =>
        scrubTo(scrub.vars.totalTime + spacing)
      );
    prevRef.current &&
      prevRef.current.addEventListener("click", () =>
        scrubTo(scrub.vars.totalTime - spacing)
      );
    return () => {
      seamlessLoop.kill();
      scrub.kill();
      trigger.kill();
    };
  }, []);

  useEffect(() => {
    if (selectId !== undefined && !isModalOpen) {
      console.log("지금 선택된?", selectId);
      setIsModalOpen((prev) => {
        return !prev;
      });
    }
  }, [isModalOpen, selectId]);

  const addToRefs = (el) => {
    if (el && !liRef.current.includes(el)) {
      liRef.current.push(el);
    }
  };
  const ListFunc = () => {
    const Lists = [];
    // const urlList = [`${Image1}`,`${Image2}`,`${Image3}`,`${Image4}`,`${Image5}`,`${Image6}`]
    const urlList = shorts.shorts
    urlList.map((url, i) => {
        Lists.push(
            <li key={i} ref={addToRefs}>
                <ShortsImage1  onClick={() => {
                  setSelectId(urlList[i].shortsId);
                }} src={urlList[i].thumbnailSrc}></ShortsImage1>
            </li>
        )
    })
    console.log(Lists)
    if(Lists.length < 7){
      urlList.map((url, i) => {
        Lists.push(
            <li key={i} ref={addToRefs}>
                <ShortsImage1  onClick={() => {
                  setSelectId(urlList[i].shortsId);
                }} src={urlList[i].thumbnailSrc}></ShortsImage1>
            </li>
        )
    })
      if(Lists.length < 7){
        urlList.map((url, i) => {
          Lists.push(
              <li key={i} ref={addToRefs}>
                  <ShortsImage1  onClick={() => {
                    setSelectId(urlList[i].shortsId);
                  }} src={urlList[i].thumbnailSrc}></ShortsImage1>
              </li>
          )
      })
        if(Lists.length < 7){
          urlList.map((url, i) => {
            Lists.push(
                <li key={i} ref={addToRefs}>
                    <ShortsImage1  onClick={() => {
                      setSelectId(urlList[i].shortsId);
                    }} src={urlList[i].thumbnailSrc}></ShortsImage1>
                </li>
            )
        })
          if(Lists.length < 7){
            urlList.map((url, i) => {
              Lists.push(
                  <li key={i} ref={addToRefs}>
                      <ShortsImage1  onClick={() => {
                        setSelectId(urlList[i].shortsId);
                      }} src={urlList[i].thumbnailSrc}></ShortsImage1>
                  </li>
              )
          })
          }
        }
      }
    }
    return Lists;
  };
  return (
    <>
    {isModalOpen && selectId !== undefined && (
        <Modal
          width={isMobile ? "80%" : "1024px"}
          height="80%"
          modalHandler={() => {
            setIsModalOpen((prev) => {
              return !prev;
            });
            setSelectId(undefined);
          }}
        >
          <SingleShorts shortsId={selectId} />
        </Modal>
      )}
      <ShortsBody>
        <ShortsWrappingDiv>
          <ShortsDiv ref={pinRef}>
            <ShortsUl>{ListFunc()}</ShortsUl>
            
          </ShortsDiv>
        </ShortsWrappingDiv>
      </ShortsBody>
    </>
  );
}

export default ResultShorts;

