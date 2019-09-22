let money, gold, parts;

const parseSave = s => {
  parts = atob(s).split(',');
  money = parts[1];
  gold = parts[2];
}

const genSave = () => {
  return btoa(parts.join(',') + ',');
}

$(document).ready(() => {
  $('#input').click(() => $('#save').change());
  $('#save').change(() => {
    parseSave($('#save').val());
    $('#gold').val(gold);
    $('#money').val(money);
  });
  $('#gen').click(() => {
    $('#genText').show();
    if (!parts) return;
    parts[1] = $('#money').val();
    parts[2] = $('#gold').val();
    $('#genSave').html(genSave());
  });
});
