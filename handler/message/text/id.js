exports.textTnC = () => {
    return `
Source code / bot ini merupakan program open-source (gratis) yang ditulis menggunakan Javascript, kamu dapat menggunakan, menyalin, memodifikasi, menggabungkan, menerbitkan, mendistribusikan, mensublisensikan, dan atau menjual salinan dengan tanpa menghapus author utama dari source code / bot ini.

Dengan menggunakan source code / bot ini maka anda setuju dengan Syarat dan Kondisi sebagai berikut:
- Source code / bot tidak menyimpan data anda di server kami.
- Source code / bot tidak bertanggung jawab atas sticker yang anda buat dari bot ini serta video, gambar maupun data lainnya yang anda dapatkan dari Source code / bot ini.
- Source code / bot tidak boleh digunakan untuk layanan yang bertujuan/berkontribusi dalam: 
    • seks / perdagangan manusia
    • perjudian
    • perilaku adiktif yang merugikan 
    • kejahatan
    • kekerasan (kecuali jika diperlukan untuk melindungi keselamatan publik)
    • pembakaran hutan / penggundulan hutan
    • ujaran kebencian atau diskriminasi berdasarkan usia, jenis kelamin, identitas gender, ras, seksualitas, agama, kebangsaan

Source Code BOT : https://github.com/aidilaryanto/ProjectDils-wa
Credits : YogaSakti
NodeJS WhatsApp library: https://github.com/open-wa/wa-automate-nodejs

Best regards, Aidil Aryanto.`
}

exports.textMenu = (pushname) => {
    return `
Hi, ${pushname}! 👋️
Berikut adalah beberapa fitur yang ada pada bot ini!✨

🧩 _*Sticker Creator*_
 ├ *!sticker* [Reply Gambar/jadikan Caption]
 ├ *!sticker* _<Link Gambar>_
 └ *!gifsticker* _<Giphy Link>_

🧩 _*Downloader*_
 ├ *!tiktok* _<Tiktok Link>_
 ├ *!fb* _<Post/Video Link>_
 ├ *!ig* _<Instagram Post Link>_
 ├ *!twt* _<Twitter Post Link>_
 ├ *!ytmp3* _<Youtube Link>_
 └ *!ytmp4* _<Youtube Link>_

🧩 _*Edukasi*_
 ├ *!translate* _<Kode Bahasa>_ [Reply Text]
 ├ *!brainly* _<Pertanyaan>_
 └ *!wiki* _<Pertanyaan>_

🧩 _*Lain-lain*_
 ├ *!resi* _<kurir>_ _<nomer resi>_
 ├ *!meme* _<teks atas>_ | _<teks bawah>_
 ├ *!ceklokasi*
 ├ *!lirik* _<Band> <Judul Lagu>_
 ├ *!chord* _<Band> <Judul Lagu>_
 ├ *!igstalk* _<Username Instagram>_
 ├ *!quotemaker* _<text>_ | _<author>_ | _<theme>_
 ├ *!tnc*
 └ *!donasi*

❗ Silahkan baca *!readme* untuk lihat cara penggunaan.
❗ Harap berikan jeda _*5 Detik*_ setiap menjalankan perintah bot.

Hope you have a great day!✨`
}

exports.textAdmin = () => {
    return `
⚠ [ *Admin Group Only* ] ⚠ 

🧩 _*Group Features*_
 ├ *!kick* @user
 ├ *!kickall*
 ├ *!promote* @user
 ├ *!demote* @user
 ├ *!tagall*
 ├ *!del*
 ├ *!adminlist*
 ├ *!ownergroup*
 └ *!linkgroup*

Hope you have a great day!✨`
}

exports.textOwner = () => {
    return `
⚠ [ *Owner Bot Only* ] ⚠ 

🧩 _*Owner Features*_
 ├ *!bc*
 ├ *!clearall*
 └ *!leaveall*

Hope you have a great day!✨`
}

exports.textReadme = () => {
    return `
Cara penggunaan beberapa fitur:

*!sticker*
 └ *Ex:* Kirim gambar dengan caption *!sticker* atau reply gambar dengan *!sticker*

*!translate* _<Kode Bahasa>_
 ├ Kode Bahasa: *https://bit.ly/33FVldE*
 └ *Ex:* *!translate en* kemudian reply ke text

*!cekresi* _<kurir>_ _<nomer resi>
 ├ Daftar kurir: jne, pos, tiki, jnt, sicepat, jet, ninja.
 └ *Ex:* *!cekresi sicepat 123456789*

*!quotemaker* _<text>_ | _<author>_ | _<theme>_
 ├ Theme: silahkan ini dengan tema yang sesuai quotes anda
 ├ *Ex:* *!quotemaker this is quote maker | Aidil | Urban*
 └ ❗ Harap perhatikan penggunaan spasi sebelum dan setelah tanda pemisah |

*!meme* _<teks atas>_ | _<teks bawah>_
 ├ *Ex:* *!meme text atas | text bawah*
 └ ❗ Harap perhatikan penggunaan spasi sebelum dan setelah tanda pemisah |

*!ceklokasi*
 └ *Ex:* reply send location kamu dengan *!ceklokasi*

*!lirik* _<Band> <Judul Lagu>_
 └ *Ex:* *!lirik Nadin Amizah Rumpang* atau *!lirik Rumpang*

*!chord* _<Band> <Judul Lagu>_
 ├ *Ex:* *!chord Nadin Amizah Bertaut* atau *!chord Bertaut*
 └ ❗ Jika chord tidak muncul (hanya _scrapping metadata_), artinya chord tidak tersedia!

*!igstalk* _<Username Instagram>_
 └ *Ex:* *!igstalk aidilaryanto*

Terimakasih.`
}

exports.textDonasi = () => {
    return `
Hai, terimakasih telah menggunakan bot ini. Kamu dapat mendukung bot ini dengan berdonasi ke Owner. Untuk kontak, silahkan mengunjungi websitenya:
https://aidilaryanto.id/

Donasi akan digunakan untuk pengembangan dan pengoperasian bot ini.

Terimakasih.`
}
