'use client'

import React, { useState, useEffect } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const markingCriteria = [
  {
    criterion: "Completeness of UI Design",
    marks: 25,
    description: "Addressing all necessary features and workflows as outlined in the requirements. Including all necessary screens to support the full user journey.",
  },
  {
    criterion: "Usability",
    marks: 20,
    description: "Ease of use and intuitiveness of the user interface. Effective navigation, minimal user effort, and clarity in design elements.",
  },
  {
    criterion: "User Alignment",
    marks: 15,
    description: "Addressing the needs of the specified user group (sonographers, radiologists, fetal medicine specialists). Appropriate use of visual hierarchy to present important information.",
  },
  {
    criterion: "Adherence to Assumptions and Constraints",
    marks: 10,
    description: "Compliance with the specified assumptions and constraints (e.g., display size, user group).",
  },
  {
    criterion: "UX Research and Documentation",
    marks: 15,
    description: "Quality and depth of UX research, including user personas, journey maps, and interview insights. Proper documentation of interview questions and competitor analysis.",
  },
  {
    criterion: "Prototype and Visual Design",
    marks: 10,
    description: "High-fidelity mockups, wireframes, and prototype that accurately demonstrate the key features. Aesthetic quality and visual consistency.",
  },
  {
    criterion: "Presentation and Communication",
    marks: 5,
    description: "Clarity and professionalism of the final presentation. Effectively communicating key features and design decisions.",
  },
]

function MarkingSchemeTable() {
  const totalMarks = markingCriteria.reduce((sum, criterion) => sum + criterion.marks, 0)

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-xl sm:text-2xl font-bold text-center">Marking Scheme</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[120px] sm:w-[200px]">Criterion</TableHead>
              <TableHead className="text-right">Marks</TableHead>
              <TableHead className="hidden md:table-cell">Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {markingCriteria.map((criterion, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{criterion.criterion}</TableCell>
                <TableCell className="text-right">{criterion.marks}</TableCell>
                <TableCell className="hidden md:table-cell">{criterion.description}</TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell className="font-bold">Total</TableCell>
              <TableCell className="text-right font-bold">{totalMarks}</TableCell>
              <TableCell className="hidden md:table-cell"></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

export default function QuestionPaper() {
  const [activeTab, setActiveTab] = useState("question")
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const content = [
    {
      id: "question",
      title: "Question",
      content: (
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">Question</h2>
          <p className="mb-4">
            Design a UI for a proposed reporting software product intended to assist in clinical decision-making for sonographers, radiologists, and fetal medicine specialists. The software should include the following functionalities:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Checklist of Findings:</strong> A checklist of findings to be reviewed.</li>
            <li><strong>Measurement Management:</strong> The ability to create new measurements or modify existing ones, either manually or automatically.</li>
            <li><strong>Reporting Feature:</strong> A reporting feature that can export in PDF or an editable format.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-semibold mb-2">Assumptions</h3>
          <p className="mb-4">
            The proposed product serves as a clinical decision support tool, not a standalone diagnostic solution. Users can override AI findings if they disagree with them.
          </p>
          <h3 className="text-lg sm:text-xl font-semibold mb-2">Constraints</h3>
          <ul className="list-disc pl-6">
            <li><strong>Display:</strong> Designed for a 21-24 inch monitor.</li>
            <li><strong>User Group:</strong> Sonographers, radiologists, fetal medicine specialists.</li>
            <li><strong>Workflow:</strong>
              <ol className="list-decimal pl-6">
                <li>The sonographer performs a scan using an ultrasound machine.</li>
                <li>After the scan, they move to a workstation to generate the report using the reporting software.</li>
                <li>Images and findings from the ultrasound machine are transferred to the reporting software for further use.</li>
              </ol>
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "marking",
      title: "Marking Scheme",
      content: <MarkingSchemeTable />,
    },
    {
      id: "journey",
      title: "Customer Journey",
      content: (
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">Customer Journey</h2>
          <p className="mb-4">To help understand what needs to be designed, here is a quick customer journey:</p>
          <ol className="list-decimal pl-6">
            <li><strong>Image Acquisition:</strong> The sonographer performs an ultrasound scan, capturing images and initial findings.</li>
            <li><strong>Data Transfer:</strong> The ultrasound images and initial findings are transferred to the reporting software.</li>
            <li><strong>Review Findings:</strong> The sonographer or radiologist logs in to the reporting software and reviews the AI-generated checklist of findings.</li>
            <li><strong>Measurement Management:</strong> If necessary, the user can create new measurements or modify existing ones, either manually or automatically.</li>
            <li><strong>Report Generation:</strong> The user finalizes the findings, and a report is generated, which can be exported in PDF or an editable format.</li>
            <li><strong>Report Review and Submission:</strong> The report is reviewed for accuracy and then submitted or shared with other specialists as required.</li>
          </ol>
        </div>
      ),
    },
    {
      id: "screens",
      title: "Screens",
      content: (
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">Number of Screens Needed</h2>
          <p className="mb-4">The proposed design should include the following screens to support the full user journey:</p>
          <ol className="list-decimal pl-6">
            <li><strong>Login Screen:</strong> For user authentication.</li>
            <li><strong>Dashboard:</strong> Overview of recent scans and reports, providing quick access to ongoing cases.</li>
            <li><strong>Image Review Screen:</strong> To view and analyze ultrasound images, ensuring all relevant information is available.</li>
            <li><strong>Checklist and Measurement Screen:</strong> For reviewing findings, creating new measurements, and modifying existing ones.</li>
            <li><strong>Report Generation Screen:</strong> To compile findings, finalize the report, and export it in PDF or an editable format.</li>
            <li><strong>Report Review and Submission Screen:</strong> For the user to review the completed report for accuracy, submit it, or share it with other specialists.</li>
            <li><strong>Settings Screen:</strong> To customize user preferences and software settings.</li>
          </ol>
        </div>
      ),
    },
    {
      id: "deliverables",
      title: "Deliverables",
      content: (
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">Deliverables</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>1. Research Report</AccordionTrigger>
              <AccordionContent>
                <p>A detailed report on the design approach, assumptions, and constraints.</p>
                <ul className="list-disc pl-6 mt-2">
                  <li>Include findings from <strong>UX research</strong>, including user personas, user journey maps, and insights gathered from interviews.</li>
                  <li><strong>Interview Questions:</strong> Develop a set of interview questions targeted at understanding user needs, pain points, and current workflow practices.</li>
                  <li><strong>Competitor Analysis:</strong> A comparison of existing reporting tools used in similar clinical settings, highlighting gaps and opportunities.</li>
                  <li><strong>User Flows:</strong> Detailed visual representations of the steps users will take to accomplish key tasks.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>2. Presentation</AccordionTrigger>
              <AccordionContent>
                <p>A PDF summarizing the UI design and features for the jury review.</p>
                <ul className="list-disc pl-6 mt-2">
                  <li>Include <strong>wireframes</strong> and <strong>prototypes</strong> to illustrate the proposed design.</li>
                  <li>Provide a summary of <strong>user testing</strong> results, focusing on feedback received from target users and how it was implemented.</li>
                  <li>Highlight key <strong>design decisions</strong> and their rationale based on user needs.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>3. Interview and Survey Documentation</AccordionTrigger>
              <AccordionContent>
                <p>A document detailing the interview process, survey questions, and summarized results.</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>4. Wireframes and High-Fidelity Mockups</AccordionTrigger>
              <AccordionContent>
                <p>Include both low-fidelity wireframes and high-fidelity mockups to show the progression of design thinking.</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>5. Prototype</AccordionTrigger>
              <AccordionContent>
                <p>An interactive prototype that demonstrates the key features and functionality of the reporting software.</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>6. User Testing Report</AccordionTrigger>
              <AccordionContent>
                <p>A report summarizing the outcomes of user testing sessions, including user feedback, identified issues, and the improvements made.</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      ),
    },
  ]

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-xl sm:text-2xl md:text-3xl">UI Design for Clinical Decision-Making Software</CardTitle>
        <CardDescription>End Semester Question Paper</CardDescription>
      </CardHeader>
      <CardContent>
        {isMobile ? (
          <Accordion type="single" collapsible className="w-full space-y-4">
            {content.map((item) => (
              <AccordionItem key={item.id} value={item.id}>
                <AccordionTrigger className="text-lg font-semibold">{item.title}</AccordionTrigger>
                <AccordionContent>{item.content}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        ) : (
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-5 mb-4">
              {content.map((item) => (
                <TabsTrigger key={item.id} value={item.id} className="text-sm sm:text-base">
                  {item.title}
                </TabsTrigger>
              ))}
            </TabsList>
            <Card>
              <CardContent className="p-4">
                <ScrollArea className="h-[calc(100vh-250px)]">
                  {content.map((item) => (
                    <TabsContent key={item.id} value={item.id} className="mt-0">
                      {item.content}
                    </TabsContent>
                  ))}
                </ScrollArea>
              </CardContent>
            </Card>
          </Tabs>
        )}
      </CardContent>
    </Card>
  )
}