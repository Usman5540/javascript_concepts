const insert = document.querySelector('.insert');

window.addEventListener('keydown', keyData);

function keyData(e) {
  insert.innerHTML = `
    <div class="color">
      <table border="1">
        <tr>
          <th>Key</th>
          <th>Key Code</th>
          <th>Code</th>
        </tr>
        <tr>
          <td>${e.key === '' ? 'space' : e.key }</td>
          <td>${e.keyCode}</td>
          <td>${e.code}</td>
        </tr>
      </table>
    </div>
  `;
}
