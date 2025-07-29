// main.js

fetch('assets/components/header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('header-placeholder').innerHTML = data;
  })
  .catch(error => {
    console.error('Error loading header:', error);
  });


  // Load footer
fetch('assets/components/footer.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('footer-placeholder').innerHTML = data;
  })
  .catch(err => console.error('Error loading footer:', error));
