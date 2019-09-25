let money, gold, parts;

const parseSave = s => {
  parts = atob(s).split(',');
  level = parts[0];
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
    $('#level').val(level);
  });
  $('#gen').click(() => {
    if (!parts) return;
    $('#genText').show();
    parts[0] = $('#level').val();
    parts[1] = $('#money').val();
    parts[2] = $('#gold').val();
    $('#genSave').html(genSave());
  });
});
