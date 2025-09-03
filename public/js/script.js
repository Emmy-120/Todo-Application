document.querySelectorAll('.delete-btn').forEach(button=>{
    button.addEventListener('click', (e)=>{
        if(!confirm('Are you sure you want to delete this task?')){
            e.preventDefault();
        }
    });
});