"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqData = [
  {
    question: "How to Subscribe to an IPO?",
    answer:
      "Step 1: Login to your respective service provider.\nStep 2: Click on the IPO button.\nStep 3: Select the IPO you want to bid and enter the relevant details.\nStep 4: Your subscription will be completed once you make the payment or give permission.",
  },
  {
    question: "Should I buy an IPO first day?",
    answer:
      "It depends on various factors including company fundamentals, market conditions, and your investment goals.",
  },
  {
    question: "How do you know if an IPO is good?",
    answer: "Research the company's financials, business model, management team, and market position before investing.",
  },
  {
    question: "How to check IPO start date?",
    answer:
      "You can check IPO start dates on our platform or through official announcements from the company and SEBI.",
  },
  {
    question: "What is issue size?",
    answer: "Issue size refers to the total amount of money the company aims to raise through the IPO.",
  },
  {
    question: "How many shares in a lot?",
    answer: "The number of shares in a lot varies by IPO and is specified in the IPO prospectus.",
  },
  {
    question: "How is the lot size calculated?",
    answer:
      "Lot size is determined by the company and regulatory requirements, typically to make the minimum investment accessible.",
  },
  {
    question: "Who decides the IPO price band?",
    answer: "The IPO price band is decided by the company in consultation with merchant bankers and market conditions.",
  },
  {
    question: "What is IPO GMP?",
    answer:
      "GMP stands for Grey Market Premium, which indicates the premium at which IPO shares are trading in the unofficial market.",
  },
  {
    question: "How many lots should I apply for IPO?",
    answer: "You can apply for multiple lots based on your investment capacity and the maximum limit set for the IPO.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Frequently Asked Questions?</h2>
      <p className="text-gray-600 mb-8">Find answers to common questions that come in your mind related to IPO</p>

      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-lg">
            <button
              className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
              onClick={() => toggleFAQ(index)}
            >
              <span className="font-medium text-gray-900">{faq.question}</span>
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5 text-gray-500" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500" />
              )}
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4">
                <div className="text-gray-700 whitespace-pre-line">{faq.answer}</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
