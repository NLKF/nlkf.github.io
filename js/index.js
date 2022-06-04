window.onload = function () {
    init();
};

function init() {
    window.onscroll = function () { addStatic() };
    hideAllSections();
    showSection(aboutSectionId);
}

const staticClass = "static";
const aboutSectionId = "home";
const skillsSectionId = "skills";
const projectsSectionId = "projects";
const contactSectionId = "contact";
const maxTabs = 4;

var currentTab = 1;

function addStatic() {
    var header = document.getElementById("header");
    if (window.pageYOffset > header.offsetTop)
        header.classList.add(staticClass);
    else
        header.classList.remove(staticClass);
};

//#region Hide & Display

function hideSection(id) {
    var element = document.getElementById(id);
    element.style.display = "none";
}

function showSection(id) {
    var element = document.getElementById(id);
    element.style.display = "block";
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
    switch (tab) {
        case 1:
            hideAllSections();
            showSection(aboutSectionId);
            break;
        case 2:
            hideAllSections();
            showSection(skillsSectionId);
            break;
        case 3:
            hideAllSections();
            showSection(projectsSectionId);
            break;
        case 4:
            hideAllSections();
            showSection(contactSectionId);
            break;

        default:
            break;
    }
}

//#endregion Navigation