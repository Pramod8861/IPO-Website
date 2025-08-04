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

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="faq-section">
      <h2 className="faq-title">Frequently Asked Questions?</h2>
      <p className="faq-description">Find answers to common questions that come in your mind related to IPO</p>

      <div>
        {faqData.map((faq, index) => (
          <div key={index} className="faq-item">
            <button className="faq-question" onClick={() => toggleFAQ(index)}>
              <span>{faq.question}</span>
              {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            {openIndex === index && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  )
}

export default FAQ
