import './index.scss';
import React, { useState, useRef, useLayoutEffect } from "react";
import { ScrollWrapper } from "../../utils/scrollWrapper";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import Sparkles from "../../utils/sparkle";

const style = {
  alignItems: "center",
  width: "100vw",
  height: "300vh",
  background: "url(/assets/img/bg/moon_1@3x.png)",
  display: "flex",
  flexDirection: "column",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  objectFit: "cover"
};

const DIV = motion.div;

export const Intro = ({ title, subtitle }) => {
  const [scrubPercent, setScrubPercent] = useState(0);
  const [elementTop, setElementTop] = useState(0);
  const ref = useRef(null);
  const { scrollY } = useViewportScroll();

  const y = useTransform(scrollY, [elementTop, elementTop + 1], [0, -1], {
    clamp: false
  });

  const handleScrub = value => {
    setScrubPercent(value);
  };

  useLayoutEffect(() => {
    const element = ref.current;
    setElementTop(element.offsetTop);
  }, [ref]);

  return (
    <div ref={ref} >
      <ScrollWrapper onScroll={v => handleScrub(v)}>
        <div style={{ ...style, y }} className="text-center text-white text-3d-wrap">
          <motion.div
              className="intro-container"
              initial={{ y: 0 }}
              animate={{ y: scrubPercent >= 95 ? "-100%" : 0 }}
          >
            <Sparkles style={{ width: "100%", height: "100vh" }}>
              {scrubPercent < 10 && (
                <>
                  <div
                    className="primary-font text-shadow_border type-bold-72 text-3d"
                    style={{width: "100vw"}}
                  >
                    <p className="py-4 text-shadow_border">{title}</p>
                    {/* <span><img src='/assets/img/crown@2x.png' /></span> */}
                    <DIV animate={{ translateY: ["-10px", "10px", "-10px"]}}
                      transition={{
                        loop: Infinity,
                        duration: 3
                      }}
                    >
                      <i className="bi bi-arrow-down-square-fill py-4" style={{color: 'white', width: '50px' }}></i>
                    </DIV>
                  </div>
                </>
              )}
              <div
                className="intro-content primary-font type-normal-48 text-shadow_border">
                <div className="text-3d-wrapper">
                  <div className="text-3d">
                    <DIV className="intro-text"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: scrubPercent >= 10 ? 1 : 0 }}
                    >
                      Bienvenidos
                    </DIV>
                    <DIV className="intro-text"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: scrubPercent >= 20 ? 1 : 0 }}
                    >
                      Al inicio de
                    </DIV>
                    <DIV className="intro-text"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: scrubPercent >= 30 ? 1 : 0 }}
                    >
                      Mi
                    </DIV>
                    <DIV className="intro-text"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: scrubPercent >= 40 ? 1 : 0 }}
                    >
                      Cuento de hadas
                    </DIV>
                  </div>
                </div>
              </div>
            </Sparkles>
          </motion.div>
        </div>
      </ScrollWrapper>
    </div>
  );
};
