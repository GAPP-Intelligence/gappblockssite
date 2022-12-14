import {
    ArrowUturnLeftIcon,
    ChatBubbleBottomCenterTextIcon,
    ChatBubbleLeftEllipsisIcon,
    ChatBubbleLeftRightIcon,
    DocumentChartBarIcon,
    HeartIcon,
    InboxIcon,
    PencilSquareIcon,
    QuestionMarkCircleIcon,
    TrashIcon,
    UsersIcon,
} from '@heroicons/react/24/outline'
import {ArrowTopRightOnSquareIcon} from "@heroicons/react/20/solid";
import Link from 'next/link'
import ApplePayLogo from '@/images/payments-logo/1-apple-pay.png'
import GooglePay from '@/images/payments-logo/2-google-pay.png'
import MasterCard from '@/images/payments-logo/3-master-card.png'
import Visa from '@/images/payments-logo/4-visa-logo.png'
import Ax from '@/images/payments-logo/5-ax-logo.png'
import Discover from '@/images/payments-logo/6-discover.png'

import PayPalLogo from '@/images/payments-logo/paypal-logo.png'
import SquareLogo from '@/images/payments-logo/square-logo.png'
import StripeLogo from '@/images/payments-logo/stripe-logo.png'

import SimplifyCheckout from '@/images/payment.png'

const solutions = [
    {
        name: 'Inbox',
        description: 'Get a better understanding of where your traffic is coming from.',
        href: '#',
        icon: InboxIcon,
    },
    {
        name: 'Messaging',
        description: 'Speak directly to your customers in a more meaningful way.',
        href: '#',
        icon: ChatBubbleBottomCenterTextIcon,
    },
    {
        name: 'Live Chat',
        description: "Your customers' data will be safe and secure.",
        href: '#',
        icon: ChatBubbleLeftRightIcon,
    },
    {
        name: 'Knowledge Base',
        description: "Connect with third-party tools that you're already using.",
        href: '#',
        icon: QuestionMarkCircleIcon,
    },
]
const features = [
    {
        name: 'Unlimited Inboxes',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: InboxIcon,
    },
    {
        name: 'Manage Team Members',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: UsersIcon,
    },
    {
        name: 'Spam Report',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: TrashIcon,
    },
    {
        name: 'Compose in Markdown',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: PencilSquareIcon,
    },
    {
        name: 'Team Reporting',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: DocumentChartBarIcon,
    },
    {
        name: 'Saved Replies',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: ArrowUturnLeftIcon,
    },
    {
        name: 'Email Commenting',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: ChatBubbleLeftEllipsisIcon,
    },
    {
        name: 'Connect with Customers',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: HeartIcon,
    },
]
const metrics = [
    {id: 1, stat: '8K+', emphasis: 'Companies', rest: 'use laoreet amet lacus nibh integer quis.'},
    {id: 2, stat: '25K+', emphasis: 'Countries around the globe', rest: 'lacus nibh integer quis.'},
    {id: 3, stat: '98%', emphasis: 'Customer satisfaction', rest: 'laoreet amet lacus nibh integer quis.'},
    {id: 4, stat: '12M+', emphasis: 'Issues resolved', rest: 'lacus nibh integer quis.'},
]
const footerNavigation = {
    solutions: [
        {name: 'Marketing', href: '#'},
        {name: 'Analytics', href: '#'},
        {name: 'Commerce', href: '#'},
        {name: 'Insights', href: '#'},
    ],
    support: [
        {name: 'Pricing', href: '#'},
        {name: 'Documentation', href: '#'},
        {name: 'Guides', href: '#'},
        {name: 'API Status', href: '#'},
    ],
    company: [
        {name: 'About', href: '#'},
        {name: 'Blog', href: '#'},
        {name: 'Jobs', href: '#'},
        {name: 'Press', href: '#'},
        {name: 'Partners', href: '#'},
    ],
    legal: [
        {name: 'Claim', href: '#'},
        {name: 'Privacy', href: '#'},
        {name: 'Terms', href: '#'},
    ],
    social: [
        {
            name: 'Facebook',
            href: '#',
            icon: (props) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
        {
            name: 'Instagram',
            href: '#',
            icon: (props) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
        {
            name: 'Twitter',
            href: '#',
            icon: (props) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                </svg>
            ),
        },
        {
            name: 'GitHub',
            href: '#',
            icon: (props) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
        {
            name: 'Dribbble',
            href: '#',
            icon: (props) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
    ],
}

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export function LogoCloud1PaymentPage() {
    return (
        <div className="bg-indigo-200 bg-opacity-25">
            <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                    <h2 className="mx-auto max-w-md text-center text-3xl font-bold tracking-tight text-accent lg:max-w-xl lg:text-left">
                        Choose Your Preferred Way of Payment  
                    </h2>
                    <div className="mt-8 flow-root self-center lg:mt-0">
                        <div className="-mt-4 -ml-8 flex flex-wrap justify-between lg:-ml-4">
                            <div
                                className="mt-4 ml-8 flex flex-shrink-0 flex-grow justify-center lg:ml-4 lg:flex-grow-0">
                                <img
                                    className="h-12"
                                    src={PayPalLogo.src}
                                    alt="Workcation"
                                />
                            </div>
                            <div
                                className="mt-4 ml-8 flex flex-shrink-0 flex-grow justify-center lg:ml-4 lg:flex-grow-0">
                                <img className="h-12" src={SquareLogo.src}
                                     alt="Tuple"/>
                            </div>
                            <div
                                className="mt-4 ml-8 flex flex-shrink-0 flex-grow justify-center lg:ml-4 lg:flex-grow-0">
                                <img className="h-12" src={StripeLogo.src}
                                     alt="Level"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function AlternatingFeatureSection() {
    return (
        <div className="relative bg-gray-800">
            <div className="h-56 bg-accent sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
                <img
                    className="filter-blue w-full h-full object-cover"
                    src={SimplifyCheckout.src}
                    alt=""
                />
            </div>
            <div className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                <div className="md:ml-auto md:w-1/2 md:pl-10">
                    <p className="mt-2 text-white text-3xl font-bold tracking-tight sm:text-3xl">Simplify your checkout process.</p>
                    <p className="mt-3 text-lg text-gray-300">
                        GAPP Blocks is a scalable, easy-to-use and fast way to set up merchants with an eCommerce store. Now you can sell anywhere without the hassle of third-party payment gateways: just integrate once, get your store set up and selling in one click, and enjoy easy payment processing for any mobile device or desktop. 
                    </p>
                    <div className="mt-8">
                        <div className="inline-flex rounded-md shadow">
                            <a
                                href=".pricing"
                                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50"
                            >
                                Start Now
                                <ArrowTopRightOnSquareIcon className="-mr-1 ml-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function LogoCloud2PaymentPage() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            A friendly checkout experience 
                        </h2>
                        <p className="mt-3 max-w-3xl text-lg text-gray-500">
                            Choosing between different payment methods and currencies for your site can be hard, so GAPP Blocks gives you a simplified checkout experience. Choose from the most common payment methods and currencies in your area to ensure a pleasant checkout experience. 
                        </p>
                        <div className="mt-8 sm:flex">
                            <div className="rounded-md shadow">
                                <Link
                                    href="/pricing"
                                    className="flex items-center justify-center rounded-md border border-transparent bg-accent px-5 py-3 text-base font-medium text-white"
                                >
                                    Start Now
                                </Link>
                            </div>
                            <div className="mt-3 sm:mt-0 sm:ml-3">
                                <Link
                                    href="/contact"
                                    className="flex items-center justify-center rounded-md border border-transparent bg-indigo-50 px-5 py-3 text-base font-medium text-accent"
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
                        <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                            <img
                                className="max-h-12"
                                src={ApplePayLogo.src}
                                alt="Workcation"
                            />
                        </div>
                        <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                            <img className="max-h-12" src={GooglePay.src}
                                 alt="Mirage"/>
                        </div>
                        <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                            <img className="max-h-12" src={MasterCard.src}
                                 alt="Tuple"/>
                        </div>
                        <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                            <img
                                className="max-h-12"
                                src={Visa.src}
                                alt="Laravel"
                            />
                        </div>
                        <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                            <img
                                className="max-h-12"
                                src={Ax.src}
                                alt="StaticKit"
                            />
                        </div>
                        <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                            <img
                                className="max-h-12"
                                src={Discover.src}
                                alt="Statamic"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
