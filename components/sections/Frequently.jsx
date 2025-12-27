"use client";

import { faqs } from "../../public/assets/FrequentlyData";
import FrequentlyQues from "../ui/FrequentlyQues";

function Frequently() {
  return (
    <section className="w-11/12 max-w-6xl mx-auto mt-10 mb-20 px-3 sm:px-5">
      {/* Title Section */}
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-blue-950">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 text-sm sm:text-base mt-2">
          Find quick answers about Dite Academy courses, programs, and support.
        </p>
      </div>

      {/* FAQ List */}
      <div className="flex flex-col gap-2">
        {faqs.map((faq) => (
          <FrequentlyQues
            key={faq.id}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </div>
    </section>
  );
}

export default Frequently;
