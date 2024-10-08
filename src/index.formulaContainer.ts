import HElement, { h } from './element';
function _createFormulaBar(
  formulaBarHeight: number,
  formulaBarWidth: number
): HElement {
  return h('input')
    .attr('type', 'text')
    .attr('placeholder', 'Enter formula')
    .attr('id', 'formula-bar')
    .css({
      width: formulaBarWidth,
      height: formulaBarHeight,
      padding: '5px 5px 5px 5px',
      zIndex: '10',
      boxSizing: 'border-box',
      position: 'relative',
      border: '1px solid #ccc',
    });
}

function _renderApplyPath() {
  return h('path')
    .attr(
      'd',
      'M23.1445 3.71973L23.8535 4.42285L16.002 12.2803L12.1465 8.4248L12.8555 7.71582L16.002 10.8623L23.1445 3.71973Z'
    )
    .attr('fill', 'black');
}
function _renderCancelPath() {
  return h('path')
    .attr(
      'd',
      'M18.708 8L23 12.292L22.292 13L18 8.70801L13.708 13L13 12.292L17.292 8L13 3.70801L13.708 3L18 7.29199L22.292 3L23 3.70801L18.708 8Z'
    )
    .attr('fill', 'black');
}
function _renderSvg() {
  return h('svg')
    .attr('width', '26')
    .attr('height', '16')
    .attr('viewBox', '0 0 26 16')
    .attr('fill', 'none')
    .attr('xmlns', 'http://www.w3.org/2000/svg');
}

function _renderSvgApplyElement() {
  return _renderSvgElement().append(_renderApplyPath());
}

function _renderSvgElement() {
  return _renderSvg();
}

function _renderFormulaIconPath() {
  return h('path')
    .attr(
      'd',
      'M8.961 7.496H7.867l-.776 3.628a3.26 3.26 0 0 1-.283.776c-.133.26-.298.498-.493.713a2.52 2.52 0 0 1-.664.522 1.65 1.65 0 0 1-.796.2c-.085 0-.171-.008-.259-.024s-.168-.044-.239-.083-.132-.091-.181-.156-.068-.153-.068-.254c0-.13.039-.241.117-.332a.41.41 0 0 1 .327-.142.45.45 0 0 1 .22.054.71.71 0 0 1 .176.137c.052.055.099.117.142.186l.122.195.034.059a.51.51 0 0 0 .283-.107c.085-.065.16-.146.225-.244s.129-.207.181-.327l.137-.366.098-.351.068-.288.815-3.794h-.859l.098-.396h.845l.059-.303a3.44 3.44 0 0 1 .264-.786c.127-.264.285-.501.474-.713s.405-.382.649-.513a1.68 1.68 0 0 1 .811-.2 1.42 1.42 0 0 1 .259.024.8.8 0 0 1 .239.083.48.48 0 0 1 .181.161c.046.065.068.148.068.249a.54.54 0 0 1-.112.347c-.072.091-.181.137-.327.137-.104 0-.19-.02-.259-.059s-.127-.094-.176-.156-.094-.13-.137-.205l-.122-.22c-.12.007-.228.052-.322.137s-.179.194-.254.327a2.53 2.53 0 0 0-.186.435l-.137.479-.093.444-.063.332h1.104l-.093.396zm3.242.313c-.081.065-.168.151-.259.259l-.268.342-.244.356-.19.317.093.396.098.396.107.376a1.66 1.66 0 0 0 .166.361.95.95 0 0 0 .254.269c.101.068.228.103.381.103l.137-.005.156-.02.156-.029c.052-.013.096-.028.132-.044l-.078.288-.278.117-.254.093c-.085.026-.174.047-.268.063a2.1 2.1 0 0 1-.298.02.94.94 0 0 1-.356-.059c-.091-.042-.168-.099-.229-.171s-.107-.164-.147-.269l-.117-.342-.122-.425-.108-.43-.371.566-.405.532-.195.225a1.32 1.32 0 0 1-.215.19.98.98 0 0 1-.244.132c-.088.033-.186.049-.293.049-.137 0-.251-.039-.342-.117s-.132-.189-.132-.332c0-.085.016-.158.049-.22s.076-.119.132-.161.119-.073.19-.093.146-.034.225-.034a.73.73 0 0 1 .278.054c.091.036.184.067.278.093a5.95 5.95 0 0 0 .518-.591c.163-.208.306-.426.43-.654l-.01-.049-.059-.249-.088-.337-.102-.376-.122-.352c-.039-.107-.081-.2-.127-.278s-.085-.135-.127-.161c-.111-.065-.236-.098-.376-.098a1.35 1.35 0 0 0-.273.029 1.13 1.13 0 0 0-.264.078l.078-.293.205-.083.283-.107.283-.093c.091-.026.159-.039.205-.039a.82.82 0 0 1 .357.068.67.67 0 0 1 .244.19c.065.081.119.176.161.283s.081.223.117.347l.098.391.088.391.01.039.005.029.2-.332.234-.381.269-.381c.098-.127.2-.239.308-.337a1.45 1.45 0 0 1 .342-.234.82.82 0 0 1 .381-.093c.127 0 .234.042.322.127a.42.42 0 0 1 .137.322c0 .081-.016.153-.049.215a.47.47 0 0 1-.132.156.56.56 0 0 1-.185.098.78.78 0 0 1-.215.029 1.18 1.18 0 0 1-.283-.039l-.278-.083z'
    )
    .attr('fill', 'blue');
}

function _createEmptyBar(): HElement {
  return h('div').css({
    height: 27,
  });
}

function _renderFormulaIconSvg() {
  return _renderSvgElement().append(_renderFormulaIconPath());
}
function _renderSvgCancelElement() {
  return _renderSvgElement().append(_renderCancelPath());
}

export default {
  _renderSvgApplyElement,
  _renderSvgCancelElement,
  _renderFormulaIconSvg,
  _createEmptyBar,
  _createFormulaBar,
};
