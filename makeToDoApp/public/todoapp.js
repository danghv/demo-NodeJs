$(document).ready(() => {

    //handle event click button add todo
    $('#add-todo-job').click(() => {
        
        let todoContent = $('#content-todo-job')
        if (todoContent.val()) { 
            let todoJob = {job: todoContent.val()}
            $.ajax({
                type: 'POST',
                url: '/todo',
                data: todoJob,
                success: function(data) {
                    location.reload()
                }
            })
            } else {
                alert('You need type the job!')
            }
        
    })
    //handle event click button add doing
    $('#add-doing-job').click(() => {
        
        let doingContent = $('#content-doing-job')
        if (doingContent.val()) {
            let doingJob = {job: doingContent.val()}
            $.ajax({
                type: 'POST',
                url: '/doing',
                data: doingJob,
                success: function(data) {
                    location.reload()
                }
            })
        } else {
            alert('You need type the job!')
        }
        
    })
    //handle event click button add done
    $('#add-done-job').click(() => {
        
        let doneContent = $('#content-done-job')
        if (doneContent.val()) {
            let doneJob = {job: doneContent.val()}
            $.ajax({
                type: 'POST',
                url: '/done',
                data: doneJob,
                success: function(data) {
                    location.reload()
                }
            })
        } else {
            alert('You need type the job!')
        }
    })
    //handle event click job todo
    $('#todo-list li').click((e) => {
        let item = $(e.currentTarget).text().replace(/ /g, '-')
        // let deleteTodoJob = {job: item}
        $.ajax({
            type: 'DELETE',
            url: '/todo/' + item,
            // data: deleteTodoJob,
            success: (data) => {
                location.reload()
            }
        })
    })

    //handle event click job doing
    $('#doing-list li').click((e) => {
        let item = $(e.currentTarget).text().replace(/ /g, '-')
        // let deleteTodoJob = {job: item}
        $.ajax({
            type: 'DELETE',
            url: '/doing/' + item,
            // data: deleteTodoJob,
            success: (data) => {
                location.reload()   
            }
        })
    })

    //handle event click job done
    $('#done-list li').click((e) => {
        let item = $(e.currentTarget).text().replace(/ /g, '-')
        // let deleteTodoJob = {job: item}
        $.ajax({
            type: 'DELETE',
            url: '/done/' + item,
            // data: deleteTodoJob,
            success: (data) => {
                location.reload()
            }
        })
    })
})