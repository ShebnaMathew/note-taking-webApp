import data, { NOTE_TYPE, NO_PROJECT } from "../data/data"
import Project from "../components/Project"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/styles.css';
import AddNote from "../components/AddNote"
import {useState} from "react";

const allProjects = [];
(function() {
        Object.keys(data).map ((project, idx) => {
            allProjects.push(project)
        })
})();


const App = () => {
    
    const [toRender, setToRender] = useState(allProjects);
    const [currentData, setData] = useState(data);

    const addNote = (note) => {
        let newNote = {}
        if (note.type === NOTE_TYPE.TEXT) {
            newNote = {
                type: note.type,
                title: note.title,
                text: note.text,
                color: note.color
            }
        } else {
            newNote = {
                type: note.type,
                url: note.url,
                text: note.text,
                color: note.color
            }
        }

        if (allProjects.indexOf(note.project) === -1) {
            allProjects.push(note.project)
            setData({...currentData, [note.project]: [newNote]});

        } else {
            let temp = [...currentData[note.project], newNote]
            setData({...currentData, [note.project]: temp});
        }
        
    }

    return ( <div>
                <nav className="navbar navbar-light bg-light">
                    <div className="container-fluid">
                        <span className="navbar-brand mb-0 h1 mx-auto">All we do is take notes.</span>
                    </div>
                </nav>

                <div id="projects" className="text-center bg-light">
                    <div className="btn-group" role="group" aria-label="Buttons for projects">
                        
                        {Object.keys(currentData).map((project,idx) =>
                            ((project !== NO_PROJECT) ? 
                            <button type="button" className="btn btn-light" onClick={() => setToRender([project])}>
                                {project}
                            </button>: "")
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
                    <AddNote callback={addNote} projects={allProjects}/>
                </div>
                <div className="container">
                    {Object.keys(currentData).map((project,idx) => 
                        ((toRender.includes(project)) ?
                            <Project key={idx} project={project} notes={currentData[project]}/> : "")
                    )}
                </div>
            </div>
    )
}
    

export default App;