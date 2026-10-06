document.getElementById("year").textContent = new Date().getFullYear();

const image = (src, caption) => ({ type: "image", src, caption });
const video = (src, caption) => ({ type: "video", src, caption });

const collections = [
  {
    id: "warcraft-rts", kicker: "Рабочий прототип / RTS",
    title: "RTS в духе Warcraft",
    media: [
      image("GameScreen/rts/iZq5d1mLn6mK9U1BRP0SiHZRSN3ohPdZv8oX7kGUM_VbDcVy3mfJmMalH2g2H44VvmSUBKwOsOAN44sfqMpcpq0lljyXow.jpg", "Исследование территории и Fog of War")
    ]
  },
  {
    id: "colony-builder", kicker: "Экономическая стратегия",
    title: "Colony Builder",
    media: [
      image("GameScreen/симулятор колонии.jpg", "Развитие поселения и производство"),
      image("GameScreen/небольшой симулятор колонии для рабочего стола.jpg", "Поселение, жители и ресурсы")
    ]
  },
  {
    id: "blacksmith", kicker: "Simulation / idle",
    title: "Blacksmith Simulator",
    media: [
      image("GameScreen/кликер про кузнеца.jpg", "Clicker / management версия"),
      image("GameScreen/Незавершенный кликер про кузнеца на юнити.jpg", "Рабочий прототип в Unity"),
      video("видео/кликер про кузнеца для яндекс игр/123123.mp4", "Игровой процесс кузницы")
    ]
  },
  {
    id: "city-clicker", kicker: "Проект для Яндекс Игр",
    title: "ГОРОД / City Clicker",
    media: [
      video("видео/Небольшая клиткер игра про город кликер и развитие города/YouCityRefactoring_SampleScene_1_WebGL_Unity_2021_3_8f1_Personal.mp4", "City Clicker — WebGL"),
      video("видео/Небольшая клиткер игра про город кликер и развитие города/й.mp4", "Развитие города")
    ]
  },
  {
    id: "network-cars", kicker: "Multiplayer / procedural generation",
    title: "skill & cars",
    media: [
      video("видео/игра про машинки для стим/Movie_008.mp4", "Автомобильная физика и игровой процесс"),
      video("видео/игра про машинки для стим/декали.mp4", "Система декалей"),
      video("видео/игра про машинки для стим/парралакс эффекть строений.mp4", "Параллакс окружения"),
      video("видео/игра про машинки для стим/сложная трассса плюс разные препядствия.mp4", "Трасса и препятствия"),
      video("видео/игра про машинки для стим/тестовая трасса + настройки машины.mp4", "Трасса и настройки автомобиля"),
      video("видео/игра про машинки для стим/тестовая трасса и тест систем очкеов лидерства и т.д.mp4", "Игровой цикл и трасса")
    ]
  },
  {
    id: "valheim", kicker: "Моддинг и игровые системы",
    title: "Valheim — моддинг и игровые системы",
    media: [
      video("видео вальхейм моды/Valheim/Valheim 2026.08.25 - 19.26.16.02.mp4", "Модификации и runtime-системы Valheim №1"),
      video("видео вальхейм моды/Valheim/Valheim 2026.08.25 - 19.27.28.03.mp4", "Модификации и runtime-системы Valheim №2"),
      video("видео вальхейм моды/Valheim/Valheim 2026.08.25 - 19.58.20.05.mp4", "Модификации и runtime-системы Valheim №3"),
      video("видео вальхейм моды/Valheim/Valheim 2026.08.25 - 20.35.27.06.mp4", "Модификации и runtime-системы Valheim №4"),
      video("видео вальхейм моды/Valheim/Valheim 2026.08.26 - 01.44.07.21.mp4", "Модификации и runtime-системы Valheim №5"),
      video("видео вальхейм моды/Valheim/Valheim 2026.08.26 - 01.48.53.22.mp4", "Модификации и runtime-системы Valheim №6"),
      video("видео вальхейм моды/Valheim/valheim-20260821-10332402_huikzNAL.mp4", "Модификации и runtime-системы Valheim №7")
    ]
  },
  {
    id: "factory", kicker: "Factory / automation",
    title: "Factory / Automation",
    media: [
      video("видео/тест произвордительности и конвееров в юнити/Desktop 2024.04.01 - 11.27.48.01.mp4", "Конвейеры и автоматическая транспортировка"),
      video("видео/тест произвордительности и конвееров в юнити/Desktop 2024.05.15 - 20.28.05.01.mp4", "Производительность автоматизированной системы")
    ]
  }
];

const prototypes = [
  {
    id: "tamagotchi", category: "desktop", featured: true, kicker: "Игра для рабочего стола",
    title: "BITBUD — настольный компаньон",
    description: "Полноценный тамагочи с состояниями питомца, мини-играми, капсульным автоматом, редкостями и альбомом друзей.",
    tags: ["Unity", "Desktop", "Коллекция", "UI"],
    media: [
      image("GameScreen/тамагочи для рабочего стола.jpg", "Главный экран и состояние питомца"),
      image("GameScreen/тамагочи для рабочего стола1.jpg", "Капсульный автомат и система редкости"),
      image("GameScreen/тамагочи для рабочего стола3.jpg", "Мини-игра «Монетный дождь»"),
      image("GameScreen/тамагочи для рабочего стола4.jpg", "Альбом открытых персонажей")
    ]
  },
  {
    id: "roguelike", category: "game", featured: true, kicker: "Авторская игра",
    title: "Рогалик от первого лица",
    description: "Классы, экипировка, процедурные подземелья, пошаговый бой, журнал событий и несколько визуальных тем.",
    tags: ["Unity", "Roguelike", "Процедурная генерация"],
    media: [
      image("GameScreen/Roguelike.jpg", "Выбор класса персонажа"),
      image("GameScreen/Roguelike.jpg.jpg.jpg", "Бой и исследование подземелья"),
      image("GameScreen/photo_2026-03-13_16-36-03.jpg", "Сражение с группой противников"),
      image("GameScreen/рогалик.jpg", "Исследование подземелья"),
      image("GameScreen/рогалик1.jpg", "Интерфейс и игровой мир"),
      image("GameScreen/рогалик2.jpg", "Ещё одна сцена забега")
    ]
  },
  {
    id: "survival-td", category: "systems", kicker: "Игровой прототип",
    title: "Выживание + tower defense",
    description: "Добыча ресурсов, защитные зоны, башни и противники с дальними атаками — несколько систем в одном прототипе.",
    tags: ["Unity", "Tower Defense", "Survival", "AI"],
    media: [
      video("видео/прототип выживача + товер дефендс/тест башни и зоны.mp4", "Башня и зона защиты"),
      video("видео/прототип выживача + товер дефендс/тест добычи ерсов.mp4", "Добыча ресурсов"),
      video("видео/прототип выживача + товер дефендс/тест моба который метает снаряды.mp4", "Противник с дальними атаками")
    ]
  },
  {
    id: "desktop-worlds", category: "desktop", kicker: "Серия экспериментов",
    title: "Игры поверх рабочего стола",
    description: "Поезда, питомцы, воздушные сражения, ворующие курсор крысы и компактный рогалик, живущие рядом с обычными окнами.",
    tags: ["Unity", "Desktop", "Pixel Art"],
    media: [
      image("GameScreen/Простая игра про поезда на рабочйи стол, нужно следить за тем как они ездят, прокачивать их доход, расчищать путь и т.д.jpg", "Поезда, доход и расчистка пути"),
      image("GameScreen/небольшой настольный компаньен собака. Нужно кормить ест спит.jpg", "Настольный компаньон-собака"),
      image("GameScreen/DesctopSlime.jpg", "Разведение и продажа слаймов"),
      image("GameScreen/bandit для рабочего стола).jpg", "Игровой автомат поверх рабочего стола"),
      image("GameScreen/баталии на рабочем столе.jpg", "Большие баталии на рабочем столе"),
      image("GameScreen/экранные крысы воришки курсора.jpg", "Крысы — воришки курсора"),
      image("GameScreen/мини рогалик для рабочего стола.jpg", "Компактный desktop-рогалик")
    ]
  },
  {
    id: "skyblock", category: "game", kicker: "Выживание",
    title: "Крошечный скайблок",
    description: "Изометрический остров из блоков: добыча, задания, крафт, развитие генератора и просмотр слоёв.",
    tags: ["Unity", "Воксели", "Крафт"],
    media: [image("GameScreen/мини игра про выживание на скайблоке.jpg", "Первый день на крошечном острове")]
  },
  {
    id: "shop", category: "game", kicker: "Экономический кликер",
    title: "Лавка у Фонаря",
    description: "Ассортимент, закупки, продажи, репутация и постепенное развитие собственной лавки.",
    tags: ["Unity", "Экономика", "Pixel Art"],
    media: [image("GameScreen/кликер симулятор лавки.jpg", "Первый день работы лавки")]
  },
  {
    id: "room", category: "game", kicker: "3D мини-игра",
    title: "Наведи порядок",
    description: "Физическая мини-игра про уборку комнаты: перенос предметов, задачи и понятная визуальная обратная связь.",
    tags: ["Unity", "3D", "Физика"],
    media: [image("GameScreen/мини игра про уборку комнаты.jpg", "Комната и список задач")]
  },
  {
    id: "golf", category: "game", kicker: "Яндекс Игры",
    title: "Лагуна Гольф",
    description: "Двадцать лунок, счёт ударов и простое управление в яркой расслабляющей мини-игре.",
    tags: ["Unity", "WebGL", "Аркада"],
    media: [image("GameScreen/гольф для яндекс игр.jpg", "Первая лунка")]
  },
  {
    id: "reading", category: "game", kicker: "Обучающая игра",
    title: "Учим читать",
    description: "Игра для сына: буквы, слоги, слова, звук и награды в понятном детском интерфейсе.",
    tags: ["Unity", "Обучение", "UI"],
    media: [image("GameScreen/Читайка для обучения чтению моего сына.jpg", "Упражнение на поиск буквы")]
  },
  {
    id: "aim", category: "game", kicker: "Аркада",
    title: "Тренажёр меткости",
    description: "Тир с движущимися целями, сериями попаданий, очками, точностью и ограничением времени.",
    tags: ["Unity", "Аркада", "UI"],
    media: [image("GameScreen/AimTrener.jpg", "Игровая сессия тренажёра")]
  },
  {
    id: "retro-shooter", category: "game", kicker: "Технический прототип",
    title: "Ретро-шутер",
    description: "Псевдотрёхмерный шутер: лабиринт, противники, оружие, мини-карта и подсчёт очков.",
    tags: ["Unity", "Шутер", "Прототип"],
    media: [image("GameScreen/parodydoom.jpg", "Игровой экран ретро-шутера")]
  }
];

const labs = [
  {
    id: "generation", title: "Процедурная генерация", description: "Марширующие кубы, парящие острова с VFX-травой и коллапс волновой функции.",
    media: [
      video("видео/Воксели - марширующие кубы/Marching_Cubes_master_SampleScene_Windows,_Mac,_Linux_Unity_2021.mp4", "Воксели и marching cubes"),
      video("видео/генерация парязщих островов + проверка травы через vfx/MedivalCrafter_Test_Windows,_Mac,_Linux_Unity_2021_3_8f1_Personal.mp4", "Парящие острова и проверка травы через VFX"),
      video("видео/Коллапс волновой функции/KOG_SampleScene_Windows,_Mac,_Linux_Unity_2022_3_3f1_DX11_2023_09.mp4", "Генерация через коллапс волновой функции")
    ]
  },
  {
    id: "building", title: "Системы строительства", description: "Строительство в духе Rust и отдельный тест градостроительной системы.",
    media: [
      video("видео/система строительства как в раст/MedivalCrafter_GroundTest_Windows,_Mac,_Linux_Unity_2022_3_3f1_DX11.mp4", "Размещение построек и поверхность"),
      video("видео/тест градостроительной системы/EasYBuilding_SampleScene_Windows,_Mac,_Linux_Unity_2022_3_3f1_DX11.mp4", "Градостроительная система")
    ]
  },
  {
    id: "multiplayer-ai", title: "Сеть, AI и множество юнитов", description: "Мультиплеерный платформер и арена с поиском пути, толпой юнитов и цветовым шейдером.",
    media: [
      video("видео/мультиплеер копия айсклимбер/Desktop 2024.01.22 - 17.26.11.01.mp4", "Мультиплеер в духе Ice Climber"),
      video("видео/прототип аверны, поиск пути, множество юнитов шейдер заменяющий только определенные цвета/Desktop 2024.05.13 - 19.15.27.01.mp4", "Арена, поиск пути и множество юнитов")
    ]
  },
  {
    id: "small-experiments", title: "Небольшие игровые эксперименты", description: "Быстрые проверки идей — от погодного мода и настолки до ритм-шарика и наклона камеры.",
    media: [
      video("видео/майнкрафт джампер)/My_project_2_Game_Windows,_Mac,_Linux_Unity_2021_3_8f1_Personal.mp4", "Minecraft-джампер"),
      video("видео/мод для игры rusty че-то там добавляет погодные условия/rust.mp4", "Погодные условия в Rusty"),
      video("видео/нашествие уток балование с виндовс форм/Desktop 2024.06.21 - 14.20.48.01.mp4", "Нашествие уток и Windows Forms"),
      video("видео/перенос настолки на пк/й.mp4", "Перенос настольной игры на ПК"),
      video("видео/симулятор камня)/Rock_Симулятор_—_играть_онлайн_бесплатно_на_сервисе_Яндекс Игры.mp4", "Симулятор камня для Яндекс Игр"),
      video("видео/тестовый проект про шарик который играет песни)/Desktop 2023.12.08 - 14.58.54.06.mp4", "Шарик, который играет песни"),
      video("видео/эффект наклона камеры в 2д проекте/Movie_005.mp4", "Наклон камеры в 2D-проекте")
    ]
  },
  {
    id: "dev-tools", title: "Инструменты разработчика", description: "Собственный набор инструментов для пиксельной графики и плагин-помощник для Visual Studio.",
    media: [
      image("GameScreen/photo_2026-01-15_16-59-10.jpg", "GameDev Tools: спрайты, палитры, пиксель-арт и звук"),
      image("GameScreen/плагин с аниме тян в вижуал студио.jpg", "Плагин-компаньон для Visual Studio")
    ]
  }
];

const allCollections = [...collections, ...prototypes, ...labs.map(item => ({ ...item, kicker: "Техническая лаборатория" }))];
const sliderIndexes = {};

const sites = [
  { title: "Не заберут", image: "assets/sites/ne-zaberut.png", type: "Юридические услуги", description: "Развитие WordPress-сайта: формы, интеграция с amoCRM, PHP-обработчики, SEO, структура контента и технические доработки." },
  { title: "Военник.ру", image: "assets/sites/voennikru.png", type: "Юридические услуги", description: "Поддержка большого информационного сайта центра помощи призывникам: посадочные страницы, формы и контентные разделы." },
  { title: "Magazinplitki.by", image: "assets/sites/magazinplitki.png", type: "Интернет-магазин", description: "Каталог керамической плитки и строительных материалов с товарными разделами, поиском, акциями и сервисными страницами." },
  { title: "Завод Прикамье", image: "assets/sites/zavod-prikamie.png", type: "Промышленный сайт", description: "Производитель светодиодного освещения: визуальный каталог, отраслевые решения, услуги, проекты и заявки." },
  { title: "Альянс 56", image: "assets/sites/alianz56.png", type: "Корпоративный сайт", description: "Сайт группы компаний в сфере сотового ритейла, коммерческой недвижимости и карьеры." },
  { title: "Estante", image: "assets/sites/estante.png", type: "Интернет-магазин", description: "Магазин обуви и аксессуаров: визуальная витрина, каталог, размеры, доставка, оплата и возврат." },
  { title: "Energy of Delusion", image: "assets/sites/energyofdelusion.png", type: "Fashion / аренда", description: "Англоязычный каталог дизайнерской одежды и аксессуаров для аренды на Бали." },
  { title: "Ёбисан", image: "assets/sites/ebisan.png", type: "Доставка еды", description: "Большой каталог доставки: категории, поиск, акции, карточки блюд, корзина и пользовательские сценарии заказа." }
];

function posterFor(src) {
  return window.VIDEO_POSTERS?.[src] || "";
}

function mediaPreview(item, title) {
  if (item.type === "image") return `<img src="${item.src}" alt="${title}" loading="lazy">`;
  return `<img src="${posterFor(item.src)}" alt="Превью видео: ${title}" loading="lazy"><span class="play-mark">▶</span>`;
}

const prototypeCatalog = document.getElementById("prototype-catalog");
prototypeCatalog.innerHTML = prototypes.map((project) => `
  <article class="collection-card reveal ${project.featured ? "featured" : ""}" data-category="${project.category}">
    <div class="collection-cover media-slider" data-slider="${project.id}">
      <button class="slide-main media-open" data-collection="${project.id}" data-index="0"><span class="slider-visual">${mediaPreview(project.media[0], project.title)}</span></button>
      ${project.media.length > 1 ? `<button class="card-slide prev" data-direction="-1" aria-label="Предыдущий материал">←</button><button class="card-slide next" data-direction="1" aria-label="Следующий материал">→</button>` : ""}
      <span class="collection-count"><b>1</b> / ${project.media.length}</span>
      <span class="slide-caption">${project.media[0].caption}</span>
    </div>
    <div class="collection-body">
      <span class="collection-kicker">${project.kicker}</span>
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="tags">${project.tags.map(tag => `<span>${tag}</span>`).join("")}</div>
      <button class="open-gallery media-open" data-collection="${project.id}">Открыть всю галерею ↗</button>
    </div>
  </article>
`).join("");

const labCatalog = document.getElementById("lab-catalog");
labCatalog.innerHTML = labs.map((lab, index) => `
  <article class="lab-case reveal">
    <div class="lab-media media-slider" data-slider="${lab.id}">
      <button class="slide-main media-open" data-collection="${lab.id}" data-index="0"><span class="slider-visual">${mediaPreview(lab.media[0], lab.title)}</span></button>
      ${lab.media.length > 1 ? `<button class="card-slide prev" data-direction="-1" aria-label="Предыдущее видео">←</button><button class="card-slide next" data-direction="1" aria-label="Следующее видео">→</button>` : ""}
      <span class="collection-count"><b>1</b> / ${lab.media.length}</span>
      <span class="slide-caption">${lab.media[0].caption}</span>
    </div>
    <div class="lab-copy"><span>${String(index + 1).padStart(2, "0")} / ${lab.media.length} материалов</span><h3>${lab.title}</h3><p>${lab.description}</p><button class="open-gallery media-open" data-collection="${lab.id}">Смотреть все материалы ↗</button></div>
  </article>
`).join("");

const siteCatalog = document.getElementById("site-catalog");
siteCatalog.innerHTML = sites.map((site, index) => `
  <article class="site-card reveal ${index === 0 || index === 7 ? "site-wide" : ""}">
    <div class="site-shot"><img src="${site.image}" alt="${site.title}" loading="lazy"></div>
    <div class="site-copy"><span>${String(index + 1).padStart(2, "0")} / ${site.type}</span><h3>${site.title}</h3><p>${site.description}</p></div>
  </article>
`).join("");

document.querySelector(".showreel video").poster = posterFor("video.mp4");

document.addEventListener("click", (event) => {
  const control = event.target.closest(".card-slide");
  if (!control) return;
  const slider = control.closest(".media-slider");
  const id = slider.dataset.slider;
  const collection = allCollections.find(item => item.id === id);
  if (!collection) return;
  const current = sliderIndexes[id] || 0;
  const next = (current + Number(control.dataset.direction) + collection.media.length) % collection.media.length;
  sliderIndexes[id] = next;
  const item = collection.media[next];
  slider.querySelector(".slider-visual").innerHTML = mediaPreview(item, collection.title);
  slider.querySelector(".slide-main").dataset.index = next;
  slider.querySelector(".collection-count b").textContent = next + 1;
  slider.querySelector(".slide-caption").textContent = item.caption;
});

document.getElementById("project-filters").addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;
  document.querySelectorAll("#project-filters button").forEach(item => item.classList.toggle("active", item === button));
  document.querySelectorAll(".primary-project").forEach(card => {
    card.hidden = button.dataset.filter !== "all" && card.dataset.category !== button.dataset.filter;
  });
});

const modal = document.getElementById("media-modal");
const modalStage = document.getElementById("modal-stage");
const modalTitle = document.getElementById("modal-title");
const modalType = document.getElementById("modal-type");
const modalCaption = document.getElementById("modal-caption");
const modalCount = document.getElementById("modal-count");
const modalThumbs = document.getElementById("modal-thumbs");
let activeCollection = null;
let activeMediaIndex = 0;

function renderModalMedia() {
  const item = activeCollection.media[activeMediaIndex];
  modalStage.innerHTML = item.type === "image"
    ? `<img src="${item.src}" alt="${item.caption}">`
    : `<video src="${item.src}" poster="${posterFor(item.src)}" controls autoplay playsinline></video>`;
  modalCaption.textContent = item.caption;
  modalCount.textContent = `${activeMediaIndex + 1} / ${activeCollection.media.length}`;
  modalThumbs.innerHTML = activeCollection.media.map((media, index) => media.type === "image"
    ? `<button class="modal-thumb ${index === activeMediaIndex ? "active" : ""}" data-index="${index}"><img src="${media.src}" alt=""></button>`
    : `<button class="modal-thumb video-thumb ${index === activeMediaIndex ? "active" : ""}" data-index="${index}"><img src="${posterFor(media.src)}" alt=""><span>▶</span></button>`
  ).join("");
}

function openModal(id, index = 0) {
  activeCollection = allCollections.find(item => item.id === id);
  if (!activeCollection) return;
  activeMediaIndex = index;
  modalTitle.textContent = activeCollection.title;
  modalType.textContent = activeCollection.kicker || "Галерея проекта";
  renderModalMedia();
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  modalStage.innerHTML = "";
  document.body.style.overflow = "";
}

function moveModal(direction) {
  if (!activeCollection) return;
  activeMediaIndex = (activeMediaIndex + direction + activeCollection.media.length) % activeCollection.media.length;
  renderModalMedia();
}

document.addEventListener("click", (event) => {
  const opener = event.target.closest(".media-open");
  if (opener) openModal(opener.dataset.collection, Number(opener.dataset.index || 0));
});
document.getElementById("modal-close").addEventListener("click", closeModal);
document.getElementById("modal-prev").addEventListener("click", () => moveModal(-1));
document.getElementById("modal-next").addEventListener("click", () => moveModal(1));
modalThumbs.addEventListener("click", (event) => {
  const thumb = event.target.closest("[data-index]");
  if (!thumb) return;
  activeMediaIndex = Number(thumb.dataset.index);
  renderModalMedia();
});
modal.addEventListener("click", (event) => {
  if (event.target === modal) closeModal();
});
document.addEventListener("keydown", (event) => {
  if (!modal.classList.contains("open")) return;
  if (event.key === "Escape") closeModal();
  if (event.key === "ArrowLeft") moveModal(-1);
  if (event.key === "ArrowRight") moveModal(1);
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.06, rootMargin: "0px 0px -35px" });
document.querySelectorAll(".reveal").forEach(item => revealObserver.observe(item));
