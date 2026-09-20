export type Language = 'ar' | 'en'
export type Localized = Record<Language, string>
export type ServiceGroup = 'hair' | 'cosmetics'
export type ServiceIcon = 'cut' | 'blowdry' | 'colour' | 'sparkle' | 'repair' | 'bridal' | 'makeup' | 'lash' | 'bottle'

export const salonConfig = {
  name: { ar: 'إف آند إم هوم أوف بيوتي', en: 'F & M Home of Beauty' },
  wordmark: 'F & M',
  tagline: { ar: 'هوم أوف بيوتي', en: 'HOME OF BEAUTY' },
  category: { ar: 'صالون تجميل ومستحضرات', en: 'Beauty salon and cosmetics' },
  location: {
    ar: 'التجمع الخامس، القاهرة الجديدة، القاهرة',
    en: 'Fifth Settlement, New Cairo, Cairo, Egypt',
  },
  landmark: { ar: 'بالقرب من مول بوينت 90', en: 'Near Point 90 Mall' },
  phone: '+20 110 596 3818',
  phoneHref: 'tel:+201105963818',
  whatsapp: '+20 110 596 3818',
  whatsappNumber: '201105963818',
  email: 'fmbeautysalon789@gmail.com',
  emailHref: 'mailto:fmbeautysalon789@gmail.com',
  instagram: 'Instagram',
  instagramUrl: '',
  tiktok: 'TikTok',
  tiktokUrl: '',
  facebook: 'Facebook',
  facebookUrl: '',
  mapsUrl: 'https://maps.app.goo.gl/FxyB9E212mVTn4dp6?g_st=iw',
  canonicalUrl: 'https://fm-home-of-beauty.example/',
  currency: { ar: 'ج.م', en: 'EGP' },
  hours: {
    weekdays: { ar: 'السبت–الخميس: 10 صباحاً–10 مساءً', en: 'Saturday–Thursday: 10 AM–10 PM' },
    friday: { ar: 'الجمعة: 1 ظهراً–10 مساءً', en: 'Friday: 1 PM–10 PM' },
  },
} as const

export const whatsappHref = (text?: string) => {
  const url = `https://wa.me/${salonConfig.whatsappNumber}`
  return text ? `${url}?text=${encodeURIComponent(text)}` : url
}

export const socialProfiles = [
  { id: 'instagram', href: salonConfig.instagramUrl, label: { ar: 'إنستغرام', en: 'Instagram' } },
  { id: 'tiktok', href: salonConfig.tiktokUrl, label: { ar: 'تيك توك', en: 'TikTok' } },
  { id: 'facebook', href: salonConfig.facebookUrl, label: { ar: 'فيسبوك', en: 'Facebook' } },
] as const

export const navigation = [
  { id: 'home', label: { ar: 'الرئيسية', en: 'Home' } },
  { id: 'services', label: { ar: 'الشعر', en: 'Hair' } },
  { id: 'cosmetics', label: { ar: 'التجميل', en: 'Cosmetics' } },
  { id: 'home-visit', label: { ar: 'خدمة منزلية', en: 'Home visit' } },
  { id: 'work', label: { ar: 'أعمالنا', en: 'Our Work' } },
  { id: 'experience', label: { ar: 'تجربتنا', en: 'Experience' } },
  { id: 'contact', label: { ar: 'تواصلي معنا', en: 'Contact' } },
] as const

export const services = [
  { id: 'cut', group: 'hair' as const, icon: 'cut' as const, name: { ar: 'قص وتصفيف', en: 'Signature Cut & Finish' }, description: { ar: 'استشارة شخصية، قص احترافي، غسيل وتصفيف نهائي.', en: 'A personalised consultation, precision cut, wash and finish.' }, duration: { ar: '60–75 دقيقة', en: '60–75 minutes' }, price: 650 },
  { id: 'blowdry', group: 'hair' as const, icon: 'blowdry' as const, name: { ar: 'سيشوار وتصفيف', en: 'Signature Blow-dry' }, description: { ar: 'تصفيف ناعم، مموج أو انسيابي بما يناسب إطلالتكِ.', en: 'A smooth, polished or softly textured finish designed around your look.' }, duration: { ar: '45–60 دقيقة', en: '45–60 minutes' }, price: 400 },
  { id: 'roots', group: 'hair' as const, icon: 'colour' as const, name: { ar: 'صبغة الجذور', en: 'Root Colour' }, description: { ar: 'تغطية احترافية للجذور بدرجة مختارة لتندمج بشكل طبيعي.', en: 'Professional root coverage with a shade selected to blend naturally.' }, duration: { ar: '90 دقيقة', en: '90 minutes' }, price: 900 },
  { id: 'colour', group: 'hair' as const, icon: 'colour' as const, name: { ar: 'صبغة كاملة', en: 'Full Colour' }, description: { ar: 'لون كامل مخصص بعد الاستشارة مع تصفيف احترافي.', en: 'Personalised all-over colour with consultation and professional finishing.' }, duration: { ar: '2–3 ساعات', en: '2–3 hours' }, price: 1800 },
  { id: 'balayage', group: 'hair' as const, icon: 'sparkle' as const, name: { ar: 'بالياج وهايلايت', en: 'Balayage & Highlights' }, description: { ar: 'ألوان متعددة الأبعاد يتم اختيارها بما يناسب لون بشرتكِ وروتين العناية الخاص بكِ.', en: 'Dimensional, hand-finished colour planned for your skin tone and maintenance preference.' }, duration: { ar: '3–5 ساعات', en: '3–5 hours' }, price: 2500, featured: true },
  { id: 'repair', group: 'hair' as const, icon: 'repair' as const, name: { ar: 'جلسة ترميم وعناية', en: 'Repair Ritual' }, description: { ar: 'جلسة عناية يتم اختيارها حسب احتياج شعركِ للترطيب والقوة.', en: 'A restorative treatment selected according to your hair’s moisture and strength needs.' }, duration: { ar: '60–90 دقيقة', en: '60–90 minutes' }, price: 1200 },
  { id: 'bridal', group: 'hair' as const, icon: 'bridal' as const, name: { ar: 'تسريحات العرائس', en: 'Bridal Styling' }, description: { ar: 'استشارة وتجربة وتصميم تسريحة متكاملة ليوم زفافكِ.', en: 'Consultation, styling plan and an elegant finish for your wedding day.' }, duration: { ar: 'حسب الاستشارة', en: 'By consultation' }, price: 3500 },
  { id: 'makeup', group: 'cosmetics' as const, icon: 'makeup' as const, name: { ar: 'مكياج يومي ومناسبات', en: 'Makeup Look' }, description: { ar: 'مكياج ناعم أو جريء يناسب المناسبة، مع اختيار درجات تبرز ملامحكِ.', en: 'Soft or statement makeup designed for the occasion, with shades chosen to flatter your features.' }, duration: { ar: '45–75 دقيقة', en: '45–75 minutes' }, price: 800 },
  { id: 'bridal-makeup', group: 'cosmetics' as const, icon: 'bridal' as const, name: { ar: 'مكياج العرائس', en: 'Bridal Makeup' }, description: { ar: 'تجربة مكياج يوم الزفاف مع لمسة تدوم، منسقة مع تسريحتكِ وإطلالتكِ.', en: 'A wedding-day makeup trial and lasting finish, planned with your hairstyle and look.' }, duration: { ar: 'حسب الاستشارة', en: 'By consultation' }, price: 2800, featured: true },
  { id: 'lash-brow', group: 'cosmetics' as const, icon: 'lash' as const, name: { ar: 'رموش وحواجب', en: 'Lash & Brow' }, description: { ar: 'تشكيل الحواجب، صبغة خفيفة، أو لمسة رموش لإطلالة أكثر وضوحاً.', en: 'Brow shaping, soft tint, or lash definition for a more polished, lifted look.' }, duration: { ar: '30–45 دقيقة', en: '30–45 minutes' }, price: 350 },
  { id: 'products', group: 'cosmetics' as const, icon: 'bottle' as const, name: { ar: 'استشارة مستحضرات', en: 'Beauty Products Consultation' }, description: { ar: 'نساعدكِ في اختيار مستحضرات العناية والجمال المناسبة لشعركِ وبشرتكِ.', en: 'Guidance on hair and beauty products chosen for your hair, skin and routine.' }, duration: { ar: '20–30 دقيقة', en: '20–30 minutes' }, price: 200 },
] as const

export const galleryItems = [
  { src: '/images/work-knotless-back.png', width: 720, height: 960, category: { ar: 'ضفائر', en: 'Braids' }, alt: { ar: 'ضفائر نوتلس طويلة مموجة من الخلف', en: 'Long knotless braids with curly ends, seen from behind' } },
  { src: '/images/work-cornrow-side.png', width: 720, height: 960, category: { ar: 'كورنرو', en: 'Cornrows' }, alt: { ar: 'كورنرو جانبي ينتهي بضفائر طويلة مموجة', en: 'Side-swept cornrows flowing into long curly braids' } },
  { src: '/images/work-feed-in-design.png', width: 720, height: 800, category: { ar: 'تصميم ضفائر', en: 'Braid design' }, alt: { ar: 'تصميم ضفائر فيد إن بنمط أوراق على فروة الرأس', en: 'Feed-in braid design with a leaf pattern on the scalp' } },
  { src: '/images/work-pink-braids.png', width: 720, height: 800, category: { ar: 'لون وضفائر', en: 'Colour & braids' }, alt: { ar: 'ضفائر وردية غامقة مع مكياج ناعم', en: 'Deep pink box braids with a soft makeup look' } },
  { src: '/images/work-long-twists.png', width: 720, height: 1280, category: { ar: 'تويست', en: 'Twists' }, alt: { ar: 'تويست أسود طويل مع لمسة نهائية أنيقة', en: 'Long black twists finished with a sleek look' } },
  { src: '/images/work-kids-ponytails.png', width: 720, height: 1280, category: { ar: 'تسريحات أطفال', en: 'Kids styles' }, alt: { ar: 'كورنرو للأطفال مع ذيلين مزخرفين', en: 'Kids cornrows styled into two decorated ponytails' } },
] as const

export const shopProducts = [
  { id: '1', src: '/shop/1.jpeg', name: { ar: 'طلاء أظافر Another Sexy', en: 'Another Sexy nail polish' }, alt: { ar: 'زجاجتا طلاء أظافر بلون بيج وبني', en: 'Two Another Sexy nail polish bottles in beige and brown' } },
  { id: '2', src: '/shop/2.jpeg', name: { ar: 'ORS Olive Oil شين سبراي', en: 'ORS Olive Oil sheen spray' }, alt: { ar: 'علب سبراي لمعان الشعر ORS بزيت الزيتون', en: 'ORS Olive Oil nourishing sheen spray cans' } },
  { id: '3', src: '/shop/3.jpeg', name: { ar: 'طقم رولات وتصفيف', en: 'Hair roller styling set' }, alt: { ar: 'طقم رولات ملونة مع مشابك ومشط', en: 'Colourful hair rollers with clips and comb' } },
  { id: '4', src: '/shop/4.jpeg', name: { ar: 'أدوات تصفيف وعناية', en: 'Styling tools & care set' }, alt: { ar: 'مجموعة أدوات تصفيف الشعر والعناية', en: 'Hair styling tools and care products laid out together' } },
  { id: '5', src: '/shop/5.jpeg', name: { ar: 'مسحوق تبييض الشعر', en: 'Hair bleaching powder' }, alt: { ar: 'علب مسحوق تبييض الشعر على الرف', en: 'Hair bleaching powder tubs on the shelf' } },
  { id: '6', src: '/shop/6.jpeg', name: { ar: 'مطور لون 40VOL', en: '40VOL hair developer' }, alt: { ar: 'زجاجات مطور لون الشعر 12% 40VOL', en: 'DLWEL 12% 40VOL hair developer bottles' } },
  { id: '7', src: '/shop/7.jpeg', name: { ar: 'ماسك SheaMoisture', en: 'SheaMoisture treatment masque' }, alt: { ar: 'برطمانات ماسك زيت الخروع الجامايكي', en: 'SheaMoisture Jamaican Black Castor Oil treatment masque jars' } },
  { id: '8', src: '/shop/8.jpeg', name: { ar: 'سبراي لاصق للليس', en: 'Lace bond adhesive spray' }, alt: { ar: 'ثلاث زجاجات سبراي لاصق للليس', en: 'Three bottles of lace bond adhesive spray' } },
  { id: '9', src: '/shop/9.jpeg', name: { ar: 'طقم أمشاط احترافي 10 قطع', en: '10-piece professional comb set' }, alt: { ar: 'طقم أمشاط احترافي أسود من 10 قطع', en: 'Black 10-piece professional comb set' } },
  { id: '10', src: '/shop/10.jpeg', name: { ar: 'رأس تدريب مع حامل', en: 'Mannequin head with stand' }, alt: { ar: 'رأس تدريب على حامل وردي ثلاثي الأرجل', en: 'Practice mannequin head on a pink tripod stand' } },
  { id: '11', src: '/shop/11.jpeg', name: { ar: 'حامل وصلات الشعر', en: 'Hair extension organizer stand' }, alt: { ar: 'حامل معدني لتنظيم وصلات الشعر مع مشابك وأمشاط', en: 'Metal hair extension organizer stand with clips and combs' } },
] as const

export const copy = {
  ar: {
    skip: 'تخطي إلى المحتوى', language: 'EN', booking: 'احجزي موعدك', menuOpen: 'فتح القائمة', menuClose: 'إغلاق القائمة',
    hero: { eyebrow: 'صالون تجميل ومستحضرات في القاهرة الجديدة', title: 'جمالكِ يبدأ من هنا', body: 'قصات، ألوان، مكياج وعناية نختارها بعد فهم إطلالتكِ، لنمنحكِ نتيجة تشعرين معها بالثقة كل يوم.', secondary: 'اكتشفي خدماتنا', location: 'التجمع الخامس، بالقرب من مول بوينت 90' },
    intro: { eyebrow: 'تجربة F & M', title: 'الجمال الحقيقي يبدأ بالاستماع', body: 'في F & M Home of Beauty لا نبدأ بالمقص أو الفرشاة. نبدأ باستشارة نفهم فيها شعركِ، بشرتكِ والنتيجة التي تبحثين عنها. بعدها نختار القصة، المكياج والعناية المناسبة.', principles: ['استشارة شخصية', 'عناية تناسبكِ', 'أسعار واضحة قبل البدء'] },
    services: { eyebrow: 'قائمة الخدمات', title: 'شعر وتجميل في مكان واحد', body: 'من القصة الدقيقة إلى المكياج ومستحضرات الجمال، تبدأ كل خدمة باستشارة واضحة.', hair: 'خدمات الشعر', cosmetics: 'التجميل والمستحضرات', from: 'تبدأ من', book: 'احجزي هذه الخدمة', note: 'الأسعار الموضحة هي أسعار بداية وقد تختلف حسب طول الشعر وكثافته والخدمة المطلوبة. يتم تأكيد السعر بعد الاستشارة وقبل بدء الخدمة.' },
    homeVisit: { eyebrow: 'نأتي إليكِ', title: 'خدمة منزلية في مكان راحتكِ', body: 'تواصلي معنا، ونأتي إلى منزلكِ لنصفف شعركِ ونعتني بجمالكِ حيث تشعرين بالراحة. الخدمة المنزلية مناسبة للقص، التصفيف، المكياج والمناسبات دون الحاجة للحضور إلى الصالون.', steps: [{ title: 'تواصلي معنا', body: 'أرسلي طلبكِ عبر واتساب واخبري فريقنا بالخدمة والمكان المناسب.' }, { title: 'نأتي إلى منزلكِ', body: 'يصل فريق F & M إليكِ في الوقت المتفق عليه، مع الأدوات والعناية اللازمة.' }, { title: 'جمالكِ في راحة بيتكِ', body: 'ننفذ الخدمة في مكان مريح لكِ، بنفس الاحتراف الذي تجدينه في الصالون.' }], cta: 'احجزي زيارة منزلية', whatsappMessage: 'مرحباً F & M، أرغب في حجز خدمة منزلية.' },
    transformation: { eyebrow: 'إطلالة متكاملة', title: 'لون ومكياج مصممان لكِ', body: 'لا توجد درجة واحدة تناسب الجميع. نخطط للون والمكياج حول لون بشرتكِ، حالة شعركِ، والمناسبة التي تستعدين لها.', cta: 'احجزي استشارة جمال' },
    gallery: { eyebrow: 'تفاصيل تصنع الفرق', title: 'من أعمالنا', body: 'ضفائر، تصفيف وأعمال حقيقية من كرسي F & M.', open: 'فتح الصورة', close: 'إغلاق معرض الصور', previous: 'الصورة السابقة', next: 'الصورة التالية' },
    bookingSection: { eyebrow: 'تواصلي معنا', title: 'واتساب والبريد', body: 'تواصلي معنا مباشرة عبر واتساب أو البريد الإلكتروني. نرد عليكِ لتأكيد الموعد والتفاصيل.', whatsappLabel: 'واتساب', emailLabel: 'البريد الإلكتروني', submit: 'إرسال الطلب عبر واتساب', messageIntro: 'مرحباً F & M، أرغب في حجز موعد.' },
    contact: { eyebrow: 'القاهرة الجديدة', title: 'زورينا في F & M', locationLabel: 'الموقع', hoursLabel: 'مواعيد العمل', contactLabel: 'التواصل', maps: 'فتح خرائط Google', whatsapp: 'واتساب', instagram: 'إنستغرام', tiktok: 'تيك توك', facebook: 'فيسبوك', email: 'البريد' },
    footer: { description: 'صالون تجميل ومستحضرات في القاهرة الجديدة للشعر، المكياج والعناية باحتراف واهتمام بالتفاصيل.', privacy: 'الخصوصية', rights: 'جميع الحقوق محفوظة.' },
    shop: { nav: 'المتجر', eyebrow: 'متجر F & M', title: 'منتجات العناية والتجميل', body: 'اختاري المنتج، وتواصلي معنا عبر واتساب لمعرفة السعر والتوفر.', cta: 'العودة إلى الرئيسية', askPrice: 'اسألي عن السعر عبر واتساب', priceNote: 'الأسعار عبر واتساب', whatsappMessage: 'مرحباً F & M، أرغب في معرفة سعر هذا المنتج:', metadata: { title: 'المتجر | F & M Home of Beauty', description: 'تسوّقي منتجات العناية والتجميل من F & M Home of Beauty واسألي عن السعر عبر واتساب.' } },
    metadata: { title: 'F & M Home of Beauty | صالون تجميل ومستحضرات في القاهرة الجديدة', description: 'قصات، صبغات، مكياج وعناية في التجمع الخامس. اكتشفي F & M Home of Beauty واحجزي استشارتكِ عبر واتساب.' },
  },
  en: {
    skip: 'Skip to content', language: 'العربية', booking: 'Book an appointment', menuOpen: 'Open menu', menuClose: 'Close menu',
    hero: { eyebrow: 'Beauty salon and cosmetics in New Cairo', title: 'Beauty that feels like home', body: 'Cuts, colour, makeup and professional care that begin with understanding your hair, your skin and the way you want to feel.', secondary: 'Explore our services', location: 'Fifth Settlement, near Point 90 Mall' },
    intro: { eyebrow: 'The F & M experience', title: 'Beauty starts with listening', body: 'At F & M Home of Beauty we do not begin with scissors or brushes. We begin with a consultation about your hair, skin and desired result. From there we choose the cut, makeup and care that will last beyond the salon.', principles: ['Personal consultation', 'Care tailored to you', 'Clear pricing before we begin'] },
    services: { eyebrow: 'Service menu', title: 'Hair and cosmetics, together', body: 'From a precise cut to makeup and beauty products, every service begins with a clear consultation.', hair: 'Hair services', cosmetics: 'Cosmetics & beauty', from: 'From', book: 'Book this service', note: 'Displayed prices are starting prices and may vary depending on hair length, density and the selected service. The final price is confirmed after consultation and before the service begins.' },
    homeVisit: { eyebrow: 'We come to you', title: 'Home visits, where you are comfortable', body: 'Get in touch and we come to your home to do your hair and beauty where you feel most at ease. Home service is ideal for cuts, styling, makeup and special occasions, without travelling to the salon.', steps: [{ title: 'You contact us', body: 'Send a WhatsApp request with the service you need and where we should come.' }, { title: 'We come to your home', body: 'The F & M team arrives at the agreed time, with the tools and care needed for your look.' }, { title: 'Beauty in your comfort', body: 'We complete the service in a space that feels comfortable for you, with the same care as in the salon.' }], cta: 'Book a home visit', whatsappMessage: 'Hello F & M, I would like to book a home visit.' },
    transformation: { eyebrow: 'A complete look', title: 'Colour and makeup created around you', body: 'There is no single shade that works for everyone. Your colour and makeup are planned around your skin tone, hair condition and the occasion you are preparing for.', cta: 'Book a beauty consultation' },
    gallery: { eyebrow: 'The details matter', title: 'Selected work', body: 'Braids, styling and real looks from the F & M chair.', open: 'Open image', close: 'Close gallery', previous: 'Previous image', next: 'Next image' },
    bookingSection: { eyebrow: 'Get in touch', title: 'WhatsApp and email', body: 'Message us on WhatsApp or email. We will reply to confirm your time and details.', whatsappLabel: 'WhatsApp', emailLabel: 'Email', submit: 'Send request via WhatsApp', messageIntro: 'Hello F & M, I would like to book an appointment.' },
    contact: { eyebrow: 'New Cairo', title: 'Visit F & M', locationLabel: 'Location', hoursLabel: 'Opening hours', contactLabel: 'Contact', maps: 'Open in Google Maps', whatsapp: 'WhatsApp', instagram: 'Instagram', tiktok: 'TikTok', facebook: 'Facebook', email: 'Email' },
    footer: { description: 'A New Cairo home for thoughtful cuts, makeup, cosmetics and professional beauty care.', privacy: 'Privacy', rights: 'All rights reserved.' },
    shop: { nav: 'Shop', eyebrow: 'F & M shop', title: 'Beauty products', body: 'Browse the collection, then message us on WhatsApp for price and availability.', cta: 'Back to the salon', askPrice: 'Ask price on WhatsApp', priceNote: 'Price via WhatsApp', whatsappMessage: 'Hello F & M, I would like the price for this product:', metadata: { title: 'Shop | F & M Home of Beauty', description: 'Shop beauty and hair-care products at F & M Home of Beauty. Message us on WhatsApp for pricing.' } },
    metadata: { title: 'F & M Home of Beauty | Salon and Cosmetics in New Cairo', description: 'Cuts, colour, makeup and cosmetics in Fifth Settlement, New Cairo. Explore F & M Home of Beauty and request your appointment through WhatsApp.' },
  },
} as const
