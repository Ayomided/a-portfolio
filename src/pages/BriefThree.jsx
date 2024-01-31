import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Link } from 'react-router-dom'

function BriefThree() {
  const markdown = `
  # Motion Design Brief: Visa Global Pay Animation

## Project Overview:
Visa Global Pay seeks to enhance its digital payment platform with animated elements to improve user engagement and brand recognition. The animation project aims to create dynamic visuals that align with Visa's global brand identity and highlight the convenience and security of Visa Global Pay.

## Objectives:
1. **Enhanced User Experience**: Integrate animated elements to make the Visa Global Pay platform more interactive and visually appealing for users.
2. **Brand Consistency**: Ensure that the animation design reflects Visa's established brand guidelines and visual identity.
3. **Educational Content**: Utilize animation to educate users about the features, benefits, and security measures of Visa Global Pay in a clear and engaging manner.
4. **Promotional Impact**: Leverage animated elements to promote key messages and special offers related to Visa Global Pay services.

## Target Audience:
- **Consumers**: Individuals seeking convenient and secure digital payment solutions for their everyday transactions.
- **Merchants**: Businesses interested in accepting Visa payments and leveraging Visa Global Pay to enhance customer experience.
- **Financial Institutions**: Banks and financial service providers looking to partner with Visa and offer Visa Global Pay to their customers.

## Implementation:
1. **Animated Tutorials**: Develop animated tutorials or explainer videos to guide users through the Visa Global Pay platform's features, registration process, and security measures.
2. **Interactive Elements**: Incorporate animated buttons, icons, and visual cues to make navigation intuitive and engaging for users.
3. **Brand Storytelling**: Create animated sequences that showcase real-life scenarios where Visa Global Pay provides convenient and secure payment solutions for users worldwide.
4. **Promotional Animations**: Design animated banners, pop-ups, or promotional videos to highlight special offers, discounts, or incentives for using Visa Global Pay.

## Timeline:
- **Pre-production**: Concept development, storyboard creation, and approval (2 weeks).
- **Production**: Animation design, asset creation, and integration (4 weeks).
- **Post-production**: Editing, refinement, and finalization (1 week).

## Budget:
The project budget will cover animation production, creative development, and project management fees. Detailed budget estimates and cost breakdowns are available upon request.

## Conclusion:
The Visa Global Pay animation project aims to elevate the platform's user experience and promotional efforts through strategically implemented animated elements. By leveraging animation to communicate key messages and enhance user engagement, Visa Global Pay can strengthen its position as a leading digital payment solution provider in the global market.

  `
  return (
    <div className="flex justify-center w-auto py-20 bg-gray-100">
      <div>
        <Link to="/" className="mr-10 italic underline">
          [back]
        </Link>
      </div>
      <article className="prose sm:prose-md">
        <Markdown remarkPlugins={remarkGfm}>{markdown}</Markdown>
      </article>
    </div>
  )
}

export default BriefThree
