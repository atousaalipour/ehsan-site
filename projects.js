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
      slug: 'moshtagh-2',
      category: 'renovation',
      folder: 'assets/projects/renovation/moshtagh-2',
      title: { en: 'Residential Property Supervision', fa: 'نظارت ملک مسکونی', ar: 'الإشراف على عقار سكني' },
      place: { en: 'Moshtagh 2nd Street, Isfahan', fa: 'مشتاق دوم، اصفهان', ar: 'شارع مشتاق الثاني، أصفهان' }
    },
    {
      slug: 'keshvari',
      category: 'renovation',
      folder: 'assets/projects/renovation/keshvari',
      title: { en: 'Residential Complex Supervision', fa: 'نظارت مجموعه مسکونی', ar: 'الإشراف على مجمع سكني' },
      place: { en: 'Keshvari, Isfahan', fa: 'کشوری، اصفهان', ar: 'كشوري، أصفهان' }
    },
    {
      slug: 'mulla-sadra',
      category: 'renovation',
      folder: 'assets/projects/renovation/mulla-sadra',
      title: { en: 'Facade & Interior Supervision', fa: 'نظارت نما و داخلی', ar: 'الإشراف على الواجهة والتصميم الداخلي' },
      place: { en: 'Mulla Sadra, Isfahan', fa: 'ملاصدرا، اصفهان', ar: 'ملاصدرا، أصفهان' }
    }
  ]
};
