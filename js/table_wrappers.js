document.addEventListener("DOMContentLoaded", function() {

    console.log("running table fixer")

    // Select all aside elements
    const asides = document.querySelectorAll('article');
    
    asides.forEach(aside => {
        
        console.log("found this article")
        // Select all tables within each article
        const tables = aside.querySelectorAll('table');
        
        tables.forEach(table => {
            console.log("found this table")
            // Create a wrapper div
            const wrapper = document.createElement('div');
            wrapper.classList.add('table-wrapper');
            
            // Insert the wrapper before the table
            table.parentNode.insertBefore(wrapper, table);
            
            // Move the table inside the wrapper
            wrapper.appendChild(table);
        });
    });
});
