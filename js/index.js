window.onload = function () {
    init();
};

function init() {
    hideAllSections();
    showSection(aboutSectionId);
    setActiveHeader(aboutHeader);
}

const staticHeaderClass = "staticTop";
const aboutSectionId = "home";
const skillsSectionId = "skills";
const projectsSectionId = "projects";
const contactSectionId = "contact";
const aboutHeader = "aboutTab";
const skillsHeader = "skillsTab";
const projectsHeader = "projectsTab";
const contactHeader = "contactTab";
const maxTabs = 4;

var currentTab = 1;

//#region Hide & Display

function hideSection(id) {
    var element = document.getElementById(id);
    element.style.display = "none";
}

function showSection(id) {
    var element = document.getElementById(id);
    element.style.display = "table";
}

function setActiveHeader(id) {
    var element = document.getElementById(id);
    element.classList.add("active");
}

function resetHeader(id) {
    var element = document.getElementById(id);
    element.classList.remove("active");
}

function resetAllHeaders() {
    const headers = [aboutHeader, skillsHeader, projectsHeader, contactHeader];

    headers.forEach(x => resetHeader(x));
}

function hideAllSections() {
    hideSection(aboutSectionId);
    hideSection(skillsSectionId);
    hideSection(projectsSectionId);
    hideSection(contactSectionId);
}

//#endregion Hide & Display

//#region Navigation

function nextTab() {
    currentTab += 1;

    if (currentTab > maxTabs)
        currentTab = 1;

    changeTab(currentTab);
}

function prevTab() {
    currentTab -= 1;

    if (currentTab < 1)
        currentTab = maxTabs;

    changeTab(currentTab);
}

function changeTab(tab) {
    var id = null;
    var header = null;
    switch (tab) {
        case 1:
            id = aboutSectionId;
            header = aboutHeader;
            break;
        case 2:
            id = skillsSectionId;
            header = skillsHeader;
            break;
        case 3:
            id = projectsSectionId;
            header = projectsHeader;
            break;
        case 4:
            header = contactHeader;
            id = contactSectionId;
            break;

        default:
            break;
    }

    hideAllSections();
    showSection(id);
    resetAllHeaders();
    setActiveHeader(header);
}

//#endregion Navigation