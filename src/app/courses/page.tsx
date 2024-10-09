"use client";
import React from "react";
import courseData from "@/data/music_courses.json";
import { ArcCard } from "../card/ArcCard";

function Page() {
  return (
    <div className="min-h-screen bg-black py-12 pt-36">
      <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">
        All courses ({courseData.courses.length})
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-10">
        {courseData.courses.map((course) => {
          return (
            <div key={course.id} className="flex justify-center">
              <ArcCard
                name={course.title}
                title={course.instructor}
                since="22 Jul 2022"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Page;
