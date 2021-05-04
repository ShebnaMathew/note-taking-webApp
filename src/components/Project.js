import Note from "./Note"

const Project = props => {

    const notes = props.notes;

    return (
        <>
            <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4">
                {
                    Object.keys(notes).map((note,i) =>
                    <Note key={i} project={props.project} type={notes[note].type} text={notes[note].text} title={notes[note].title} url={notes[note].url} />
                )}
            </div>
        </>
    )
}
    
    


export default Project;