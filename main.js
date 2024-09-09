const dropdowns = document.querySelectorAll('.drop');

dropdowns.forEach((dropdown,index) => {
  dropdown.addEventListener('click', () => {
    const targetId = dropdown.dataset.target;
    const content = document.getElementById(targetId);

    if (content) {
      // Toggle display
      content.style.display = content.style.display === 'block' ? 'none' : 'block';
      if(content.style.display === 'block'){
        content.parentElement.classList.toggle('bg-gray-800')
        //content.classList.add('transition')
        //content.classList.add('duration-300')
        content.parentElement.classList.toggle('text-white');
      }else{
        content.parentElement.classList.remove('bg-gray-800');
        content.parentElement.classList.remove('text-white')
      }
    } else {
      console.error(`Element with ID ${targetId} not found.`);
    }
  });
});
