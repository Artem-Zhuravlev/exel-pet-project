/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
const CODES = {
  a: 65,
  z: 90
};

function createCell() {
  return `
    <div class="cell" contenteditable>
      B2
    </div>
  `
}

function createCol(el) {
  return `<div class="column">${el}</div>`;
}

function createRow(idx, content) {
  return `
    <div class="row">
      <div class="row-info">
        ${idx ? idx : ''}
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
      .map(createCol)
      .join('');

  console.log(cols);

  rows.push(createRow(null, cols));

  for (let i = 0; i < rowsCount; i++) {
    const cells = new Array(colsCount)
        .fill('')
        .map(createCell)
        .join('')
    rows.push(createRow(i + 1, cells));
  }

  return rows.join('');
}
