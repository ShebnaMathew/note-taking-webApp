import SelectProject from "./SelectProject"
import SelectType from "./SelectType"
import TextInput from "./TextInput"
import {useState} from "react";
import AddCancel from "./AddCancel";
import { NO_PROJECT } from "../data/data";
import SelectColor from "./SelectColor";



const AddNote = props => {

        const [selectedProject, setProject] = useState(NO_PROJECT);
        const [newProject, setNewProject] = useState("");
        const [selectedType, setType] = useState("");
        const [text, setText] = useState("");
        const [title, setTitle] = useState("");
        const [url, setUrl] = useState("");
        const [selectedColor, setColor] = useState("bg-warning");
        const [isEnabled, setEnable] = useState(false);

    return (
        <>
            <div className="container">
                <SelectProject projects={props.projects} callback={setProject}/>
                <TextInput field="Create new Project" setValue={setNewProject}/>
                <SelectType selectedType={props.selectedType} callback={setType} resetText={setText} resetTitle={setTitle} resetUrl={setUrl} enable={setEnable}/>
                <TextInput field="Title" setValue={setTitle} type={selectedType} enable={setEnable}/>
                <TextInput field="Text" setValue={setText} type={selectedType} enable={setEnable}/>
                <TextInput field="url" setValue={setUrl} type={selectedType} enable={setEnable}/>
                <SelectColor callback={setColor}/>
                <AddCancel enable={isEnabled} data={props.data} callback={props.callback} project={(newProject.length > 0) ? newProject: selectedProject} type={selectedType} title={title} url={url} text={text} color={selectedColor}/>
            </div>
        </>
    )
}

export default AddNote;