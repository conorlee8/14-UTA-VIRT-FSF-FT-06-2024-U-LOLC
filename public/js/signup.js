const signupForm = document.querySelector('#signup-form');

if (signupForm) {
  signupForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (username && password) {
      const response = await fetch('/api/users/signup', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Signed up successfully!',
          showConfirmButton: false,
          timer: 1500
        });
        setTimeout(() => {
          window.location.href = '/';
        }, 1600);
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Signup failed',
          text: 'Please try again.',
        });
      }
    }
  });
} else {
  console.log('Signup form not found.');
}
