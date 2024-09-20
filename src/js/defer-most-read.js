const mostReads = [
  {
    number: "1",
    title: "تهديد مستقبل سعود عبدالحميد في روما .. إقالة دي روسي رسميا",
    href: "https://www.so3ody.com/news/176296/تهديد-مستقبل-سعود-عبدالحميد-في-روما-إقالة-دي-روسي-رسميا/كرة-سعودية",
    tag: "كرة سعودية",
  },
  {
    number: "2",
    title: "أول قرار من بيولي بعد توليه تدريب النصر.. قبل الإعلان الرسمي",
    href: "https://www.so3ody.com/news/176296/تهديد-مستقبل-سعود-عبدالحميد-في-روما-إقالة-دي-روسي-رسميا/كرة-سعودية",
    tag: "كرة سعودية",
  },
  {
    number: "3",
    title: 'نجم النصر يفاجئ كاسترو .. "تصرف مثير للجدل" بعد إعلان رحيله',
    href: "https://www.so3ody.com/news/176296/تهديد-مستقبل-سعود-عبدالحميد-في-روما-إقالة-دي-روسي-رسميا/كرة-سعودية",
    tag: "كرة سعودية",
  },
  {
    number: "4",
    title: "أول قرار من بيولي بعد توليه تدريب النصر.. قبل الإعلان الرسمي",
    href: "https://www.so3ody.com/news/176296/تهديد-مستقبل-سعود-عبدالحميد-في-روما-إقالة-دي-روسي-رسميا/كرة-سعودية",
    tag: "كرة سعودية",
  },
  {
    number: "5",
    title: 'نجم النصر يفاجئ كاسترو .. "تصرف مثير للجدل" بعد إعلان رحيله',
    href: "https://www.so3ody.com/news/176296/تهديد-مستقبل-سعود-عبدالحميد-في-روما-إقالة-دي-روسي-رسميا/كرة-سعودية",
    tag: "كرة سعودية",
  },
];

const readsWrapper = document.querySelector(".most-read__pieces");

mostReads.forEach((n) => {
  const newPiece = generateReads(n.number, n.title, n.href, n.tag);

  readsWrapper.appendChild(newPiece);
});

function generateReads(number, title, href, tag) {
  const newsTemplate = `<li class="most-read__item">
              <a href="${href}" title="${title}">
                <div class="most-read__item-text">
                  <span class="most-read__item-number">${number}</span>
                  <span class="most-read__item-title">${title}</span>
                </div>
                <div class="most-read__item-info">
                  <svg
                    id="Layer_1"
                    xmlns="https://www.w3.org/2000/svg"
                    xmlns:xlink="https://www.w3.org/1999/xlink"
                    version="1.1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 512 512"
                    style="enable-background: new 0 0 512 512"
                    xml:space="preserve"
                    height="8"
                    width="8"
                  >
                    <g>
                      <g>
                        <path
                          d="M256,0C115.39,0,0,115.39,0,256s115.39,256,256,256s256-115.39,256-256S396.61,0,256,0z"
                        ></path>
                      </g>
                    </g>
                  </svg>
                  <p class="most-read__item-tag">${tag}</p>
                </div>
              </a>
            </li>`;

  const parser = new DOMParser();
  const doc = parser.parseFromString(newsTemplate, "text/html");
  return doc.body.firstChild;
}
