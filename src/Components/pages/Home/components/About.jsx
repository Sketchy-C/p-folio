import React from "react";
import { IdCardIcon } from "../../../UI/Icons";

function About() {
  return (
    <div className="text-slate-200 py-16 p-2 max-w-6xl mx-auto">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-center text-orange-500 mb-6">
        <IdCardIcon className="inline mr-3 text-4xl" />
        Identity
      </h2>

      {/* Short Paragraph */}
      <p className="text-center text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed">
        I offer tailored solutions with expertise in both front-end and back-end
        development, specializing in Chrome extensions, Excel add-ins, and Zebra
        RFID integrations (FXR90, FX96, handhelds). From streamlining workflows
        to building custom tools, I create software that delivers real results.
      </p>

      {/* What I Do */}
      <h3 className="text-2xl font-semibold text-orange-400 mb-6">
        What I Do?
      </h3>

      {/* Table-like structure */}
      <div className="space-y-6">
        {/* 1 */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between bg-gray-200/10 rounded-lg p-6 hover:bg-slate-800 transition">
          <span className="text-orange-500 font-bold text-lg w-24">01</span>
          <div className="flex-1">
            <h4 className="font-bold text-slate-100">FULL-STACK DEVELOPMENT</h4>
            <p className="text-slate-400 text-sm">
              Building scalable, modern applications — from front-end interfaces
              to back-end systems — ensuring performance, reliability, and
              security.
            </p>
          </div>
        </div>

        {/* 2 */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between bg-gray-200/10 rounded-lg p-6 hover:bg-slate-800 transition">
          <span className="text-orange-500 font-bold text-lg w-24">02</span>
          <div className="flex-1">
            <h4 className="font-bold text-slate-100">TOOLSMITHING</h4>
            <p className="text-slate-400 text-sm">
              Crafting custom Chrome extensions, Excel add-ins, and automation
              utilities to simplify workflows and maximize productivity.
            </p>
          </div>
        </div>

        {/* 3 */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between bg-gray-200/10 rounded-lg p-6 hover:bg-slate-800 transition">
          <span className="text-orange-500 font-bold text-lg w-24">03</span>
          <div className="flex-1">
            <h4 className="font-bold text-slate-100">ZEBRA RFID INTEGRATION</h4>
            <p className="text-slate-400 text-sm">
              Experience with Zebra RFID devices (FXR90, FX96, handhelds),
              integrating them into enterprise software for asset tracking,
              automation, and operational intelligence.
            </p>
          </div>
        </div>

        {/* 4 */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between bg-gray-200/10 rounded-lg p-6 hover:bg-slate-800 transition">
          <span className="text-orange-500 font-bold text-lg w-24">04</span>
          <div className="flex-1">
            <h4 className="font-bold text-slate-100">CUSTOM SOLUTIONS</h4>
            <p className="text-slate-400 text-sm">
              Designing and delivering user-focused tools tailored to your
              unique goals, ensuring seamless workflows and impactful results.
            </p>
          </div>
        </div>

        {/* 5 */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between bg-gray-200/10 rounded-lg p-6 hover:bg-slate-800 transition">
          <span className="text-orange-500 font-bold text-lg w-24">05</span>
          <div className="flex-1">
            <h4 className="font-bold text-slate-100">EMBEDDED INTEGRATION</h4>
            <p className="text-slate-400 text-sm">
              Skilled in integrating Jointech GPS & GSM trackers and fuel sensor
              systems for fleet monitoring. Delivering end-to-end embedded
              software solutions that optimize fuel usage, vehicle security, and
              operational efficiency.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
