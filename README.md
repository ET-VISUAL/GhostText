### Добро пожаловать в мой проект для шифрования текста.
На данный момент вы пока можете шифровать шифром цезаря.

<pre>
█████ █████      █   █ ███  ████ █   █  ███  █     
█       █        █   █  █  █     █   █ █   █ █     
████    █   ████ █   █  █   ███  █   █ █████ █     
█       █         █ █   █      █ █   █ █   █ █     
█████   █          █   ███ ████   ███  █   █ █████   


$ ./cryptool --encrypt caesar --input "Hello, World!"
Output: Khoor, Zruog!

$ ./cryptool --decrypt --key 3 --input "Khoor, Zruog!"
Output: Hello, World!
</pre>