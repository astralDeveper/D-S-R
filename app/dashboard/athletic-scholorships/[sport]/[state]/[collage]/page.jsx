'use client'
import { useParams } from 'next/navigation'
import React from 'react'

const page = () => {
    const params = useParams()
  return (
    <div>{params.collage}</div>
  )
}

export default page








// {
//     name: {
//       type: String,
//       trim: true,
//     },
//     slug: String,
//     city: String,
//     location: String,
//     logo: String,
//     division: {
//       type: String,
//       enum: ['NCAA D1', 'NCAA D2', 'NCAA D3', 'NAIA', 'JUCO'],
//     },
//     conference: String,
//     majors: [String],
//     type: {
//       type: String,
//       enum: ['public', 'private'],
//     },
//     homeField: String,
//     annualCostInState: Number,
//     annualCostOutState: Number,
//     avergeACTScore: Number,
//     avergeSATScore: Number,
//     avergeGPA: Number,
//     acceptanceRate: Number,
//     studentsLivingOnCampus: Number,
//     undergradEnrollment: Number,
//     campusSize: Number,
//     hbcu: Boolean,
//     website: String,
//     athleticWebsite: String,
//     questionnaire: String,
//     scholarships: [{
//       type: String,
//       enum: ['baseball', 'softball'],
//     }]
//   }