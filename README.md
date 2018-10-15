# progress

Some notes on my work

- Task1 and Task2 are pretty much identical, the only difference is the flexbox used in Task2
- For the layout of the menu I chose not to break the words, but to show them on one line as I think that's better
- If there are more items in the main menu, it'll break on more than one row instead of trying to fit all of the items in one row at the cost of breaking them
- I haven't really concentrated on transitions and styles, just the layout
- All of the submenus open on the right. If there is a submenu in submenu in the last item in the row, it'll still open on the right and a horizontal scroll will show up. I know that normally, if there isn't enough horizontal space, the menu should open on the left, but I couldn't think of a way to achieve this with css only (as it's written in the task requirement) and not with Javascript
- I've tested how it works on IE9 via the built-in emulator in IE as I couldn't install IE9 on Windows 10. I hope that's okay
- For some reason the jquery-3.3.1.min was not working on IE, which is why I used the unminified version
