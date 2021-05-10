Take Notes

Application specifications:

The layout and style of the UI is up to you but your application must support the following:
- When the UI is loaded, all saved notes (i.e. the mock data) should be visible. You may
choose to show the full contents of each note or just a preview.
- It should be easy for a user to tell which project a note belongs to.
- Users can select a project to view only the notes belonging to that project.
- Users can add a new note to any project (a named project or “no project”). The user will need to specify which type of note they are creating, Text or Link. Your UI will need to prompt them to complete the appropriate fields for the note type. New notes added during a user’s session should be visible in the UI for the duration of the session but you are not expected to permanently save new content (i.e. you don’t have to write to the mock data file itself).
- Users can create a new project. Once a project has been created, the user should be able to add notes to that project. New projects added during a user’s session should be visible in the UI for the duration of the session but you are not expected to permanently save new content.
- A new Link must have a URL in order to be saved. You do not need to verify that the text supplied by the user is a valid URL.
- For a new Text note, either the title or the content text can be empty but not both. You can decide how to handle empty fields.
- Provide appropriate feedback and constraints to guide the user e.g. if a Link note is missing a URL, notify the user and don’t save the note.
You do ​not​ need to support deletion or editing of notes/projects, or moving notes from one project to another.
