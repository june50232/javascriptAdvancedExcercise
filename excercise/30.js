var abc = $('#abc'); // 很節省效能，因為  $('#abc') == $('#abc') // false! 兩個物件相比false

abc.attr('href','http://');
abc.attr('style', 'color:black');