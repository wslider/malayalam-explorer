// export to other js files

export function updateFooter() {
    const footer = document.getElementById('footer');
    if (!footer) return; 

    const now = new Date();
    const footerYear = now.getFullYear();
    footer.textContent = `Malayalam Explorer - ${footerYear}`;
}

// Run when the DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        updateFooter();
        setInterval(updateFooter, 3600000); // 1 hour 
    });
} else {
    updateFooter();
    setInterval(updateFooter, 36000000);
}

//make est. Two Thousand Twenty Five ? 