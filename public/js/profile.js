const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#blog-name').value.trim();
  const team = document.querySelector('#blog-team').value.trim();
  const description = document.querySelector('#blog-desc').value.trim();

  if (name && team && description) {
    const response = await fetch(`/api/blogs`, {
      method: 'POST',
      body: JSON.stringify({ name, team, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create blog');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/blogs/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete blog');
    }
  }
};

// sends user to the update handlebar screen instead of the comment one everybody else will see
const updateButtonHandler = async (event) => {
  if (event.target.hasAttribute('dataUP-id')) {
    const id = event.target.getAttribute('dataUP-id');

    if (id) {
      document.location.replace(`/my-blogs/${id}`)
    }
  }
};


document
  .querySelector('.new-blog-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.blog-list')
  .addEventListener('click', delButtonHandler);

document
  .querySelector('.updateList')
  .addEventListener('click', updateButtonHandler);
