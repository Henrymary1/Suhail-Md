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
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'
//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_10_07_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTUzLFxuICAgICAgICAwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjM1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTY0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjM0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMzksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDc2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTExLFxuICAgICAgICA1MCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDQyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDExLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTY2LFxuICAgICAgICA1NyxcbiAgICAgICAgMTEwLFxuICAgICAgICA3MCxcbiAgICAgICAgODIsXG4gICAgICAgIDMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgODIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTAzLFxuICAgICAgICA1NSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTE5LFxuICAgICAgICAxOTksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTg0LFxuICAgICAgICA0NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDczLFxuICAgICAgICAxMDUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgODIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDk4LFxuICAgICAgICAzMSxcbiAgICAgICAgODcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMSxcbiAgICAgICAgMTAxLFxuICAgICAgICA0NixcbiAgICAgICAgOTIsXG4gICAgICAgIDQxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE2NixcbiAgICAgICAgODYsXG4gICAgICAgIDY0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1OSxcbiAgICAgICAgMSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjI5LFxuICAgICAgICAyLFxuICAgICAgICAxODAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTY3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDkyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNjMsXG4gICAgICAgIDQxLFxuICAgICAgICAxLFxuICAgICAgICAzNSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTI1LFxuICAgICAgICA2MixcbiAgICAgICAgMTU2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDc0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDMzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjM5LFxuICAgICAgICAzOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgODEsXG4gICAgICAgIDgyLFxuICAgICAgICA5MyxcbiAgICAgICAgMTgyLFxuICAgICAgICA4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDY1LFxuICAgICAgICA2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjM3LFxuICAgICAgICA5MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMDksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTQxLFxuICAgICAgICA0NSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDg0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDU1LFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDExOSxcbiAgICAgICAgNzIsXG4gICAgICAgIDUyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMzAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjcsXG4gICAgICAgIDMwLFxuICAgICAgICA5OSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxOSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTI3LFxuICAgICAgICA1NSxcbiAgICAgICAgMTUwLFxuICAgICAgICAzMCxcbiAgICAgICAgNjcsXG4gICAgICAgIDkzLFxuICAgICAgICAxODIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTgzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDY4LFxuICAgICAgICAzMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDc5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY5LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjMyLFxuICAgICAgICA4NyxcbiAgICAgICAgMzUsXG4gICAgICAgIDI0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDc4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDQ2LFxuICAgICAgICA2OSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDgyLFxuICAgICAgICAyOCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDE4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDExMixcbiAgICAgICAgNTUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTU3LFxuICAgICAgICAxOSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxODksXG4gICAgICAgIDU5LFxuICAgICAgICAyMSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDY5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjE4LFxuICAgICAgICA0MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDc0LFxuICAgICAgICAxOTksXG4gICAgICAgIDEzNixcbiAgICAgICAgMjksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIzOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJHQW12WnU3VU9kbmdRZWpoNFRVcEhFVlRJOGFxbitGL1llUGE5c3NIM0w0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJkVmx4Rkpqb1RaMmNSOHhSWGlRTjhBXCIsXG4gIFwicGhvbmVJZFwiOiBcImE0YzNiZmNlLWM5YjItNGI3Yi05YTAyLTg0ZDM2Yzk5NTA3YVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjcsXG4gICAgICA0NSxcbiAgICAgIDUxLFxuICAgICAgNSxcbiAgICAgIDU3LFxuICAgICAgMTQ5LFxuICAgICAgMTA5LFxuICAgICAgMTc5LFxuICAgICAgMTIxLFxuICAgICAgOTIsXG4gICAgICAxMzcsXG4gICAgICAyNDEsXG4gICAgICAxMCxcbiAgICAgIDc0LFxuICAgICAgMTk5LFxuICAgICAgNTgsXG4gICAgICA4MyxcbiAgICAgIDUxLFxuICAgICAgMTQ2LFxuICAgICAgOTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjM1LFxuICAgICAgNjcsXG4gICAgICAyNDgsXG4gICAgICAxMDUsXG4gICAgICAxNjgsXG4gICAgICAxMDEsXG4gICAgICAxNTAsXG4gICAgICAxOCxcbiAgICAgIDIzNyxcbiAgICAgIDkzLFxuICAgICAgNDYsXG4gICAgICAyMjUsXG4gICAgICA2NCxcbiAgICAgIDIyNCxcbiAgICAgIDE3OSxcbiAgICAgIDIwOSxcbiAgICAgIDEsXG4gICAgICA3NyxcbiAgICAgIDIxMCxcbiAgICAgIDExOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJQNzhHQUwxQ1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU1NjgzMjAwOTg1OjE4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiX9KkxJLigqbGpsq4INKk4oiG4oKh4bWPw4vGpiRfXCIsXG4gICAgXCJsaWRcIjogXCI1Nzc2NzcyOTU5ODY1NjoxOEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQQ245NDBFRU02SjVyUUdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImtzQkMxZTdmY2ZqME92R25ZTUVFcEh0Qlk2V0hLZnlDeWxwakhIN1pFU1E9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZWhmTitleXYwSEZjSTNiL1oxdkQwd2lpT3hMVGd2Y0pBdis4TXNMMm0yUEZvU0cxcmVIdEFPcml6clc3VmxDNzY2U1ljVWpNeFNYMVlKZ21vcVdEQlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwieEo3WWlUY00wbU9lQ1o0c0RjdTNGZXdBdWliQnY2czJkY3lUc3dPbFF6a25Pd0pHOW10dEZQUG83TjlRNWZsZFVkQXFQbEdtVnRjRVliby9CcGVyRFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU1NjgzMjAwOTg1OjE4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDM2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjEzMzcwNDMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGWGRcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZYZC5qc29uIjogIntcImtleURhdGFcIjpcIlNnMmVZdnplN0JoK2FCNnlRb0hNY1dlWjR5bFllMnptQldIazZma1p5WDg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTEwMjk1OTU5OSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
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
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
