const NoteList = ({note}) => {
    if (notes.lenght === 0){
        return(
            <p className= "text-center text-gray-500">
            </p>
        )

        }

        return(
            <div className= "space-y-4"
            {notes.map ( (note)=>
                <div key= {note.id}"p-4 bg-white rounded-lg shadow-md border-1-4"
                <h3 className= "text"
            )}
            
        )
    
}