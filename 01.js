function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'flex';
    modal.style.opacity = 0;
    modal.style.visibility = 'visible';

    setTimeout(() => {
        modal.style.opacity = 1;
    }, 10); 
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.opacity = 0;

    setTimeout(() => {
        modal.style.display = 'none';
        modal.style.visibility = 'hidden';
    }, 300); 
}


function toggleProjects() {
    const additionalProjects = document.querySelectorAll('.Achievements-cards-row.additional');
    const showMoreButton = document.getElementById('show-more-btn');

   
    if (showMoreButton.innerText === 'Show More') {
     
        additionalProjects.forEach(projectRow => {
            projectRow.style.display = 'flex';
        });
       
        showMoreButton.innerText = 'Show Less';
    } else {
      
        additionalProjects.forEach(projectRow => {
            projectRow.style.display = 'none';
        });
       
        showMoreButton.innerText = 'Show More';
    }
}


