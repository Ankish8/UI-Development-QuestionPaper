/* eslint-disable react/no-unescaped-entities */
'use client'

import React, { useState, useEffect } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Candy } from 'lucide-react'

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
    description: "Addressing the needs of different user groups (drivers, cyclists, pedestrians). Appropriate use of visual hierarchy to present important information.",
  },
  {
    criterion: "Adherence to Assumptions and Constraints",
    marks: 10,
    description: "Compliance with the specified assumptions and constraints (e.g., connected infrastructure, user group).",
  },
  {
    criterion: "UX Research and Documentation",
    marks: 15,
    description: "Quality and depth of UX research, including user personas, journey maps, and interview insights. Proper documentation of interview questions and competitor analysis.",
  },
  {
    criterion: "Prototype and Visual Design",
    marks: 10,
    description: "High-fidelity mockups, wireframes, and prototypes that accurately demonstrate the key features. Aesthetic quality and visual consistency.",
  },
  {
    criterion: "Presentation and Case Study",
    marks: 5,
    description: "Clarity and professionalism of the final presentation, which should effectively document the entire UX and UI design process. Highlighting key features, design decisions, and research insights.",
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
        <div className="overflow-x-auto">
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
        </div>
        <div className="mt-4 flex items-center text-sm text-muted-foreground">
          <Candy className="mr-2 h-4 w-4 text-pink-500" />
          <p>Note: Each Kit Kat point will be worth 10 bonus marks, which are not included in the overall total.</p>
        </div>
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
          <h2 className="text-xl sm:text-2xl font-bold">Question</h2>
          <p className="leading-relaxed">
            Design a <strong>City Traffic Management Mobile Application for a Connected City</strong>. Create a UI design for managing city traffic where vehicles and infrastructure are connected in a smart city environment. Additionally, create a case study documenting the entire UX and UI design process, including research, ideation, and validation. The application should enable real-time data exchange between vehicles, traffic lights, public transport, and other infrastructure, enhancing traffic flow, safety, and efficiency.
          </p>
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Brief</h3>
            <p className="leading-relaxed">
              In this connected city, all vehicles (cars, buses, bikes) and infrastructure (traffic lights, parking lots, road sensors) are part of an interconnected system that communicates in real-time. The goal is to design a mobile application that utilizes this network to provide real-time navigation, traffic management, and safety features for drivers, cyclists, and pedestrians.
            </p>
            <p className="leading-relaxed mt-2">
              The app will help users optimize their routes, find parking, receive alerts from infrastructure (like upcoming traffic signals or accidents), and contribute to reducing congestion and emissions by promoting eco-friendly transport options.
            </p>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Key Features to Focus On</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li><strong>Connected Vehicles & Infrastructure Alerts:</strong> Show real-time updates from connected infrastructure such as smart traffic lights, road sensors, and parking systems. Alerts for upcoming traffic signals, accidents, construction zones, and changing speed limits.</li>
              <li><strong>Route Optimization with Predictive Traffic:</strong> Offer dynamic route suggestions using real-time data from connected vehicles and infrastructure. Predict traffic patterns based on data such as vehicle speed, density, and public transit schedules.</li>
              <li><strong>Smart Parking Assistance:</strong> Display available parking spots through integration with smart parking systems. The app should suggest nearby parking options based on location and availability.</li>
              <li><strong>Safety & Collision Avoidance:</strong> Provide safety alerts such as collision warnings, pedestrian crossings, or emergency vehicle approach, leveraging communication between vehicles and the app.</li>
              <li><strong>Eco-Friendly Route Suggestions:</strong> Offer environmentally optimized routes by integrating data from the city's bike-sharing systems, electric vehicle (EV) charging stations, and promoting public transit or carpooling when appropriate.</li>
            </ol>
          </div>
        </div>
      ),
    },
    {
      id: "marking",
      title: "Marking",
      content: <MarkingSchemeTable />,
    },
    {
      id: "journey",
      title: "Journey",
      content: (
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold">Customer Journey</h2>
          <p>To help understand what needs to be designed, here is a quick customer journey:</p>
          <ol className="list-decimal pl-6 space-y-2">
            <li><strong>Route Planning:</strong> The user opens the app to plan their route, which includes predictive traffic and eco-friendly suggestions.</li>
            <li><strong>Navigation Assistance:</strong> During the journey, the user receives real-time updates about traffic signals, road conditions, and accidents.</li>
            <li><strong>Parking Search:</strong> As the user approaches their destination, they use the smart parking feature to find available spots nearby.</li>
            <li><strong>Safety Alerts:</strong> The app notifies the user of any potential hazards, such as pedestrian crossings, construction zones, or approaching emergency vehicles.</li>
            <li><strong>Route Optimization:</strong> The app dynamically adjusts the route based on real-time traffic data to ensure the fastest and most eco-friendly path is taken.</li>
          </ol>
        </div>
      ),
    },
    {
      id: "screens",
      title: "Screens",
      content: (
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold">Number of Screens Needed</h2>
          <p>The proposed design should include the following screens to support the full user journey:</p>
          <ol className="list-decimal pl-6 space-y-2">
            <li><strong>Login Screen:</strong> For user authentication.</li>
            <li><strong>Dashboard:</strong> Overview of available features like route planning, parking, and safety alerts.</li>
            <li><strong>Route Planning Screen:</strong> For users to input their destination and receive optimized routes.</li>
            <li><strong>Navigation Screen:</strong> Real-time navigation with alerts for traffic signals, accidents, and route changes.</li>
            <li><strong>Parking Assistance Screen:</strong> To display available parking options and provide directions.</li>
            <li><strong>Safety Alerts Screen:</strong> Alerts for hazards such as collisions, pedestrian crossings, and emergency vehicles.</li>
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
          <h2 className="text-xl sm:text-2xl font-bold">Deliverables</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">1. Research Report</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2">
                  <p>A detailed report on the design approach, assumptions, and constraints.</p>
                  <ul className="list-disc pl-6">
                    <li>Include findings from <strong>UX research</strong>, including user personas, user journey maps, and insights gathered from interviews.</li>
                    <li><strong>Interview Questions:</strong> Develop a set of interview questions targeted at understanding user needs, pain points, and current challenges with city traffic management.</li>
                    <li><strong>Competitor Analysis:</strong> A comparison of existing traffic management or navigation apps, highlighting gaps and opportunities.</li>
                    <li><strong>User Flows:</strong> Detailed visual representations of the steps users will take to accomplish key tasks.</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">2. UI Design and Case Study</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2">
                  <p>A comprehensive case study that documents the entire process of creating the mobile application, presented in PDF format for jury review.</p>
                  <ul className="list-disc pl-6">
                    <li><strong>Wireframes:</strong> Include both low-fidelity and high-fidelity wireframes to illustrate the progression of the design.</li>
                    <li><strong>Prototypes:</strong> An interactive prototype that demonstrates the key features and functionality of the application.</li>
                    <li><strong>Design Decisions:</strong> Highlight key decisions and their rationale, based on user needs and research insights.</li>
                    <li><strong>User Testing:</strong> Provide details of user testing sessions, including feedback and how it was used to iterate on the design.</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      ),
    },
  ]

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-xl sm:text-2xl md:text-3xl">City Traffic Management Mobile Application for a Connected City</CardTitle>
          <CardDescription>End Semester Question Paper</CardDescription>
        </CardHeader>
      </Card>

      {isMobile ? (
        <div className="space-y-4">
          {content.map((item) => (
            <Accordion key={item.id} type="single" collapsible>
              <AccordionItem value={item.id}>
                <AccordionTrigger className="text-lg font-semibold">{item.title}</AccordionTrigger>
                <AccordionContent>
                  <div className="max-h-[60vh] overflow-y-auto pr-4">
                    {item.content}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
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
    </div>
  )
}