import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ExperienceTimeline() {
  const experiences = [
    {
      title: "Backend Developer / Technical Lead",
      company: "Incodi Software Development",
      period: "November 2024 - Present",
      description:
        "As the sole backend developer and technical lead, I am responsible for the full backend architecture and development of a self-service portal for trading clients. My work primarily focuses on Node.js and Golang, while also utilizing Laravel where appropriate.",
      achievements: [
        "Integrated the platform with MetaTrader 5 (MT5), enabling real-time trading operations through robust API connections",
        "Used Sequelize with MySQL for data modeling, and leveraged RabbitMQ and Redis for messaging and caching",
        "Managed the entire deployment pipeline using Docker, Docker Hub, and Kubernetes, ensuring smooth CI/CD workflows and scalable infrastructure",
      ],
      skills: [
        "Node.js",
        "Golang",
        "Laravel",
        "MySQL",
        "Sequelize",
        "RabbitMQ",
        "Redis",
        "Docker",
        "Kubernetes",
        "MT5 Integration",
      ],
    },
    {
      title: "Backend Developer/Lead",
      company: "Yukatech",
      period: "January 2022 - October 2024",
      description:
        "Started as a Backend Developer and was promoted to Backend Lead in my second year, where I led the backend efforts for major projects like RouteControl and YukaTrack.",
      achievements: [
        "Parsed binary data from Teltonika GPS devices, processing geolocation and speed data, and generating polylines to visualize routes",
        "Designed and implemented backend systems using MongoDB, Redis, and RabbitMQ, with some MySQL/Eloquent usage in Laravel-based components",
        "Created scalable services using gRPC in Golang, and managed real-time communication with React clients via Socket.IO",
        "Deployed and maintained a custom Nominatim server for geolocation queries",
      ],
      skills: [
        "Node.js",
        "Golang",
        "Laravel",
        "MongoDB",
        "Mongoose",
        "Redis",
        "RabbitMQ",
        "MySQL",
        "gRPC",
        "Socket.IO",
        "GPS Data Processing",
      ],
    },
    {
      title: "Backend Developer",
      company: "GoAction",
      period: "May 2022 - February 2023 (Part Time)",
      description:
        "Contributed part-time to a serverless project built on AWS Lambda, API Gateway, and DynamoDB, using the Node.js AWS SDK.",
      achievements: [
        "Helped design lightweight, event-driven APIs",
        "Implemented serverless architecture using AWS services",
      ],
      skills: ["Node.js", "AWS Lambda", "API Gateway", "DynamoDB", "Serverless Architecture"],
    },
    {
      title: "Freelance Full Stack Developer",
      company: "Self-employed",
      period: "September 2019 - December 2021",
      description:
        "Worked as a freelance Full Stack Developer, building both commercial and personal web applications using Node.js, React, and Laravel.",
      achievements: [
        "Built business websites and custom crypto arbitrage bots that interfaced with various exchange APIs",
        "Handled real-time data and executed trading logic",
        "Gained hands-on experience with Python, particularly using Pandas and NumPy for data analysis and automation tasks",
      ],
      skills: ["Node.js", "React", "Laravel", "Python", "Pandas", "NumPy", "API Integration", "Crypto Trading"],
    },
  ]

  return (
    <div className="space-y-8">
      {experiences.map((exp, index) => (
        <Card key={index} className="border-l-4 border-l-primary">
          <CardHeader>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
              <CardTitle className="text-xl">{exp.title}</CardTitle>
              <Badge variant="outline" className="w-fit">
                {exp.period}
              </Badge>
            </div>
            <p className="text-lg font-medium text-muted-foreground">{exp.company}</p>
          </CardHeader>
          <CardContent>
            <p className="mb-4">{exp.description}</p>
            <div className="mb-4">
              <h4 className="font-semibold mb-2">Key Achievements:</h4>
              <ul className="list-disc pl-5 space-y-1">
                {exp.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </div>
            <div className="flex flex-wrap gap-2">
              {exp.skills.map((skill, i) => (
                <Badge key={i} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

