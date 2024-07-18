const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 2
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "." // "." // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  ""  // PUT your SESSION_ID SUHAIL_01_33_07_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAzMixcbiAgICAgICAgMTA0LFxuICAgICAgICAzNyxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjI2LFxuICAgICAgICA3MyxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMDksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTc5LFxuICAgICAgICA1MixcbiAgICAgICAgMjAzLFxuICAgICAgICA2MSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMSxcbiAgICAgICAgMzcsXG4gICAgICAgIDIwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDY1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDUyLFxuICAgICAgICAxODMsXG4gICAgICAgIDE3MixcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEwLFxuICAgICAgICAyMSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA4NCxcbiAgICAgICAgMzEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjksXG4gICAgICAgIDE3MyxcbiAgICAgICAgNixcbiAgICAgICAgMjM4LFxuICAgICAgICAxNixcbiAgICAgICAgMzIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMzIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTY4LFxuICAgICAgICA4MSxcbiAgICAgICAgNjQsXG4gICAgICAgIDIzNixcbiAgICAgICAgNzcsXG4gICAgICAgIDMsXG4gICAgICAgIDg0LFxuICAgICAgICA3MixcbiAgICAgICAgMzIsXG4gICAgICAgIDMxLFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjMwLFxuICAgICAgICA0MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNDUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTkwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDg5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjAsXG4gICAgICAgIDQyLFxuICAgICAgICAxMSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTY1LFxuICAgICAgICAzOCxcbiAgICAgICAgNTgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMzQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTksXG4gICAgICAgIDExOSxcbiAgICAgICAgMzUsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMTgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTE4LFxuICAgICAgICA3MSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDU2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDUxLFxuICAgICAgICAzOSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDc5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDk1LFxuICAgICAgICAxNTksXG4gICAgICAgIDEzMixcbiAgICAgICAgMTEyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDgxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDc2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDEwNixcbiAgICAgICAgOTIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIyNixcbiAgICAgICAgODMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDY4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDUxLFxuICAgICAgICAzMyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDY5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTc4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNDksXG4gICAgICAgIDM3LFxuICAgICAgICAyMjksXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTExXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY1LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDczXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDQyLFxuICAgICAgICAyMixcbiAgICAgICAgMTU3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDI5LFxuICAgICAgICAxOSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxOCxcbiAgICAgICAgNTEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDEyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDM4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDM1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIwLFxuICAgICAgICA0OCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNSxcbiAgICAgICAgNjcsXG4gICAgICAgIDM4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjAzLFxuICAgICAgICA3NixcbiAgICAgICAgMTY3LFxuICAgICAgICA0MSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMzYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTM1LFxuICAgICAgICA4LFxuICAgICAgICA2NCxcbiAgICAgICAgMjUsXG4gICAgICAgIDc3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIzNixcbiAgICAgICAgOTksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTQzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMTEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiY0dFRG1pWHYwZUZicDFEZzhOOEdETUl4VGVaZERjMUpyMFZ1N0ppVmoyQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiaW9nd1BibUtUZXUxUHpGRElObjhKZ1wiLFxuICBcInBob25lSWRcIjogXCI5NDM0Njc5YS05YmE4LTQ0ZTItYTllZS00MWQ0ZjMyZmU0ZWJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzUsXG4gICAgICAxNDIsXG4gICAgICA2NyxcbiAgICAgIDE4MixcbiAgICAgIDE5MSxcbiAgICAgIDQsXG4gICAgICA4NCxcbiAgICAgIDEyMyxcbiAgICAgIDk2LFxuICAgICAgMTc1LFxuICAgICAgMTQwLFxuICAgICAgMTU3LFxuICAgICAgNDgsXG4gICAgICA4OCxcbiAgICAgIDIyMyxcbiAgICAgIDEzMixcbiAgICAgIDI1MCxcbiAgICAgIDcsXG4gICAgICAxNjMsXG4gICAgICA1M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5OSxcbiAgICAgIDE1OSxcbiAgICAgIDIxMyxcbiAgICAgIDEwNCxcbiAgICAgIDI0NCxcbiAgICAgIDE3MSxcbiAgICAgIDIsXG4gICAgICA3OCxcbiAgICAgIDEwLFxuICAgICAgMTMxLFxuICAgICAgMjE1LFxuICAgICAgMjEzLFxuICAgICAgMzQsXG4gICAgICAxNjMsXG4gICAgICAzNCxcbiAgICAgIDMzLFxuICAgICAgMTA3LFxuICAgICAgMTE2LFxuICAgICAgMTEsXG4gICAgICAxODVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiR1hSMkREOUZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NTY4MzIwMDk4NToxNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIl/SpMSS4oKmxqbKuCDSpOKIhuKCoeG1j8OLxqYkX1wiLFxuICAgIFwibGlkXCI6IFwiNTc3Njc3Mjk1OTg2NTY6MTRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTytuOTQwRUVOM2g0YlFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJrc0JDMWU3ZmNmajBPdkduWU1FRXBIdEJZNldIS2Z5Q3lscGpISDdaRVNRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInV2REtZLzRGMlluSWJiRWJMcUFIbkNuVTJwUTJ2bEt6SDVuS1EybDBNM2RxU2g2TUhpQk1Nc3RBOTFPRHNIemVMV1NrZm1IM2hYc3BveGowSC9FdkFBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInpOd0ljSVB6cHlKbW5jWVJJZE1MV3J0TkFUUFdlSSttc0ZZTW0vc0FXQzM0K2lMRlFvaFY2ZG45K0dZSGJWSEczUDYwM2RIbkZkWGx0eHV5cVkvQmh3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NTY4MzIwMDk4NToxNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAzNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMjY2NDAyXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ==


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 2,
  //userImages:process.env.USER_IMAGES|| ".",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "true", 
  //alwaysonline:process.env.WAPRESENCE|| "vailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "true",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
