const windowHeight = $(window).height();
const menuBarHeight = $('#menuBar').height();

const codeContainerHeight = windowHeight - menuBarHeight;

$('.codeContainer').height(codeContainerHeight + 'px');

$('.toggle').click(function () {
  $(this).toggleClass('selected');

  let activeDiv = $(this).html();

  $(`#${activeDiv}Container`).toggle();

  let showingDivs = $('.codeContainer').filter(function () {
    return $(this).css('display') != 'none';
  }).length;

  let width = 100 / showingDivs;

  $('.codeContainer').width(`${width}%`);
});

$('#runButton').click(function () {
  $('iframe')
    .contents()
    .find('html')
    .html('<style>' + $('#cssCode').val() + '</style>' + $('#htmlCode').val());
  document.getElementById('resultFrame').contentWindow.eval($('#jsCode').val());
});
