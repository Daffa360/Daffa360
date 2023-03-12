const API_URL = 'https://jsonplaceholder.typicode.com/posts';

async function fetchData() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();

    // Create a table element
    const table = document.createElement('table');

    // Create table headers
    const headers = ['ID', 'Title', 'Body'];
    const headerRow = document.createElement('tr');
    for (const header of headers) {
      const th = document.createElement('th');
      th.textContent = header;
      headerRow.appendChild(th);
    }
    table.appendChild(headerRow);

    // Create table rows
    for (const post of data) {
      const row = document.createElement('tr');

      const idCell = document.createElement('td');
      idCell.textContent = post.id;
      row.appendChild(idCell);

      const titleCell = document.createElement('td');
      titleCell.textContent = post.title;
      row.appendChild(titleCell);

      const bodyCell = document.createElement('td');
      bodyCell.textContent = post.body;
      row.appendChild(bodyCell);

      table.appendChild(row);
    }

    // Append the table to the document
    document.body.appendChild(table);
  } catch (error) {
    console.error(error);
  }
}

fetchData();
