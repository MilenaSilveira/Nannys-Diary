
async function commentFormHandler(event) {
    event.preventDefault();

    const comment_text = document.querySelector('#post').value.trim();

    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    if (comment_text) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({
                post_comment,post_id
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            document.location.replace('/comments');

        } else {
            alert(response.statusText);
            document.querySelector('.new-comment-form').style.display = "block";
        }
    }
}

document.querySelector('.new-comment-form').addEventListener('submit', commentFormHandler);