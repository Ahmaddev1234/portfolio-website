
"use client"
import { Button } from "@/components/ui/button"
import { PROJECTS,PrrojectCategories } from "@/constants/constants"
import { useState } from "react"
import ProjectCard from "./ProjectCard";
function Filters() {
    const [filteredProjects,setFilteredProjects]=useState([]);
    const handleCategories=(category)=>{
        if(category == "All Projects"){
        setFilteredProjects(PROJECTS);

        } else{      
        const Projects = PROJECTS.filter((project) =>
            project.categories.includes(category)
          )
          
        setFilteredProjects(Projects);
        }
    }
  return (

    <div className="flex flex-col w-full gap-16 justify-center">
    <div className="w-full flex flex-wrap gap-4 justify-center" >
        {PrrojectCategories.map((category)=>(
            <Button onClick={()=>{handleCategories(category)}} variant="primary">
                {category}
            </Button>
        ))}
        
      
    </div>

        <div className="grid w-full lg:grid-cols-4 md:grid-cols-2 xs:grid-cols-1 gap-8 text-3xl font-bold">
            {filteredProjects.map((project)=>(
                <ProjectCard Project={project}/>
            ))}
        </div>

    </div>
  )
}

export default Filters
