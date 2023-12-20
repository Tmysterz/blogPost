const nameField = document.querySelector('#blog-name')
const teamField = document.querySelector('#blog-team')
const descriptionField = document.querySelector('#blog-desc')


async function updateButtonFunc (event){
    event.preventDefault();
    const blogDetails = {
        name: nameField.value,
        team: teamField.value,
        description: descriptionField.value,
    }

    console.log(blogDetails)

    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');
        console.log(id)

        const response = await fetch (`/api/blogs/${id}`, {
            method: "PUT",
            body: JSON.stringify(blogDetails),
            headers: {
              'Content-Type': 'application/json',
            },
        })

        if (response.ok) {
            document.location.replace(`/blogs/${id}`);
          } else {
            alert('Failed to update blog');
        }
    }

}









document
  .querySelector('#updateBTN')
  .addEventListener('click', updateButtonFunc);
