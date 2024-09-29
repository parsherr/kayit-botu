# Discord.js v14 Gelişmiş Kayıt Botu

Bu proje, Discord.js v14 kullanılarak oluşturulmuş gelişmiş bir kayıt botudur. Sunucunuzda kolayca üye kayıt sistemi kurabilir ve yönetebilirsiniz.

(NOT : bu bot @sadecemsi tarafından yazıldı, @parsherr tarafından geliştirildi)

### Eklenecekler :

- 3 aşamalı ve rollü uyarı sistemi

## Özellikler

- Discord.js v14 ile geliştirilmiş
- Slash komutları ve prefix komutları desteği
- Üye kayıt etme, bilgi görüntüleme ve istatistik özellikleri
- Özelleştirilebilir kayıt rolleri ve kanalları
- Otomatik rol verme sistemi
- Çoklu sunucu desteği

## Kurulum

1. Repoyu klonlayın veya ZIP olarak indirin
2. Proje dizinine gidin ve `npm install` komutunu çalıştırarak bağımlılıkları yükleyin
3. `config.json` dosyasını oluşturun ve bot tokeninizi ekleyin:
   ```json
   {
     "token": "YOUR_BOT_TOKEN_HERE",
     "prefix": "PREFİXİNİZ_BURAYA"
   }
   ```
4. `node index.js` komutu ile botu başlatın

## Kullanım

Bot aşağıdaki temel komutları destekler:

### Yardım Komutu

Botun tüm komutlarını ve kullanımlarını gösterir.

- Slash Komut: `/yardım`
- Prefix Komut: `!yardım`

### Prefix Değiştirme Komutu

Botun prefix'ini değiştirir.

- Slash Komut: `/prefix <yeni-prefix>`
- Prefix Komut: `!prefix <yeni-prefix>`


## Topluluk & Destek

Discord sunucumuzdan diğer altyapılarımıza ulaşabilirsiniz ve destek alabilirsiniz!

[![Discord Banner](https://api.weblutions.com/discord/invite/bdfd/)](https://discord.gg/bdfd)

## Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Daha fazla bilgi için `LICENSE` dosyasına bakın.
