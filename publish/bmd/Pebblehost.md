## Purchase discord bot plan
Visit https://billing.pebblehost.com and o echase The **Discord bot hosting** plan
## Connect to panel
You can find the information in the billing emails inbox. Please visit https://panel.pebblehost.com and enter the provided username and password.
## Uploading files
Uploading your files can be done via the uppoad file option on the panel or via FTP (file transfer protocol), it is best practice and much easier to use FTP. A guide for uploading files with FTP can be found [here](#ftp) 
## Edit bot start file config
Head over to the pebblehost loader tab and change your “bot start file” from ʼindex.jsʼ to ʼbot.jsʼ. If it is already set as ʼbot.jsʼ then leave it.
## Install all required node modules 
Installing node modules through the console is not possible with Pebblehost, due to this we will navigate to the node modules section 
[Image of node modules section]
Type in the search bar each required node modules that your project requires, if you are unsure what too type here don't worry! A full list of all modules needed can be found in the `package.json` file (however if you don't know what to look for here ignore it as the console will print `module 'nameofmodule' is missing` for any required missing modules.
## Turning bot online
Turning your bot online is as simple pressing this button 
[Image]
## Fixing startup
BMD currently has an issue with startup initialisation in the package.json file, to fix this add it. 

ʼʼʼjson
"name": "bmd-bot",
  "description": "An awesome bot made with Bot Maker for Discord!",
  "author": "somebody",
  "main": "bot.js",   <——this line is what needs to be added
  ʼʼʼ
## Connecting to SQL db
You can connect to your SQL database for fre[#sql]
## Common errors 
A list of common errors can be found here [#errors]
## Extra resources
