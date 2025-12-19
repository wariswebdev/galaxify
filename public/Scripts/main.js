var comTab = document.getElementById('comTab');
var scienceTab = document.getElementById('scienceTab');
var pstTab = document.getElementById('pstTab');
var islamTab = document.getElementById('islamTab');
var projectsArray = document.querySelectorAll('.projectDiv');
var searchInput = document.getElementById('searchInput');

// current subject filter (null means no subject filter — show all subjects)
var currentFilter = null;

function applyFilters() {
    var term = '';
    if (searchInput) {
        term = searchInput.value.trim().toLowerCase();
    }

    projectsArray.forEach((project) => {
        var nameEl = project.querySelector('h3');
        var name = nameEl ? nameEl.textContent.toLowerCase() : '';

        var matchesSubject = !currentFilter || project.classList.contains(currentFilter);
        var matchesSearch = !term || name.indexOf(term) !== -1;

        project.style.display = (matchesSubject && matchesSearch) ? 'block' : 'none';
    });
}

function clearTabStyles() {
    [comTab, scienceTab, pstTab, islamTab].forEach((tab) => {
        tab.style.backgroundColor = "";
        tab.style.border = "";
    });
}

function showProjects(subjectClass, tabElement) {
    currentFilter = subjectClass;
    applyFilters();
    clearTabStyles();
    tabElement.style.backgroundColor = "black";
}

// Tab click handlers
comTab.addEventListener('click', () => {
    showProjects('comProject', comTab);
});

scienceTab.addEventListener('click', () => {
    showProjects('scienceProject', scienceTab);
});

pstTab.addEventListener('click', () => {
    showProjects('pstProject', pstTab);
});

islamTab.addEventListener('click', () => {
    showProjects('islamiatProject', islamTab);
});

// Live search while typing
if (searchInput) {
    searchInput.addEventListener('input', () => {
        applyFilters();
    });
}

// Initialize: show all projects
applyFilters();
