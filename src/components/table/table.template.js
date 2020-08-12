/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
const CODES = {
  a: 65,
  z: 90
};

function toCell(_, col) {
  return `
    <div class="cell" contenteditable data-col="${col}">
      B2
    </div>
  `
}

function toColumn(el, idx) {
  return `
    <div class="column" data-type="resizable" data-col="${idx}">
      ${el}
      <div class="col-resize" data-resize="col"></div>
    </div>
  `;
} 
 
function createRow(idx, content) {
  const resizer = idx ? '<div class="row-resize" data-resize="row"></div>' : '';
  return `
    <div class="row" data-type="resizable">
      <div class="row-info">
        ${idx ? idx : ''}
        ${resizer}
      </div>
      <div class="row-data">
        ${content}
      </div>
    </div>
  `
}

function toChar(_, idx) {
  return String.fromCharCode(CODES.a + idx);
}

export function createTable(rowsCount = 15, ) {
  const colsCount = CODES.z - CODES.a + 1;
  const rows = [];

  const cols = new Array(colsCount)
      .fill('')
      .map(toChar)
      .map(toColumn)
      .join('');

  rows.push(createRow(null, cols));

  for (let i = 0; i < rowsCount; i++) {
    const cells = new Array(colsCount)
        .fill('')
        .map(toCell)
        .join('')
    rows.push(createRow(i + 1, cells));
  }

  return rows.join('');
}
