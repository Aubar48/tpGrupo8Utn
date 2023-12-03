import React from "react";
import { CheckIcon } from "@heroicons/react/20/solid";

export const CardSimple = () => {
  const cardSimpleData = [
    {
      title: "Membership Plan 1",
      description: "Description for Membership Plan 1.",
      includedFeatures: ["Feature 1", "Feature 2", "Feature 3"],
      paymentInfo: "One-time payment",
      price: "$199",
      currency: "USD",
      link: "#",
      buttonText: "Get Access Now",
      additionalInfo: "Some additional information about this plan.",
      alignment: "start",
      animationDirection: "right",
    },
    {
      title: "Membership Plan 2",
      description: "Description for Membership Plan 2.",
      includedFeatures: ["Feature A", "Feature B", "Feature C"],
      paymentInfo: "Monthly subscription",
      price: "$399.00",
      currency: "USD",
      link: "#",
      buttonText: "Subscribe Now",
      additionalInfo: "Some additional information about this plan.",
      alignment: "end",
      animationDirection: "left",
    },
    {
      title: "Membership Plan3",
      description: "Description for Membership Plan 2.",
      includedFeatures: ["Feature A", "Feature B", "Feature C"],
      paymentInfo: "Monthly subscription",
      price: "$899.00",
      currency: "USD",
      link: "#",
      buttonText: "Subscribe Now",
      additionalInfo: "Some additional information about this plan.",
      alignment: "start",
      animationDirection: "right",
    },
  ];

  return (
    <>
      {cardSimpleData.map((data, index) => (
        <div
          key={index}
          className={`flex flex-col  ${
            data.alignment === "start" ? "justify-start" : "justify-end"
          }`}
        >
          <div
            className={``}
            data-aos={`fade-${data.animationDirection}`}
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="2000"
          >
            <div className={`mx-auto max-w-5xl px-6 `}>
              <div
                className={`mx-auto max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none ${
                  data.alignment === "start" ? "justify-start" : "justify-end"
                }`}
              >
                <div className="p-8 sm:p-10 lg:flex-auto">
                  <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                    {data.title}
                  </h3>
                  <p className="mt-6 text-base leading-7 text-gray-600">
                    {data.description}
                  </p>
                  <div className="mt-10 flex items-center gap-x-4">
                    <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">
                      What’s included
                    </h4>
                    <div className="h-px flex-auto bg-gray-100" />
                  </div>
                  <ul
                    role="list"
                    className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
                  >
                    {data.includedFeatures.map((feature, index) => (
                      <li key={index} className="flex gap-x-3">
                        <CheckIcon
                          className="h-6 w-5 flex-none text-indigo-600"
                          aria-hidden="true"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                  <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                    <div className="mx-auto max-w-xs px-8">
                      <p className="text-base font-semibold text-gray-600">
                        {data.paymentInfo}
                      </p>
                      <p className="mt-6 flex items-baseline justify-center gap-x-2">
                        <span className="text-5xl font-bold tracking-tight text-gray-900">
                          {data.price}
                        </span>
                        <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                          {data.currency}
                        </span>
                      </p>
                      <a
                        href={data.link}
                        className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        {data.buttonText}
                      </a>
                      <p className="mt-6 text-xs leading-5 text-gray-600">
                        {data.additionalInfo}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
