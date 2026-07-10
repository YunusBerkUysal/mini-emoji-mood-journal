# Mini Emoji Mood Journal 😊

Mini Emoji Mood Journal, kullanıcıların günlük ruh hallerini bir emoji, tarih ve kısa bir not ile kaydetmelerini sağlayan, React tabanlı basit ve kullanıcı dostu bir web uygulamasıdır. Kullanıcılar geçmiş kayıtlarını listeyebilir, ruh haline göre filtreleme yapabilir ve genel istatistiklerini takip edebilirler.

## 🚀 Kurulum ve Çalıştırma Talimatları

Projeyi yerel ortamınızda çalıştırmak için aşağıdaki adımları izleyin:

1. **Projeyi Klonlayın veya İndirin:**
   Terminalinizde projenin ana dizinine gidin.
   `cd mini-emoji-mood-journal`

2. **Bağımlılıkları Yükleyin:**
   Node.js yüklü olduğundan emin olun. Ardından paketleri kurun:
   `npm install`

3. **Geliştirme Sunucusunu Başlatın:**
   `npm run dev`

4. **Uygulamayı Görüntüleyin:**
   Tarayıcınızda terminalin verdiği adrese giderek uygulamayı kullanmaya başlayabilirsiniz.

## 🧩 Kullanılan Bileşenler (Components)

Proje, sürdürülebilir bir mimariye sahip olup aşağıdaki bileşenlerden (components) oluşmaktadır:

* **`App.jsx`:** Uygulamanın ana merkezidir. Durum yönetimi (State management) ve LocalStorage senkronizasyonu burada gerçekleşir. Alt bileşenlere "Props" aracılığıyla veri aktarır.
* **`MoodForm.jsx`:** Kullanıcının yeni bir kayıt eklemesini sağlayan form bileşenidir. Form verilerini alır, validasyonları (doğrulamaları) yapar ve hataları kullanıcıya gösterir.
* **`MoodList.jsx`:** Kaydedilen ruh hallerini listeleyen ana vitrin bileşenidir. Veri dizisini map metoduyla tarar. Kayıt yoksa "Boş Durum (Empty State)" mesajı gösterir.
* **`MoodCard.jsx`:** Listelenen her bir ruh hali kaydının UI kartı şeklinde ekrana çizilmesini ve tekil silme işleminin tetiklenmesini sağlar.
* **`MoodFilter.jsx`:** Geçmiş kayıtları ruh hali türüne göre filtrelemek için kullanılan bileşendir. Orijinal veriyi bozmadan türetilmiş durum (Derived State) kullanır.
* **`MoodStats.jsx`:** Sayfanın üst kısmında toplam kayıt sayısını ve en sık seçilen ruh halini dinamik olarak hesaplayıp gösteren istatistik kartıdır.
