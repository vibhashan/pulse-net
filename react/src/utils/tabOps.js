// Function to determine the currently active tab
const active = (id) => {
    setTabs(tabs.map((tab) => ({ ...tab, active: id === tab.id })));
};

// Function to close a tab
const close = (id) => {
    setTabs(tabs.filter((tab) => tab.id !== id));
};

// Function to reorder a tab
const reorder = (tabId, fromIndex, toIndex) => {
    const beforeTab = tabs.find((tab) => tab.id === tabId);

    if (!beforeTab) {
        return;
    }

    let newTabs = tabs.filter((tab) => tab.id !== tabId);

    newTabs.splice(toIndex, 0, beforeTab);
    setTabs(newTabs);
};

export {
    active,
    close,
    reorder
}