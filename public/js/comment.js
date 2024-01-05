const newCommentHandler = async (event) => {
    event.preventDefault();

    const comment = document.querySelector("#blog-comment").value.trim();

    if (comment) {
        const response = await fetch('/api/blogs/comments', {
            method: 'POST', 
            body: JSON.stringify({ comment }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/api/blogs/:id')
        } else {
            alert('Failed to create comment');
        }
    }
}

document
  .querySelector('.new-comment-form')
  .addEventListener('submit', newCommentHandler);