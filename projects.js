/* ------------------------------------------------------------------
   SITE DATA — categories and projects
   To add a project: copy one block in "projects", change slug / titles,
   then create the folder  assets/projects/<category>/<slug>/
   and drop the photos inside (see README.txt).
------------------------------------------------------------------- */
window.SITE_DATA = {
  categories: {
    renovation: {
      page: 'renovation.html',
      title: { en: 'Renovation', fa: 'بازسازی', ar: 'التجديد' },
      desc: {
        en: 'Reworking existing spaces with care, clarity and purpose.',
        fa: 'بازآفرینی فضاهای موجود با دقت، شفافیت و هدف.',
        ar: 'إعادة تشكيل المساحات القائمة بعناية ووضوح وهدف.'
      }
    },
    supervision: {
      page: 'supervision.html',
      title: { en: 'Supervision', fa: 'نظارت', ar: 'الإشراف' },
      desc: {
        en: 'Coordinated execution and attention to project details.',
        fa: 'اجرای هماهنگ و توجه به جزئیات پروژه.',
        ar: 'تنفيذ منسق واهتمام بتفاصيل المشروع.'
      }
    },
    interior: {
      page: 'interior-design.html',
      title: { en: 'Interior Design', fa: 'طراحی داخلی', ar: 'التصميم الداخلي' },
      desc: {
        en: 'Thoughtful spaces, refined materials and functional layouts.',
        fa: 'فضاهایی سنجیده، با متریال‌های ظریف و چیدمان‌های کاربردی.',
        ar: 'مساحات مدروسة ومواد راقية وتوزيعات وظيفية.'
      }
    },
    facade: {
      page: 'facade.html',
      title: { en: 'Building Facade', fa: 'نمای ساختمان', ar: 'واجهة المبنى' },
      desc: {
        en: 'Distinctive architectural identity and considered proportions.',
        fa: 'هویت معماری متمایز و تناسبات دقیق.',
        ar: 'هوية معمارية مميزة ونسب مدروسة.'
      }
    }
  },

  projects: [
    {
      slug: "interior-project-01", category: "interior",
      folder: "assets/projects/interior/interior-project-01",
      title: { en: "Interior Design Project 01", fa: "پروژه طراحی داخلی ۰۱", ar: "مشروع تصميم داخلي ٠١" },
      place: { en: "Interior Design", fa: "طراحی داخلی", ar: "التصميم الداخلي" }
    },
    {
      slug: "moshtagh-2", category: "supervision",
      folder: "assets/projects/supervision/moshtagh-2",
      title: { en: "Residential Property Supervision", fa: "نظارت ملک مسکونی", ar: "الإشراف على عقار سكني" },
      place: { en: "Moshtagh 2nd Street, Isfahan", fa: "مشتاق دوم، اصفهان", ar: "شارع مشتاق الثاني، أصفهان" }
    },
    {
      slug: "keshvari", category: "supervision",
      folder: "assets/projects/supervision/keshvari",
      title: { en: "Residential Complex Supervision", fa: "نظارت مجموعه مسکونی", ar: "الإشراف على مجمع سكني" },
      place: { en: "Keshvari, Isfahan", fa: "کشوری، اصفهان", ar: "كشوري، أصفهان" }
    },
    {
      slug: "mulla-sadra", category: "supervision",
      folder: "assets/projects/supervision/mulla-sadra",
      title: { en: "Facade & Interior Supervision", fa: "نظارت نما و داخلی", ar: "الإشراف على الواجهة والتصميم الداخلي" },
      place: { en: "Mulla Sadra, Isfahan", fa: "ملاصدرا، اصفهان", ar: "ملاصدرا، أصفهان" }
    },
    {
      slug: "elevator-hasht-behesht", category: "renovation",
      folder: "assets/projects/renovation/elevator-hasht-behesht",
      title: { en: "Elevator Installation", fa: "اجرای اسانسور", ar: "تركيب مصعد" },
      place: { en: "Hasht Behesht, Isfahan", fa: "هشت بهشت اصفهان", ar: "هشت بهشت، أصفهان" }
    },
    {
      slug: "garden-villa-goldasht", category: "renovation",
      folder: "assets/projects/renovation/garden-villa-goldasht",
      title: { en: "Garden & Villa Renovation", fa: "بازسازی باغ و ویلا", ar: "تجديد حديقة وفيلا" },
      place: { en: "Goldasht, Isfahan", fa: "گلدشت اصفهان", ar: "گلدشت، أصفهان" }
    },
    {
      slug: "interior-goldasht", category: "renovation",
      folder: "assets/projects/renovation/interior-goldasht",
      title: { en: "Interior Renovation", fa: "بازسازی داخلی", ar: "تجديد داخلي" },
      place: { en: "Goldasht, Isfahan", fa: "گلدشت اصفهان", ar: "گلدشت، أصفهان" }
    },
    {
      slug: "interior-chaharbagh", category: "renovation",
      folder: "assets/projects/renovation/interior-chaharbagh",
      title: { en: "Interior Renovation", fa: "بازسازی داخلی", ar: "تجديد داخلي" },
      place: { en: "Chaharbagh, Isfahan", fa: "چهارباغ اصفهان", ar: "چهارباغ، أصفهان" }
    },
    {
      slug: "interior-mardavij", category: "renovation",
      folder: "assets/projects/renovation/interior-mardavij",
      title: { en: "Interior Renovation", fa: "بازسازی داخلی", ar: "تجديد داخلي" },
      place: { en: "Mardavij, Isfahan", fa: "مرداویج اصفهان", ar: "مرداويج، أصفهان" }
    },
    {
      slug: "interior-moshtagh-1", category: "renovation",
      folder: "assets/projects/renovation/interior-moshtagh-1",
      title: { en: "Interior Renovation", fa: "بازسازی داخلی", ar: "تجديد داخلي" },
      place: { en: "Moshtagh 1st, Isfahan", fa: "مشتاق اول اصفهان", ar: "مشتاق الأول، أصفهان" }
    },
    {
      slug: "decoration-villa-fooladshahr", category: "renovation",
      folder: "assets/projects/renovation/decoration-villa-fooladshahr",
      title: { en: "Interior Decoration & Villa Renovation", fa: "بازسازی دکوراسیون داخلی و ویلا", ar: "تجديد الديكور الداخلي والفيلا" },
      place: { en: "Fooladshahr, Isfahan", fa: "قولادشهر اصفهان", ar: "قولادشهر، أصفهان" }
    },
    {
      slug: "landscape-goldasht", category: "renovation",
      folder: "assets/projects/renovation/landscape-goldasht",
      title: { en: "Landscape Renovation", fa: "بازسازی محوطه", ar: "تجديد المحيط الخارجي" },
      place: { en: "Goldasht, Isfahan", fa: "گلدشت اصفهان", ar: "گلدشت، أصفهان" }
    },
    {
      slug: "landscape-chishir", category: "renovation",
      folder: "assets/projects/renovation/landscape-chishir",
      title: { en: "Landscape Renovation", fa: "بازسازی محوطه", ar: "تجديد المحيط الخارجي" },
      place: { en: "Chishir, Isfahan", fa: "چی شیر اصفهان", ar: "تشي شير، أصفهان" }
    },
    {
      slug: "facade-goldasht", category: "renovation",
      folder: "assets/projects/renovation/facade-goldasht",
      title: { en: "Facade Renovation", fa: "بازسازی نما", ar: "تجديد الواجهة" },
      place: { en: "Goldasht, Isfahan", fa: "گلدشت اصفهان", ar: "گلدشت، أصفهان" }
    },
    {
      slug: "facade-interior-pol-hotel", category: "renovation",
      folder: "assets/projects/renovation/facade-interior-pol-hotel",
      title: { en: "Facade & Interior Renovation", fa: "بازسازی نما و داخلی", ar: "تجديد الواجهة والداخل" },
      place: { en: "Pol Hotel, Isfahan", fa: "هتل پل اصفهان", ar: "فندق بل، أصفهان" }
    },
    {
      slug: "facade-interior-ferdowsi", category: "renovation",
      folder: "assets/projects/renovation/facade-interior-ferdowsi",
      title: { en: "Facade & Interior Renovation", fa: "بازسازی نما و داخلی", ar: "تجديد الواجهة والداخل" },
      place: { en: "Ferdowsi, Isfahan", fa: "فردوسی اصفهان", ar: "فردوسي، أصفهان" }
    },
    {
      slug: "facade-villa-fooladshahr", category: "renovation",
      folder: "assets/projects/renovation/facade-villa-fooladshahr",
      title: { en: "Facade & Villa Renovation", fa: "بازسازی نما و ویلا", ar: "تجديد الواجهة والفيلا" },
      place: { en: "Fooladshahr, Isfahan", fa: "قولادشهر اصفهان", ar: "قولادشهر، أصفهان" }
    },
    {
      slug: "modern-facade-hasht-behesht", category: "renovation",
      folder: "assets/projects/renovation/modern-facade-hasht-behesht",
      title: { en: "Modern Building Facade Renovation", fa: "بازسازی نمای ساختمان مدرن", ar: "تجديد واجهة مبنى حديث" },
      place: { en: "Hasht Behesht, Isfahan", fa: "هشت بهشت اصفهان", ar: "هشت بهشت، أصفهان" }
    },
    {
      slug: "classic-najafabad", category: "facade",
      folder: "assets/projects/facade/classic-najafabad",
      title: { en: "Classic Building Facade", fa: "نمای ساختمان کلاسیک", ar: "واجهة مبنى كلاسيكية" },
      place: { en: "Najafabad, Isfahan", fa: "نجف آباد اصفهان", ar: "نجف آباد، أصفهان" }
    },
    {
      slug: "classic-robat", category: "facade",
      folder: "assets/projects/facade/classic-robat",
      title: { en: "Classic Building Facade", fa: "نمای ساختمان کلاسیک", ar: "واجهة مبنى كلاسيكية" },
      place: { en: "Robat, Isfahan", fa: "رباط اصفهان", ar: "رباط، أصفهان" }
    },
    {
      slug: "classic-orgol", category: "facade",
      folder: "assets/projects/facade/classic-orgol",
      title: { en: "Classic Building Facade", fa: "نمای ساختمان کلاسیک", ar: "واجهة مبنى كلاسيكية" },
      place: { en: "Orgol, Tehran", fa: "ارگل تهران", ar: "أرگل، طهران" }
    },
    {
      slug: "classic-araj", category: "facade",
      folder: "assets/projects/facade/classic-araj",
      title: { en: "Classic Building Facade", fa: "نمای ساختمان کلاسیک", ar: "واجهة مبنى كلاسيكية" },
      place: { en: "Araj, Tehran", fa: "اراجی تهران", ar: "أراجي، طهران" }
    },
    {
      slug: "roman-robat-2", category: "facade",
      folder: "assets/projects/facade/roman-robat-2",
      title: { en: "Roman Building Facade", fa: "نمای ساختمان رومی", ar: "واجهة مبنى رومانية" },
      place: { en: "Robat 2, Isfahan", fa: "رباط دوم اصفهان", ar: "رباط الثاني، أصفهان" }
    },
    {
      slug: "modern-rudaki", category: "facade",
      folder: "assets/projects/facade/modern-rudaki",
      title: { en: "Modern Building Facade", fa: "نمای ساختمان مدرن", ar: "واجهة مبنى حديثة" },
      place: { en: "Rudaki, Isfahan", fa: "رودکی اصفهان", ar: "رودكي، أصفهان" }
    },
    {
      slug: "modern-robat-1", category: "facade",
      folder: "assets/projects/facade/modern-robat-1",
      title: { en: "Modern Building Facade", fa: "نمای ساختمان مدرن", ar: "واجهة مبنى حديثة" },
      place: { en: "Robat 1, Isfahan", fa: "رباط اصفهان ۱", ar: "رباط ۱، أصفهان" }
    },
    {
      slug: "modern-robat", category: "facade",
      folder: "assets/projects/facade/modern-robat",
      title: { en: "Modern Building Facade", fa: "نمای ساختمان مدرن", ar: "واجهة مبنى حديثة" },
      place: { en: "Robat, Isfahan", fa: "رباط اصفهان", ar: "رباط، أصفهان" }
    },
    {
      slug: "modern-khaneh-esfahan", category: "facade",
      folder: "assets/projects/facade/modern-khaneh-esfahan",
      title: { en: "Modern Building Facade", fa: "نمای ساختمان مدرن", ar: "واجهة مبنى حديثة" },
      place: { en: "Khaneh Esfahan", fa: "خانه اصفهان", ar: "خانه أصفهان" }
    },
    {
      slug: "modern-abadan-2", category: "facade",
      folder: "assets/projects/facade/modern-abadan-2",
      title: { en: "Modern Building Facade", fa: "نمای ساختمان مدرن", ar: "واجهة مبنى حديثة" },
      place: { en: "Abadan 2, Isfahan", fa: "آبادان دوم اصفهان", ar: "آبادان الثاني، أصفهان" }
    },
    {
      slug: "modern-hasht-behesht", category: "facade",
      folder: "assets/projects/facade/modern-hasht-behesht",
      title: { en: "Modern Building Facade", fa: "نمای ساختمان مدرن", ar: "واجهة مبنى حديثة" },
      place: { en: "Hasht Behesht, Isfahan", fa: "هشت بهشت اصفهان", ar: "هشت بهشت، أصفهان" }
    },
    {
      slug: "modern-pol-hotel", category: "facade",
      folder: "assets/projects/facade/modern-pol-hotel",
      title: { en: "Modern Building Facade", fa: "نمای ساختمان مدرن", ar: "واجهة مبنى حديثة" },
      place: { en: "Pol Hotel, Isfahan", fa: "هتل پل اصفهان", ar: "فندق بل، أصفهان" }
    },
    {
      slug: "modern-malek-shahr", category: "facade",
      folder: "assets/projects/facade/modern-malek-shahr",
      title: { en: "Modern Building Facade", fa: "نمای ساختمان مدرن", ar: "واجهة مبنى حديثة" },
      place: { en: "Malek Shahr, Isfahan", fa: "ملک شهر اصفهان", ar: "ملك شهر، أصفهان" }
    },
    {
      slug: "modern-kohandezh", category: "facade",
      folder: "assets/projects/facade/modern-kohandezh",
      title: { en: "Modern Building Facade", fa: "نمای ساختمان مدرن", ar: "واجهة مبنى حديثة" },
      place: { en: "Kohandezh, Isfahan", fa: "کهندژ اصفهان", ar: "كهندژ، أصفهان" }
    },
    {
      slug: "modern-sheikh-sadough", category: "facade",
      folder: "assets/projects/facade/modern-sheikh-sadough",
      title: { en: "Modern Building Facade", fa: "نمای ساختمان مدرن", ar: "واجهة مبنى حديثة" },
      place: { en: "Sheikh Sadough North, Isfahan", fa: "شیخ صدوق شمالی اصفهان", ar: "الشيخ صدوق الشمالي، أصفهان" }
    },
    {
      slug: "modern-haft-dast", category: "facade",
      folder: "assets/projects/facade/modern-haft-dast",
      title: { en: "Modern Building Facade", fa: "نمای ساختمان مدرن", ar: "واجهة مبنى حديثة" },
      place: { en: "Haft Dast, Isfahan", fa: "هفت دست اصفهان", ar: "هفت دست، أصفهان" }
    }
  ]
};
