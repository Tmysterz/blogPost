const newCommentHandler = async (event) => {
    event.preventDefault();

    const comment = document.querySelector("#blog-comment").value.trim();

    console.log(comment)
    console.log(event.target)
    const id = event.target.getAttribute(`data-down-id`);

    if (comment) {
        const response = await fetch('/api/blogs/comment', {
            method: 'POST', 
            body: JSON.stringify({ comment }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace(`/blogs/${id}`)
        } else {
            alert('Failed to create comment');
        }
    }
}

document
  .querySelector('.new-comment-form')
  .addEventListener('submit', newCommentHandler);