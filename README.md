<div align="center">
 
# Whatsapp Bot - sticker creator
[![Codefactor](https://www.codefactor.io/repository/github/aidilaryanto/ProjectDils-WA/badge)](https://www.codefactor.io/repository/github/aidilaryanto/ProjectDils-WA)
</div>

## Features

| Sticker Creator |                Feature           |
| :-----------: | :--------------------------------: |
|       ✅       | Send Photo with Caption          |
|       ✅       | Reply A Photo                    |
|       ✅       | Image Url                        |
|       ✅       | Animated sticker using giphy url |
|       SOON       | sticker with no background       |
|       SOON       | sticker meme      |


| Downloader |                     Feature                |
| :------------: | :---------------------------------------------: |
|       ✅        |   Tiktok Downloader (No WM & WM)              |
|       ✅        |   Twitter Video Downloader                    |
|       ✅        |   Facebook Video Downloader (SD & HD)         |
|       ✅      |   Instagram Video Downloader                  |
|       ✅      |   Youtube to mp3  Downloader                  |
|       ✅      |   Youtube to mp4  Downloader                  |

| Education  |                     Feature                     |
| :------------: | :---------------------------------------------: |
|       ✅        |   Translate text (quote only)                  |
|       ✅        |   Brainly Search Engine         |
|       ✅       |   Wiki search engine                            |

| Other  |                     Feature                     |
| :------------: | :---------------------------------------------: |
|       ✅        |   Create Custom meme (top text & bottom text)  |
|       ✅        |   check data on the spread of Covid-19 in certain locations|
|       ✅        |   Check Shipping info (indonesia only)         |
|       ✅        |   Lyrics Search            |
|       ✅        |   Instagram Profile Stalker            |
|       ✅        |   Quote Maker            |
|      BETA        |   Anti Spam                                   |

| Grup Only  |                     Feature                     |
| :------------: | :---------------------------------------------: |
|       ✅        |   Promote User                  |
|       ✅        |   Demote User                   |
|       ✅        |   Kick User                     |
|       ✅        |   Delete bot message            |
|       ✅        |   Mention All User      |
|       ✅        |   Get Admin List      |
|       ✅        |   Get Link Group      |
|       ✅        |   Get Owner Group      |

| Owner Grup Only  |                     Feature                     |
| :------------: | :---------------------------------------------: |
|       ✅        |   Kick All User      |

| Owner Bot Only  |                     Feature                     |
| :------------: | :---------------------------------------------: |
|       ✅        |   Broadcast                  |
|       ✅        |   Leave All Group                   |
|       ✅        |   Clear All Messages                     |

## To-Do
 - Add More Feature
 - More refactoring
 
---

## Getting Started

This project require NodeJS v12.

### Deploy on Heroku
<p align="center"><a href="https://heroku.com/deploy?template=https://github.com/aidilaryanto/ProjectDils-wa/tree/master"> <img src="https://www.herokucdn.com/deploy/button.svg" alt="Deploy to Heroku" /></a></p>

### Install
Clone this project

```bash
> git clone https://github.com/aidilaryanto/ProjectDils-wa.git
> cd ProjectDils-wa
```

Install the dependencies:

```bash
> npm install
```

### Usage
Before running this script, first edit [`THIS`](https://github.com/aidilaryanto/ProjectDils-wa/blob/master/handler/message/index.js#L20) section with your WhatsApp number, remember your WhatsApp number!  Not a bot number, then
```bash
> npm start
```

after running it you need to scan the qr

## Troubleshooting
Make sure all the necessary dependencies are installed: https://github.com/puppeteer/puppeteer/blob/main/docs/troubleshooting.md

Fix Stuck on linux, install google chrome stable: 
```bash
> wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
> sudo apt install ./google-chrome-stable_current_amd64.deb
```

## Special Thanks to
* [`open-wa/wa-automate-nodejs`](https://github.com/open-wa/wa-automate-nodejs)
* [`YogaSakti/imageToSticker`](https://github.com/YogaSakti/imageToSticker)
* [`MhankBarBar/whatsapp-bot`](https://github.com/MhankBarBar/whatsapp-bot)
