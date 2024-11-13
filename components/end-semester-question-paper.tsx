/* eslint-disable react/no-unescaped-entities */
'use client'

import { useState, useMemo } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Candy, Search, FileText, AlertTriangle, Trophy, Frown } from 'lucide-react'
import QuestionPaper from './question-paper'
import QuestionPaperLow from './question-paperLow'

interface Student {
  name: string
  rollNo: string
  regNo: string
  attendance: string
  kitKatPoints: number | null
  questionPaper: string
}

const students: Student[] = [
  {
    name: "Aditi Gopal Hedau",
    rollNo: "2022BDUE003",
    regNo: "JLU07566",
    attendance: "60%",
    kitKatPoints: null,
    questionPaper: "Question paper for Aditi Gopal Hedau"
  },
  {
    name: "Aditi Soni",
    rollNo: "2022BDUE002",
    regNo: "JLU06741",
    attendance: "10%",
    kitKatPoints: null,
    questionPaper: "Question paper for Aditi Soni"
  },
  {
    name: "Amito Kamble",
    rollNo: "2022BDUE004",
    regNo: "JLU07567",
    attendance: "75%",
    kitKatPoints: 1,
    questionPaper: "Question paper for Amito Kamble"
  },
  {
    name: "Anchal Gupta",
    rollNo: "2022BDUE005",
    regNo: "JLU06948",
    attendance: "95%",
    kitKatPoints: 2,
    questionPaper: "Question paper for Anchal Gupta"
  },
  {
    name: "Anish Arun Deshmukh",
    rollNo: "2022BDUE006",
    regNo: "JLU07492",
    attendance: "60%",
    kitKatPoints: null,
    questionPaper: "Question paper for Anish Arun Deshmukh"
  },
  {
    name: "Anna Christina Francis",
    rollNo: "2022BDUE007",
    regNo: "JLU06774",
    attendance: "60%",
    kitKatPoints: null,
    questionPaper: "Question paper for Anna Christina Francis"
  },
  {
    name: "Anushka Gupta",
    rollNo: "2022BDUE008",
    regNo: "JLU07161",
    attendance: "0%",
    kitKatPoints: null,
    questionPaper: "Question paper for Anushka Gupta"
  },
  {
    name: "Anushka Shrivastava",
    rollNo: "2022BDUE036",
    regNo: "JLU07640",
    attendance: "75%",
    kitKatPoints: 3,
    questionPaper: "Question paper for Anushka Shrivastava"
  },
  {
    name: "Arshi Khan",
    rollNo: "2022BDAFD002",
    regNo: "JLU07013",
    attendance: "60%",
    kitKatPoints: null,
    questionPaper: "Question paper for Arshi Khan"
  },
  {
    name: "Bhagesh Khongal",
    rollNo: "2022BDAFD004",
    regNo: "JLU07558",
    attendance: "85%",
    kitKatPoints: 1,
    questionPaper: "Question paper for Bhagesh Khongal"
  },
  {
    name: "Chahat Agarwal",
    rollNo: "2022BDUE009",
    regNo: "JLU06795",
    attendance: "95%",
    kitKatPoints: 2,
    questionPaper: "Question paper for Chahat Agarwal"
  },
  {
    name: "Dipesh Kumar",
    rollNo: "2022BDUE010",
    regNo: "JLU06722",
    attendance: "20%",
    kitKatPoints: null,
    questionPaper: "Question paper for Dipesh Kumar"
  },
  {
    name: "Harsh Tripathi",
    rollNo: "2022BDUE011",
    regNo: "JLU07610",
    attendance: "20%",
    kitKatPoints: null,
    questionPaper: "Question paper for Harsh Tripathi"
  },
  {
    name: "Insha Rashid",
    rollNo: "2022BDUE012",
    regNo: "JLU06728",
    attendance: "10%",
    kitKatPoints: null,
    questionPaper: "Question paper for Insha Rashid"
  },
  {
    name: "Jay Bharat Kadam",
    rollNo: "2022BDUE038",
    regNo: "JLU07647",
    attendance: "75%",
    kitKatPoints: null,
    questionPaper: "Question paper for Jay Bharat Kadam"
  },
  {
    name: "Kanika Thakur",
    rollNo: "2022BDUE013",
    regNo: "JLU06949",
    attendance: "75%",
    kitKatPoints: null,
    questionPaper: "Question paper for Kanika Thakur"
  },
  {
    name: "Kartik Diwakar Durge",
    rollNo: "2022BDUE015",
    regNo: "JLU07168",
    attendance: "85%",
    kitKatPoints: 3,
    questionPaper: "Question paper for Kartik Diwakar Durge"
  },
  {
    name: "Krishna Agrawal",
    rollNo: "2022BDUE016",
    regNo: "JLU06782",
    attendance: "0%",
    kitKatPoints: null,
    questionPaper: "Question paper for Krishna Agrawal"
  },
  {
    name: "Kunal Naidu",
    rollNo: "2022BDUE017",
    regNo: "JLU07393",
    attendance: "85%",
    kitKatPoints: 1,
    questionPaper: "Question paper for Kunal Naidu"
  },
  {
    name: "Mansi Prabha",
    rollNo: "2022BDUE018",
    regNo: "JLU07169",
    attendance: "60%",
    kitKatPoints: null,
    questionPaper: "Question paper for Mansi Prabha"
  },
  {
    name: "Parth Nigam",
    rollNo: "2022BDUE020",
    regNo: "JLU06731",
    attendance: "0%",
    kitKatPoints: null,
    questionPaper: "Question paper for Parth Nigam"
  },
  {
    name: "Pratham Sonar",
    rollNo: "2022BDUE021",
    regNo: "JLU07096",
    attendance: "10%",
    kitKatPoints: null,
    questionPaper: "Question paper for Pratham Sonar"
  },
  {
    name: "Preyanshi Shrivastava",
    rollNo: "2022BDAFD006",
    regNo: "JLU07146",
    attendance: "65%",
    kitKatPoints: null,
    questionPaper: "Question paper for Preyanshi Shrivastava"
  },
  {
    name: "Radhika Udainia",
    rollNo: "2022BDUE022",
    regNo: "JLU07354",
    attendance: "80%",
    kitKatPoints: null,
    questionPaper: "Question paper for Radhika Udainia"
  },
  {
    name: "Rishika Goyal",
    rollNo: "2022BDUE023",
    regNo: "JLU07015",
    attendance: "70%",
    kitKatPoints: null,
    questionPaper: "Question paper for Rishika Goyal"
  },
  {
    name: "Ritika Singhal",
    rollNo: "2022BDUE024",
    regNo: "JLU06742",
    attendance: "55%",
    kitKatPoints: null,
    questionPaper: "Question paper for Ritika Singhal"
  },
  {
    name: "Saanvi Raje",
    rollNo: "2022BDUE025",
    regNo: "JLU07602",
    attendance: "85%",
    kitKatPoints: null,
    questionPaper: "Question paper for Saanvi Raje"
  },
  {
    name: "Shambhavi Vishal Kirtankar",
    rollNo: "2022BDUE026",
    regNo: "JLU07565",
    attendance: "80%",
    kitKatPoints: null,
    questionPaper: "Question paper for Shambhavi Vishal Kirtankar"
  },
  {
    name: "Shivraj Ranjeet Inamdar",
    rollNo: "2022BDUE027",
    regNo: "JLU07470",
    attendance: "75%",
    kitKatPoints: null,
    questionPaper: "Question paper for Shivraj Ranjeet Inamdar"
  },
  {
    name: "Sneha Natani",
    rollNo: "2022BDUE028",
    regNo: "JLU06740",
    attendance: "40%",
    kitKatPoints: null,
    questionPaper: "Question paper for Sneha Natani"
  },
  {
    name: "Soumya Singh",
    rollNo: "2022BDUE029",
    regNo: "JLU06824",
    attendance: "60%",
    kitKatPoints: null,
    questionPaper: "Question paper for Soumya Singh"
  },
  {
    name: "Sufal Joshi",
    rollNo: "2022BDUE030",
    regNo: "JLU07564",
    attendance: "0%",
    kitKatPoints: null,
    questionPaper: "Question paper for Sufal Joshi"
  },
  {
    name: "Suhani Tongya",
    rollNo: "2022BDUE031",
    regNo: "JLU07479",
    attendance: "85%",
    kitKatPoints: 2,
    questionPaper: "Question paper for Suhani Tongya"
  },
  {
    name: "Tanishka Sharma",
    rollNo: "2022BDUE032",
    regNo: "JLU06794",
    attendance: "40%",
    kitKatPoints: null,
    questionPaper: "Question paper for Tanishka Sharma"
  },
  {
    name: "Tanu Yadav",
    rollNo: "2022BDUE033",
    regNo: "JLU06950",
    attendance: "60%",
    kitKatPoints: null,
    questionPaper: "Question paper for Tanu Yadav"
  },
  {
    name: "Yash Sanjay Nandve",
    rollNo: "2022BDUE034",
    regNo: "JLU07391",
    attendance: "75%",
    kitKatPoints: null,
    questionPaper: "Question paper for Yash Sanjay Nandve"
  },
  {
    name: "Yashika Manglani",
    rollNo: "2022BDUE035",
    regNo: "JLU06951",
    attendance: "95%",
    kitKatPoints: null,
    questionPaper: "Question paper for Yashika Manglani"
  }
]

export function EndSemesterQuestionPaperComponent() {
  const [searchTerm, setSearchTerm] = useState('')

  const sortedStudents = useMemo(() => {
    return [...students].sort((a, b) => a.name.localeCompare(b.name))
  }, [])

  const filteredStudents = useMemo(() => {
    return sortedStudents.filter(student =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.rollNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.regNo.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [sortedStudents, searchTerm])

  const getAttendanceColor = (attendance: string) => {
    const attendanceValue = parseInt(attendance)
    if (attendanceValue === 0) return 'text-red-700 font-bold'
    if (attendanceValue < 50) return 'text-red-500'
    if (attendanceValue < 75) return 'text-yellow-500'
    return 'text-green-500'
  }

  const getAttendanceTooltip = (attendance: string) => {
    const attendanceValue = parseInt(attendance)
    if (attendanceValue === 0) return 'Extremely poor attendance. Immediate action required!'
    if (attendanceValue < 50) return 'Low attendance. Immediate improvement required.'
    if (attendanceValue < 75) return 'Average attendance. Try to improve.'
    return 'Good attendance. Keep it up!'
  }

  const renderKitKatPoints = (points: number | null) => {
    if (points === null) return null
    return (
      <div className="flex items-center">
        {Array(points).fill(0).map((_, index) => (
          <Candy key={index} className="w-4 h-4 text-pink-500 mr-1" />
        ))}
      </div>
    )
  }

  return (
    <div className="container mx-auto py-4 sm:py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Interface Design Advance End Semester Examination</h1>

      <div className="mb-4 relative">
        <Input
          type="text"
          placeholder="Search by name, roll number, or JLU ID"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 w-full sm:max-w-sm"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
      </div>

      <div className="overflow-x-auto border rounded-md">
        <Table>
          <TableHeader className="sticky top-0 bg-background z-10">
            <TableRow>
              <TableHead className="w-[250px] bg-background">Name of Student</TableHead>
              <TableHead className="bg-background hidden sm:table-cell">Roll No</TableHead>
              <TableHead className="bg-background hidden md:table-cell">JLU ID</TableHead>
              <TableHead className="bg-background">Attendance</TableHead>
              <TableHead className="bg-background">Kit-Kat</TableHead>
              <TableHead className="bg-background">Question Paper</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredStudents.map((student) => (
              <TableRow key={student.regNo} 
                className={`
                  ${parseInt(student.attendance) === 0 ? 'bg-red-100' : ''}
                  ${parseInt(student.attendance) > 0 && parseInt(student.attendance) < 50 ? 'bg-red-50' : ''} 
                  ${student.kitKatPoints ? 'bg-green-50' : ''}
                `}
              >
                <TableCell className="font-medium">
                  <div className="flex items-center">
                    <span className="mr-2">{student.name}</span>
                    {parseInt(student.attendance) === 0 && (
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <Frown className="text-red-700" size={16} />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Zero attendance! Urgent action required!</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    )}
                    {parseInt(student.attendance) > 0 && parseInt(student.attendance) < 50 && (
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <AlertTriangle className="text-red-500" size={16} />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Low attendance. Immediate improvement required.</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    )}
                    {student.kitKatPoints && (
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <Trophy className="text-yellow-500" size={16} />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Awarded Kit-Kat points for excellent performance!</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    )}
                  </div>
                </TableCell>
                <TableCell className="hidden sm:table-cell">{student.rollNo}</TableCell>
                <TableCell className="hidden md:table-cell">{student.regNo}</TableCell>
                <TableCell className={`font-semibold ${getAttendanceColor(student.attendance)}`}>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        {student.attendance}
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{getAttendanceTooltip(student.attendance)}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </TableCell>
                <TableCell>
                  {renderKitKatPoints(student.kitKatPoints)}
                </TableCell>
                <TableCell>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" className="w-full">
                        <FileText className="sm:mr-2" size={16} />
                        <span className="hidden sm:inline-block">View Paper</span>
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="w-full sm:max-w-[80vw] sm:max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle>{student.name}'s Question Paper</DialogTitle>
                      </DialogHeader>
                      {parseInt(student.attendance) < 50 ? (
                        <QuestionPaperLow />
                      ) : (
                        <QuestionPaper />
                      )}
                    </DialogContent>
                  </Dialog>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}