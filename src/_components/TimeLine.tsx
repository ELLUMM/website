"use client";
import React from "react";
import { timelines } from "@/_datas/timeline_data";
import { useInView } from "@/_hooks/useInView"; // 경로 맞춰

function TimelineRow({ item, index }: { item: any; index: number }) {
  const isRight = index % 2 === 0;
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.25 });

  return (
    <div
      ref={ref}
      className="flex w-full items-center relative"
      style={{ justifyContent: isRight ? "flex-end" : "flex-start" }}
    >
      <div
        className={`absolute bg-white rounded-full z-10 ${inView ? "reveal-dot" : ""}`}
        style={{
          top: "12px",
          left: "50%",
          width: "16px",
          height: "16px",
          transform: "translateX(-50%)",
        }}
      />

      <div
        className={`flex flex-col z-20 ${inView ? "reveal-up" : ""}`}
        style={{
          width: "45%",
          alignItems: isRight ? "flex-end" : "flex-start",
          textAlign: isRight ? "right" : "left",
        }}
      >
        <span className="text-white text-base block mb-2">{item.year}</span>

        <div
          className="w-full bg-black border border-white"
          style={{
            borderRadius: "12px",
            padding: "16px 24px",
            textAlign: "left",
          }}
        >
          <p className="text-white text-lg font-thin leading-tight break-keep m-0">
            {item.detail}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function TimelineSection() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.15 });

  return (
    <section className="bg-black text-white py-32 px-6 md:px-0">
      <div className="mx-auto" style={{ maxWidth: "1232px" }}>
        <h2 className="text-white text-3xl font-thin leading-tight mb-16">
          Professional Timeline
        </h2>

        <div ref={ref} style={{ position: "relative", width: "100%" }}>
          <div
            className={`absolute z-0 ${inView ? "reveal-line" : ""}`}
            style={{
              top: "25px",
              bottom: 0,
              left: "50%",
              width: "2px",
              backgroundColor: "#2c2c2c",
              transform: "translateX(-50%)",
            }}
          />

          <div className="flex flex-col gap-16">
            {timelines.map((item, index) => (
              <TimelineRow key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
