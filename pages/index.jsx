import Masthead from '../components/Masthead'
import BeingIntrovertHard from '../components/BeingIntrovertHard'
import WhatYouWillLearn from '../components/WhatYouWillLearn'
import WhatIsIncluded from '../components/WhatIsIncluded'
import Feature1 from '../components/Feature1'
import Feature2 from '../components/Feature2'
import Pricing from '../components/Pricing'
import WhatDoYouGet from '../components/WhatDoYouGet'
import Testimonials from '../components/Testimonials'
import TestimonialCentered from '../components/TestimonialCentered'
import TestimonialLargeAvatar1 from '../components/TestimonialLargeAvatar1'
import TestimonialLargeAvatar2 from '../components/TestimonialLargeAvatar2'
import IntroTQA from '../components/IntroTQA'
import Gift from '../components/Gift'
import { PricingContextProvider } from '../components/pricing-utils/Context'

export default function IndexPage() {
  return (
    <PricingContextProvider>
      <Masthead />
      <BeingIntrovertHard />
      <IntroTQA />
      <WhatYouWillLearn />
      <TestimonialLargeAvatar1 />
      <WhatIsIncluded />
      <Feature1 />
      <TestimonialLargeAvatar2 />
      <Feature2 />
      <Pricing />
      <Testimonials />
      <Gift />
    </PricingContextProvider>
  )
}
