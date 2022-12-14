import { AppStoreLink } from '@/components/AppStoreLink'
import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'
import {Button} from "@/components/Button";

export function CallToAction(props) {
  return (
    <section
      id="get-free-shares-today"
      className="relative overflow-hidden bg-gray-900 py-20 sm:py-28"
    >
      <div className="absolute top-1/2 left-20 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
        <CircleBackground color="#fff" className="animate-spin-slower" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-md sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
          {props.content ? props.content.Heading : ""}
          </h2>
          <p className="mt-4 text-lg text-gray-300">
          {props.content ? props.content.innerContent : ""}
          </p>
          <div className="mt-8 flex justify-center">
              <Button href={props.content ? props.content.buttonLink : ""} color="white" className="text-black">
                {props.content ? props.content.buttonText : ""}
              </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
