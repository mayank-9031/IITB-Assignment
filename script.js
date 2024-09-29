const chemicalData = [
    { id: 1, chemicalName: "Ammonium Persulfate", vendor: "LG Chem", density: 3525.92, viscosity: 60.63, packaging: "Bag", packSize: 100, unit: "kg", quantity: 6495.18 },
    { id: 2, chemicalName: "Caustic Potash", vendor: "Formosa", density: 3172.15, viscosity: 48.22, packaging: "Bag", packSize: 100, unit: "kg", quantity: 8751.90 },
    { id: 3, chemicalName: "Dimethylaminopropylamino", vendor: "LG Chem", density: 8435.37, viscosity: 12.62, packaging: "Barrel", packSize: 75, unit: "L", quantity: 5964.61 },
    { id: 4, chemicalName: "Mono Ammonium Phosphate", vendor: "Sinopec", density: 1597.65, viscosity: 76.51, packaging: "Bag", packSize: 105, unit: "kg", quantity: 8183.73 },
    { id: 5, chemicalName: "Ferric Nitrate", vendor: "DowDuPont", density: 364.04, viscosity: 14.9, packaging: "Bag", packSize: 105, unit: "kg", quantity: 4154.33 },
    { id: 6, chemicalName: "n-Pentane", vendor: "Sinopec", density: 4535.26, viscosity: 66.76, packaging: "N/A", packSize: "N/A", unit: "t", quantity: 6272.34 },
    { id: 7, chemicalName: "Glycol Ether PM", vendor: "LG Chem", density: 6495.18, viscosity: 72.12, packaging: "Bag", packSize: 250, unit: "kg", quantity: 8749.54 },
    { id: 8, chemicalName: "Hydrochloric Acid", vendor: "BASF", density: 1197.55, viscosity: 92.35, packaging: "Barrel", packSize: 50, unit: "L", quantity: 4521.37 },
    { id: 9, chemicalName: "Ethylene Glycol", vendor: "Mitsui Chemicals", density: 1115.27, viscosity: 46.53, packaging: "Drum", packSize: 250, unit: "kg", quantity: 10000.00 },
    { id: 10, chemicalName: "Sodium Hydroxide", vendor: "DowDuPont", density: 2135.72, viscosity: 89.34, packaging: "Bag", packSize: 50, unit: "kg", quantity: 8420.14 },
    { id: 11, chemicalName: "Sulfuric Acid", vendor: "Sinopec", density: 1825.11, viscosity: 35.65, packaging: "Tank", packSize: 500, unit: "L", quantity: 7500.52 },
    { id: 12, chemicalName: "Acetic Acid", vendor: "BASF", density: 1042.67, viscosity: 42.57, packaging: "Drum", packSize: 200, unit: "L", quantity: 6435.28 },
    { id: 13, chemicalName: "Potassium Permanganate", vendor: "LG Chem", density: 1555.15, viscosity: 65.22, packaging: "Bag", packSize: 50, unit: "kg", quantity: 9374.67 },
    { id: 14, chemicalName: "Methanol", vendor: "Formosa", density: 791.83, viscosity: 0.59, packaging: "Barrel", packSize: 200, unit: "L", quantity: 5231.74 },
    { id: 15, chemicalName: "Chlorine", vendor: "DowDuPont", density: 1560.19, viscosity: 82.42, packaging: "Cylinder", packSize: 1, unit: "t", quantity: 2750.98 }
];


// Populate table with initial data
function populateTable(data) {
    const tbody = document.querySelector('#chemicalTable tbody');
    tbody.innerHTML = ''; // Clear existing rows
    data.forEach(item => {
        const row = `
            <tr>
                <td>${item.id}</td>
                <td contenteditable="true">${item.chemicalName}</td>
                <td contenteditable="true">${item.vendor}</td>
                <td contenteditable="true">${item.density}</td>
                <td contenteditable="true">${item.viscosity}</td>
                <td contenteditable="true">${item.packaging}</td>
                <td contenteditable="true">${item.packSize}</td>
                <td contenteditable="true">${item.unit}</td>
                <td contenteditable="true">${item.quantity}</td>
            </tr>`;
        tbody.innerHTML += row;
    });
}

populateTable(chemicalData);

// Sorting functionality (ascending and descending)
document.querySelectorAll('th').forEach((header, index) => {
    let ascending = true;
    header.addEventListener('click', () => {
        chemicalData.sort((a, b) => {
            const colKey = Object.keys(chemicalData[0])[index];
            if (ascending) {
                return a[colKey] > b[colKey] ? 1 : -1;
            } else {
                return a[colKey] < b[colKey] ? 1 : -1;
            }
        });
        ascending = !ascending;
        populateTable(chemicalData);
    });
});

// Toolbar button actions
document.getElementById('addRowBtn').addEventListener('click', () => {
    const newRow = {
        id: chemicalData.length + 1,
        chemicalName: "New Chemical",
        vendor: "New Vendor",
        density: 0.0,
        viscosity: 0.0,
        packaging: "New",
        packSize: 0,
        unit: "kg",
        quantity: 0.0
    };
    chemicalData.push(newRow);
    populateTable(chemicalData);
});

document.getElementById('moveUpBtn').addEventListener('click', () => {
    const selectedRow = document.querySelector('tr.selected');
    if (selectedRow && selectedRow.previousElementSibling) {
        selectedRow.parentNode.insertBefore(selectedRow, selectedRow.previousElementSibling);
    }
});

document.getElementById('moveDownBtn').addEventListener('click', () => {
    const selectedRow = document.querySelector('tr.selected');
    if (selectedRow && selectedRow.nextElementSibling) {
        selectedRow.parentNode.insertBefore(selectedRow.nextElementSibling, selectedRow);
    }
});

document.getElementById('deleteRowBtn').addEventListener('click', () => {
    const selectedRow = document.querySelector('tr.selected');
    if (selectedRow) {
        selectedRow.remove();
    }
});

document.getElementById('refreshBtn').addEventListener('click', () => {
    populateTable(chemicalData);
});

document.getElementById('saveBtn').addEventListener('click', () => {
    console.log('Data saved', chemicalData);
});

// Row selection (click to select)
document.querySelector('#chemicalTable').addEventListener('click', (event) => {
    const rows = document.querySelectorAll('tr');
    rows.forEach(row => row.classList.remove('selected'));
    if (event.target.tagName === 'TD') {
        event.target.parentElement.classList.add('selected');
    }
});


  