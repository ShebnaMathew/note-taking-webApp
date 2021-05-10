import SelectProject from "./SelectProject"
import SelectType from "./SelectType"
import TextInput from "./TextInput"
import {useState} from "react";
import AddCancel from "./AddCancel";
import { NO_PROJECT, NOTE_TYPE } from "../data/data";
import SelectColor from "./SelectColor";
import NewOrExistingProj from "./NewOrExistingProj";


const AddNote = props => {

        const [selectedProject, setProject] = useState(NO_PROJECT);
        const [selectedTypeOfProject, setTypeOfProject] = useState("");
        const [newProject, setNewProject] = useState("");
        const [selectedType, setType] = useState("");
        const [text, setText] = useState("");
        const [title, setTitle] = useState("");
        const [url, setUrl] = useState("");
        const [selectedColor, setColor] = useState("bg-warning");
        const [isEnabled, setEnable] = useState(false);
        const [showError, setShowError] = useState(false)

        const clearFields = () => {
            setProject(NO_PROJECT)
            setNewProject("")
            setType("")
            setText("")
            setTitle("")
            setUrl("")
            console.log("cleared")
        }



    return (
        <>
            <div className="container">
                <NewOrExistingProj callback={setTypeOfProject}/>
                {(selectedTypeOfProject === "New") ? 
                <TextInput field="New project" placeholder="Enter a new project name" setValue={setNewProject}/>:
                (selectedTypeOfProject === "Existing") ? 
                <SelectProject projects={props.projects} callback={setProject}/>:
                ""
                }
                
                
                <SelectType selectedType={props.selectedType} callback={setType} resetText={setText} resetTitle={setTitle} resetUrl={setUrl} enable={setEnable}/>

                {
                    (selectedType === NOTE_TYPE.TEXT) ? 
                    <>
                    <div class="alert alert-info" role="alert">
                        Enter at least one of Title or Content for the note.
                    </div>
                    <TextInput field="Title" setValue={setTitle} showError={setShowError} placeholder="Title of the note" type={selectedType} enable={setEnable}/>
                    <TextInput field="Text" setValue={setText} showError={setShowError} placeholder="Content of the note" type={selectedType} enable={setEnable}/>
                    </>:
                    (selectedType === NOTE_TYPE.LINK) ? 
                    <>
                    <TextInput field="url" setValue={setUrl} showError={setShowError} placeholder="URL (required)" type={selectedType} enable={setEnable}/>
                    <TextInput field="Display text" showError={setShowError} placeholder="display text for the url (optional)" setValue={setText} type={selectedType} enable={setEnable}/>
                    </>:
                    ""

                }
                <SelectColor callback={setColor}/>
                <AddCancel enable={isEnabled} callback={props.callback} clearForm={clearFields} showError={showError} project={(newProject.length > 0) ? newProject: selectedProject} projectType={selectedTypeOfProject} type={selectedType} title={title} url={url} text={text} color={selectedColor}/>
            </div>
        </>
    )
}

export default AddNote;