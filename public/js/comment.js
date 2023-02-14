console.log("connected")
const commentFormHandler = async (event) => {
    event.preventDefault();

    const post_comment = document.querySelector('#post-comment').value.trim();
console.log("working")
    // const post_id = window.location.toString().split('/')[
    //     window.location.toString().split('/').length - 1
    // ];

    if (post_comment) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({
                post_comment
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            document.location.replace('/comment');

        } else {
            alert(response.statusText);
            document.querySelector('.new-comment').style.display = "block";
        }
    }
}

document.querySelector('.submitComment').addEventListener('click', commentFormHandler);