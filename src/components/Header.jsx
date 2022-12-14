import Link from 'next/link'
import {Popover} from '@headlessui/react'
import {AnimatePresence, motion} from 'framer-motion'
import {useState} from 'react'

import {Button} from '@/components/Button'
import {Container} from '@/components/Container'
import {Logo} from '@/components/Logo'
import {NavLinks} from '@/components/NavLinks'
import {Services} from "@/components/Services";
import {CookieConsent} from "@/components/Cookie-Privacy-Popup";

function MenuIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 6h14M5 18h14M5 12h14"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ChevronUpIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M17 14l-5-5-5 5"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MobileNavLink({ children, ...props }) {
  return (
    <Popover.Button
      as={Link}
      className="block text-base leading-7 tracking-tight text-gray-700"
      {...props}
    >
      {children}
    </Popover.Button>
  )
}

export function Header() {
  const showPop = false;
  const [isOpenMobile, setIsOpenMobile] = useState(false)

  const cookieConsentData = {
    "Heading": "Cookie Consent",
    "Content": "This website collects cookies to deliver better user experience",
    "Button1Text": "Accept",
    "Button2Text": "Cancel"
  }
  return (
    <header>
      <nav>
        <Container className="relative z-50 flex justify-between py-8">
            <Link href="/" aria-label="Home">
              <Logo className="h-10 w-auto" />
            </Link>
          <div className="relative z-10 flex items-center gap-16">
            <div className="hidden lg:flex lg:gap-10">
              <NavLinks />
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Popover className="lg:hidden">
              {({ open }) => (
                <>
                  <Popover.Button
                    className="relative z-10 -m-2 inline-flex items-center rounded-lg stroke-gray-900 p-2 hover:bg-gray-200/50 hover:stroke-gray-600 active:stroke-gray-900 [&:not(:focus-visible)]:focus:outline-none"
                    aria-label="Toggle site navigation"
                  >
                    {({ open }) =>
                      open ? (
                        <ChevronUpIcon className="h-6 w-6" />
                      ) : (
                        <MenuIcon className="h-6 w-6" />
                      )
                    }
                  </Popover.Button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <>
                        <Popover.Overlay
                          static
                          as={motion.div}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="fixed inset-0 z-0 bg-gray-300/60 backdrop-blur"
                        />
                        <Popover.Panel
                          static
                          as={motion.div}
                          initial={{ opacity: 0, y: -32 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{
                            opacity: 0,
                            y: -32,
                            transition: { duration: 0.2 },
                          }}
                          className="absolute inset-x-0 top-0 z-0 origin-top rounded-b-2xl bg-gray-50 px-6 pb-6 pt-32 shadow-2xl shadow-gray-900/20"
                        >
                          <div className="space-y-4">
                            <div
                              onClick={() => setIsOpenMobile(!isOpenMobile)}
                              className="block text-base leading-7 tracking-tight text-gray-700"
                            >
                              Services
                              {isOpenMobile && <Services show={true} />}
                            </div>     
                            <MobileNavLink href="/pricing">
                              Pricing
                            </MobileNavLink>
                            <MobileNavLink href="/contact">
                              Contact
                            </MobileNavLink>
                            <MobileNavLink href="/blog">
                              Blog
                            </MobileNavLink>
                          </div>
                          <div className="mt-8 flex flex-col gap-4">
                            <Button href="https://admin.gappblocks.com" variant="outline">
                              Sign In
                            </Button>
                            <Button href="/pricing">Sign Up</Button>
                          </div>
                        </Popover.Panel>
                      </>
                    )}
                  </AnimatePresence>
                </>
              )}
            </Popover>
            <Button href="https://admin.gappblocks.com" variant="outline" className="hidden lg:block">
              Sign In
            </Button>
            <Button href="/pricing" className="hidden lg:block">
              Sign Up
            </Button>
          </div>
        </Container>
      </nav>
        {showPop &&
            <CookieConsent data={cookieConsentData}/>
        }
  </header>
  )
}
