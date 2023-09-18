import DocumentationTabs from "@/components/ui/DocumentationTabs"
import LargeHeading from "@/components/ui/LargeHeading"
import Paragraph from "@/components/ui/Paragraph"
import { Metadata } from "next"
import 'simplebar-react/dist/simplebar.min.css'

export const metadata: Metadata = {
    title: 'Similarity API | Documentation',
    description: 'Free & open-source text similarity API',
  }
export default function Documentation({}){
    return <div className='container max-w-7xl mx-auto mt-12 '>
    <div className='flex flex-col items-center gap-6'>
      <LargeHeading>Making a request</LargeHeading>
        <Paragraph>api/v1/similarity</Paragraph>
      
        <DocumentationTabs />
    </div>
  </div>
}