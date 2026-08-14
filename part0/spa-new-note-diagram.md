sequenceDiagram
    participant browser
    participant server

    Note right of browser: User types a new note and clicks Save
    Note right of browser: JavaScript prevents default form submission

    Note right of browser: JavaScript creates a new note object
    Note right of browser: JavaScript updates the UI immediately

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    Note right of server: Server saves the new note
    server-->>browser: HTTP 201 created
    deactivate server

    Note right of browser: No page reload, UI already updated
