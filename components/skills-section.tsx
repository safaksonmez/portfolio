import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function SkillsSection() {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["JavaScript", "TypeScript", "Golang", "PHP", "Python", "SQL"],
    },
    {
      category: "Backend Frameworks & Libraries",
      skills: ["Node.js", "Express.js", "NestJS", "Laravel", "Gin (Golang)", "Sequelize", "Mongoose"],
    },
    {
      category: "Databases",
      skills: ["MySQL", "MongoDB", "DynamoDB", "Redis"],
    },
    {
      category: "Message Brokers & Caching",
      skills: ["RabbitMQ", "Redis", "Kafka"],
    },
    {
      category: "Frontend Technologies",
      skills: ["React", "HTML", "CSS", "Tailwind CSS"],
    },
    {
      category: "DevOps & Infrastructure",
      skills: ["Docker", "Kubernetes", "AWS", "CI/CD", "Git", "Linux"],
    },
    {
      category: "API & Communication",
      skills: ["RESTful APIs", "gRPC", "Socket.IO", "WebSockets", "GraphQL"],
    },
    {
      category: "Specialized Knowledge",
      skills: [
        "Financial Trading Systems",
        "MT5 Integration",
        "GPS Data Processing",
        "Geolocation Services",
        "Crypto Exchange APIs",
      ],
    },
  ]

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {skillCategories.map((category, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle className="text-lg">{category.category}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, i) => (
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

