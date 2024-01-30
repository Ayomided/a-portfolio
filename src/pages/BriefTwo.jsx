import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Link } from 'react-router-dom'

function BriefTwo() {
  const markdown = `
  # Motion Design Brief: Ennoble Logo Animation

## Project Overview:
The logo animation project aims to visually represent the identity and values of Ennoble, a parent company for brands like Buy Flower. Through dynamic motion graphics, the animation will convey the essence of Ennoble's brand, including its commitment to innovation, quality, and growth.

## Campaign Objectives:
1. **Brand Recognition**: Create a memorable and recognizable logo animation that reflects the Ennoble brand identity.
2. **Engagement**: Capture audience attention and evoke positive emotions through captivating visuals and animation effects.
3. **Storytelling**: Communicate Ennoble's core values and mission through motion graphics, reinforcing its position as a trusted and forward-thinking company.
4. **Differentiation**: Stand out in the market by showcasing Ennoble's unique personality and distinct brand attributes.

## Target Audience:
- **Existing and Potential Customers**: Individuals interested in Ennoble's products and services, including Buy Flower customers.
- **Stakeholders and Partners**: Investors, business associates, and industry collaborators.
- **General Public**: Anyone interested in learning about Ennoble's brand story and values.

## Creative Approach:
1. **Symbolism**: Incorporate visual elements that symbolize growth, transformation, and innovation, reflecting Ennoble's dynamic nature.
2. **Fluid Motion**: Utilize smooth and fluid animations to convey a sense of elegance and sophistication, aligning with Ennoble's premium brand positioning.
3. **Color Palette**: Employ Ennoble's brand colors effectively to enhance brand recognition and create a cohesive visual experience.
4. **Sound Design**: Integrate subtle sound effects or music that complement the animation and enhance viewer engagement.
5. **Narrative Arc**: Develop a brief narrative arc within the animation to capture attention and communicate key brand messages effectively.

## Deliverables:
1. **Logo Animation**: A visually stunning and professionally crafted logo animation showcasing Ennoble's brand identity.
2. **Variations**: Provide different versions of the logo animation tailored for various platforms and use cases, including social media, websites, and presentations.
3. **Documentation**: Comprehensive documentation outlining the animation concept, design decisions, and technical specifications for future reference.

## Timeline:
- **Pre-production**: Concept development, storyboard creation, and client approval (2 weeks).
- **Production**: Animation design, asset creation, and sound integration (4 weeks).
- **Post-production**: Editing, refinement, and finalization (1 week).

## Budget:
The project budget will cover creative development, animation production, sound design, and project management fees. Detailed budget estimates and cost breakdowns are available upon request.

## Measurement and Evaluation:
- **Audience Feedback**: Gather feedback from stakeholders and target audience members to assess the effectiveness of the animation in conveying Ennoble's brand message.
- **Performance Metrics**: Monitor engagement metrics, such as views, likes, shares, and comments on digital platforms where the animation is published.
- **Brand Impact**: Evaluate the animation's impact on brand awareness, perception, and audience sentiment through surveys and analytics tools.

## Conclusion:
The Ennoble logo animation project aims to elevate the brand's visual identity and storytelling capabilities through compelling motion graphics. By leveraging innovative design techniques and strategic storytelling, the animation will reinforce Ennoble's position as a trusted and aspirational brand in the marketplace.

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

export default BriefTwo
