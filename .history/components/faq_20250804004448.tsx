"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "What is an IPO?",
    answer:
      "An Initial Public Offering (IPO) is when a private company offers its shares to the public for the first time. This allows the company to raise capital from public investors.",
  },
  {
    question: "How can I apply for an IPO?",
    answer:
      "You can apply for an IPO through your broker's online platform, mobile app, or by visiting a branch. You'll need a demat account and sufficient funds in your bank account.",
  },
  {
    question: "What is the minimum investment required?",
    answer:
      "The minimum investment is typically one lot, which varies for each IPO. The lot size and price band determine the minimum investment amount.",
  },
  {
    question: "When do IPO shares get listed?",
    answer:
      "IPO shares typically get listed on the stock exchange within 6-10 working days after the issue closes, depending on the company and market conditions.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="bg-white rounded-lg shadow-sm p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-lg">
            <button
              className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              onClick={() => toggleFAQ(index)}
            >
              <span className="font-medium text-gray-900">{faq.question}</span>
              {openIndex === index ? (
                <ChevronUp className="h-5 w-5 text-gray-500" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-500" />
              )}
            </button>

            {openIndex === index && (
              <div className="px-6 pb-4">
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
