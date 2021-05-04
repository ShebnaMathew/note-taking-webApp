import data, { NO_PROJECT } from "../data/data"
import Project from "../components/Project"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/styles.css';
import AddNote from "../components/AddNote"
import Note from "../components/Note"
import {useState} from "react";

const allProjects = [];
(function() {
        Object.keys(data).map ((project, idx) => {
            allProjects.push(project)
        })
})();


const App = () => {
    
    const [toRender, setToRender] = useState(allProjects);
    const [newData, setData] = useState([]);
    var newProjects = []

    return ( <div>
                <nav className="navbar navbar-light bg-light">
                    <div className="container-fluid">
                        <span className="navbar-brand mb-0 h1 mx-auto">All we do is take notes.</span>
                    </div>
                </nav>

                <div id="projects" className="text-center bg-light">
                    <div className="btn-group" role="group" aria-label="Buttons for projects">
                        
                        
                        {Object.keys(newData).map((each,idx) => 
                            ((!allProjects.includes(newData[each].project) && newData[each].project !== null) ?
                            <button type="button" className="btn btn-light" onClick={() => setToRender([newData[each].project])}>
                                what
                            </button>:"")
                            
                        )}
                        
                        {Object.keys(data).map((project,idx) =>
                            ((project !== NO_PROJECT) ? 
                            <button type="button" className="btn btn-light" onClick={() => setToRender([project])}>
                                {project}
                            </button>: "")
                        )}
                        {Object.keys(newData).map((each,idx) => 
                            ((!allProjects.includes(newData[each].project) && newData[each].project !== null) ?
                            allProjects.push(newData[each].project):"")
                        )}
                        <button type="button" className="btn btn-light" onClick={() => setToRender(allProjects)}>
                            All Notes
                        </button>
                        <button type="button" className="btn btn-info" data-bs-toggle="collapse" data-bs-target="#collapseAdd">
                            + Add
                        </button>
                    </div>
                </div>
                <div className="collapse mx-auto" id="collapseAdd">
                    <AddNote callback={setData} projects={allProjects} data={newData}/>
                </div>
                <div className="container">
                    {Object.keys(data).map((project,idx) => 
                        ((toRender.includes(project)) ?
                            <Project key={idx} project={project} notes={data[project]}/> : "")
                    )}
                    <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4">
                    {Object.keys(newData).map((each,idx) => 
                        ((toRender.includes(newData[each].project)) ?
                            <Note project={newData[each].project} type={newData[each].type} text={newData[each].text} title={newData[each].title} url={newData[each].url} bg={newData[each].color}/>
                        :"")
                    )}
                </div>
            </div>
        </div>
    )
}
    

export default App;