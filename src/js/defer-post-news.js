const news = [
  {
    title:
      '"المدرب الرابع لرونالدو في النصر" .. ماذا قالت صحف العالم عن بيولي وإقالة كاسترو',
    href: "https://www.so3ody.com/news/176349/عاجل-تطور-حالة-فهد-المولد-وحقيقة-خدوش-الوجه-موعد-وصوله-إلى-الرياض/كرة-سعودية",
    src: "https://cdn.so3ody.com/images/450x250/2024/%D9%83%D8%B1%D9%8A%D8%B3%D8%AA%D9%8A%D8%A7%D9%86%D9%88-%D8%B1%D9%88%D9%86%D8%A7%D9%84%D8%AF%D9%88-%D8%A7%D9%84%D9%86%D8%B5%D8%B11712921888.webp",
    imgAlt: "رونالدو",
    tag: "انفوجراف",
    time: "2024-09-19T12:00:00.000Z",
    views: "890",
  },
  {
    title: '"المدير الفني" .. ماكسيمان يكشف سر رحيله عن الأهلي',
    href: "https://www.so3ody.com/%D9%83%D8%B1%D8%A9-%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9",
    src: "https://cdn.so3ody.com/images/450x250/2024/ماكسيمان1715026708.jpg",
    imgAlt: "ماكسيمان",
    tag: "كرة سعودية",
    time: "2024-09-18T20:00:00.000Z",
    views: "237",
  },
  {
    title:
      "عاجل | تطور حالة فهد المولد وحقيقة خدوش الوجه .. موعد وصوله إلى الرياض",
    href: "https://www.so3ody.com/news/176349/%D8%B9%D8%A7%D8%AC%D9%84-%D8%AA%D8%B7%D9%88%D8%B1-%D8%AD%D8%A7%D9%84%D8%A9-%D9%81%D9%87%D8%AF-%D8%A7%D9%84%D9%85%D9%88%D9%84%D8%AF-%D9%88%D8%AD%D9%82%D9%8A%D9%82%D8%A9-%D8%AE%D8%AF%D9%88%D8%B4-%D8%A7%D9%84%D9%88%D8%AC%D9%87-%D9%85%D9%88%D8%B9%D8%AF-%D9%88%D8%B5%D9%88%D9%84%D9%87-%D8%A5%D9%84%D9%89-%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6/%D9%83%D8%B1%D8%A9-%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9",
    src: "https://cdn.so3ody.com/images/450x250/2024/فهد-المولد1726589472.webp",
    imgAlt: "فهد المولد",
    tag: "كرة سعودية",
    time: "2024-09-15T11:42:00.000Z",
    views: "107",
  },
  {
    title: "1",
    href: "https://www.so3ody.com/news/176349/عاجل-تطور-حالة-فهد-المولد-وحقيقة-خدوش-الوجه-موعد-وصوله-إلى-الرياض/كرة-سعودية",
    src: "https://cdn.so3ody.com/images/450x250/2024/%D9%83%D8%B1%D9%8A%D8%B3%D8%AA%D9%8A%D8%A7%D9%86%D9%88-%D8%B1%D9%88%D9%86%D8%A7%D9%84%D8%AF%D9%88-%D8%A7%D9%84%D9%86%D8%B5%D8%B11712921888.webp",
    imgAlt: "رونالدو",
    tag: "انفوجراف",
    time: "2024-09-19T12:00:00.000Z",
    views: "890",
  },
  {
    title: "2",
    href: "https://www.so3ody.com/%D9%83%D8%B1%D8%A9-%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9",
    src: "https://cdn.so3ody.com/images/450x250/2024/ماكسيمان1715026708.jpg",
    imgAlt: "ماكسيمان",
    tag: "كرة سعودية",
    time: "2024-09-18T20:00:00.000Z",
    views: "237",
  },
  {
    title: "3",
    href: "https://www.so3ody.com/news/176349/%D8%B9%D8%A7%D8%AC%D9%84-%D8%AA%D8%B7%D9%88%D8%B1-%D8%AD%D8%A7%D9%84%D8%A9-%D9%81%D9%87%D8%AF-%D8%A7%D9%84%D9%85%D9%88%D9%84%D8%AF-%D9%88%D8%AD%D9%82%D9%8A%D9%82%D8%A9-%D8%AE%D8%AF%D9%88%D8%B4-%D8%A7%D9%84%D9%88%D8%AC%D9%87-%D9%85%D9%88%D8%B9%D8%AF-%D9%88%D8%B5%D9%88%D9%84%D9%87-%D8%A5%D9%84%D9%89-%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6/%D9%83%D8%B1%D8%A9-%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9",
    src: "https://cdn.so3ody.com/images/450x250/2024/فهد-المولد1726589472.webp",
    imgAlt: "فهد المولد",
    tag: "كرة سعودية",
    time: "2024-09-19T11:42:00.000Z",
    views: "107",
  },
  {
    title: "4",
    href: "https://www.so3ody.com/news/176349/عاجل-تطور-حالة-فهد-المولد-وحقيقة-خدوش-الوجه-موعد-وصوله-إلى-الرياض/كرة-سعودية",
    src: "https://cdn.so3ody.com/images/450x250/2024/%D9%83%D8%B1%D9%8A%D8%B3%D8%AA%D9%8A%D8%A7%D9%86%D9%88-%D8%B1%D9%88%D9%86%D8%A7%D9%84%D8%AF%D9%88-%D8%A7%D9%84%D9%86%D8%B5%D8%B11712921888.webp",
    imgAlt: "رونالدو",
    tag: "انفوجراف",
    time: "2024-09-19T12:00:00.000Z",
    views: "890",
  },
  {
    title: "5",
    href: "https://www.so3ody.com/%D9%83%D8%B1%D8%A9-%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9",
    src: "https://cdn.so3ody.com/images/450x250/2024/ماكسيمان1715026708.jpg",
    imgAlt: "ماكسيمان",
    tag: "كرة سعودية",
    time: "2024-09-18T20:00:00.000Z",
    views: "237",
  },
  {
    title: "6",
    href: "https://www.so3ody.com/news/176349/%D8%B9%D8%A7%D8%AC%D9%84-%D8%AA%D8%B7%D9%88%D8%B1-%D8%AD%D8%A7%D9%84%D8%A9-%D9%81%D9%87%D8%AF-%D8%A7%D9%84%D9%85%D9%88%D9%84%D8%AF-%D9%88%D8%AD%D9%82%D9%8A%D9%82%D8%A9-%D8%AE%D8%AF%D9%88%D8%B4-%D8%A7%D9%84%D9%88%D8%AC%D9%87-%D9%85%D9%88%D8%B9%D8%AF-%D9%88%D8%B5%D9%88%D9%84%D9%87-%D8%A5%D9%84%D9%89-%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6/%D9%83%D8%B1%D8%A9-%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9",
    src: "https://cdn.so3ody.com/images/450x250/2024/فهد-المولد1726589472.webp",
    imgAlt: "فهد المولد",
    tag: "كرة سعودية",
    time: "2024-09-15T11:42:00.000Z",
    views: "107",
  },
  {
    title: "7",
    href: "https://www.so3ody.com/news/176349/عاجل-تطور-حالة-فهد-المولد-وحقيقة-خدوش-الوجه-موعد-وصوله-إلى-الرياض/كرة-سعودية",
    src: "https://cdn.so3ody.com/images/450x250/2024/%D9%83%D8%B1%D9%8A%D8%B3%D8%AA%D9%8A%D8%A7%D9%86%D9%88-%D8%B1%D9%88%D9%86%D8%A7%D9%84%D8%AF%D9%88-%D8%A7%D9%84%D9%86%D8%B5%D8%B11712921888.webp",
    imgAlt: "رونالدو",
    tag: "انفوجراف",
    time: "2024-09-19T12:00:00.000Z",
    views: "890",
  },
  {
    title: "8",
    href: "https://www.so3ody.com/%D9%83%D8%B1%D8%A9-%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9",
    src: "https://cdn.so3ody.com/images/450x250/2024/ماكسيمان1715026708.jpg",
    imgAlt: "ماكسيمان",
    tag: "كرة سعودية",
    time: "2024-09-18T20:00:00.000Z",
    views: "237",
  },
  {
    title: "9",
    href: "https://www.so3ody.com/news/176349/%D8%B9%D8%A7%D8%AC%D9%84-%D8%AA%D8%B7%D9%88%D8%B1-%D8%AD%D8%A7%D9%84%D8%A9-%D9%81%D9%87%D8%AF-%D8%A7%D9%84%D9%85%D9%88%D9%84%D8%AF-%D9%88%D8%AD%D9%82%D9%8A%D9%82%D8%A9-%D8%AE%D8%AF%D9%88%D8%B4-%D8%A7%D9%84%D9%88%D8%AC%D9%87-%D9%85%D9%88%D8%B9%D8%AF-%D9%88%D8%B5%D9%88%D9%84%D9%87-%D8%A5%D9%84%D9%89-%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6/%D9%83%D8%B1%D8%A9-%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9",
    src: "https://cdn.so3ody.com/images/450x250/2024/فهد-المولد1726589472.webp",
    imgAlt: "فهد المولد",
    tag: "كرة سعودية",
    time: "2024-09-19T11:42:00.000Z",
    views: "107",
  },
  {
    title: "10",
    href: "https://www.so3ody.com/news/176349/عاجل-تطور-حالة-فهد-المولد-وحقيقة-خدوش-الوجه-موعد-وصوله-إلى-الرياض/كرة-سعودية",
    src: "https://cdn.so3ody.com/images/450x250/2024/%D9%83%D8%B1%D9%8A%D8%B3%D8%AA%D9%8A%D8%A7%D9%86%D9%88-%D8%B1%D9%88%D9%86%D8%A7%D9%84%D8%AF%D9%88-%D8%A7%D9%84%D9%86%D8%B5%D8%B11712921888.webp",
    imgAlt: "رونالدو",
    tag: "انفوجراف",
    time: "2024-09-19T12:00:00.000Z",
    views: "890",
  },
  {
    title: "11",
    href: "https://www.so3ody.com/%D9%83%D8%B1%D8%A9-%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9",
    src: "https://cdn.so3ody.com/images/450x250/2024/ماكسيمان1715026708.jpg",
    imgAlt: "ماكسيمان",
    tag: "كرة سعودية",
    time: "2024-09-18T20:00:00.000Z",
    views: "237",
  },
  {
    title: "12",
    href: "https://www.so3ody.com/news/176349/%D8%B9%D8%A7%D8%AC%D9%84-%D8%AA%D8%B7%D9%88%D8%B1-%D8%AD%D8%A7%D9%84%D8%A9-%D9%81%D9%87%D8%AF-%D8%A7%D9%84%D9%85%D9%88%D9%84%D8%AF-%D9%88%D8%AD%D9%82%D9%8A%D9%82%D8%A9-%D8%AE%D8%AF%D9%88%D8%B4-%D8%A7%D9%84%D9%88%D8%AC%D9%87-%D9%85%D9%88%D8%B9%D8%AF-%D9%88%D8%B5%D9%88%D9%84%D9%87-%D8%A5%D9%84%D9%89-%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6/%D9%83%D8%B1%D8%A9-%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9",
    src: "https://cdn.so3ody.com/images/450x250/2024/فهد-المولد1726589472.webp",
    imgAlt: "فهد المولد",
    tag: "كرة سعودية",
    time: "2024-09-15T11:42:00.000Z",
    views: "107",
  },
  {
    title: "13",
    href: "https://www.so3ody.com/news/176349/عاجل-تطور-حالة-فهد-المولد-وحقيقة-خدوش-الوجه-موعد-وصوله-إلى-الرياض/كرة-سعودية",
    src: "https://cdn.so3ody.com/images/450x250/2024/%D9%83%D8%B1%D9%8A%D8%B3%D8%AA%D9%8A%D8%A7%D9%86%D9%88-%D8%B1%D9%88%D9%86%D8%A7%D9%84%D8%AF%D9%88-%D8%A7%D9%84%D9%86%D8%B5%D8%B11712921888.webp",
    imgAlt: "رونالدو",
    tag: "انفوجراف",
    time: "2024-09-19T12:00:00.000Z",
    views: "890",
  },
  {
    title: "14",
    href: "https://www.so3ody.com/%D9%83%D8%B1%D8%A9-%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9",
    src: "https://cdn.so3ody.com/images/450x250/2024/ماكسيمان1715026708.jpg",
    imgAlt: "ماكسيمان",
    tag: "كرة سعودية",
    time: "2024-09-18T20:00:00.000Z",
    views: "237",
  },
  {
    title: "15",
    href: "https://www.so3ody.com/news/176349/%D8%B9%D8%A7%D8%AC%D9%84-%D8%AA%D8%B7%D9%88%D8%B1-%D8%AD%D8%A7%D9%84%D8%A9-%D9%81%D9%87%D8%AF-%D8%A7%D9%84%D9%85%D9%88%D9%84%D8%AF-%D9%88%D8%AD%D9%82%D9%8A%D9%82%D8%A9-%D8%AE%D8%AF%D9%88%D8%B4-%D8%A7%D9%84%D9%88%D8%AC%D9%87-%D9%85%D9%88%D8%B9%D8%AF-%D9%88%D8%B5%D9%88%D9%84%D9%87-%D8%A5%D9%84%D9%89-%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6/%D9%83%D8%B1%D8%A9-%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9",
    src: "https://cdn.so3ody.com/images/450x250/2024/فهد-المولد1726589472.webp",
    imgAlt: "",
    tag: "كرة سعودية",
    time: "2024-09-19T11:42:00.000Z",
    views: "107",
  },
  {
    title: "16",
    href: "https://www.so3ody.com/news/176349/عاجل-تطور-حالة-فهد-المولد-وحقيقة-خدوش-الوجه-موعد-وصوله-إلى-الرياض/كرة-سعودية",
    src: "https://cdn.so3ody.com/images/450x250/2024/%D9%83%D8%B1%D9%8A%D8%B3%D8%AA%D9%8A%D8%A7%D9%86%D9%88-%D8%B1%D9%88%D9%86%D8%A7%D9%84%D8%AF%D9%88-%D8%A7%D9%84%D9%86%D8%B5%D8%B11712921888.webp",
    imgAlt: "رونالدو",
    tag: "انفوجراف",
    time: "2024-09-19T12:00:00.000Z",
    views: "890",
  },
  {
    title: "17",
    href: "https://www.so3ody.com/%D9%83%D8%B1%D8%A9-%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9",
    src: "https://cdn.so3ody.com/images/450x250/2024/ماكسيمان1715026708.jpg",
    imgAlt: "ماكسيمان",
    tag: "كرة سعودية",
    time: "2024-09-18T20:00:00.000Z",
    views: "237",
  },
  {
    title: "18",
    href: "https://www.so3ody.com/news/176349/%D8%B9%D8%A7%D8%AC%D9%84-%D8%AA%D8%B7%D9%88%D8%B1-%D8%AD%D8%A7%D9%84%D8%A9-%D9%81%D9%87%D8%AF-%D8%A7%D9%84%D9%85%D9%88%D9%84%D8%AF-%D9%88%D8%AD%D9%82%D9%8A%D9%82%D8%A9-%D8%AE%D8%AF%D9%88%D8%B4-%D8%A7%D9%84%D9%88%D8%AC%D9%87-%D9%85%D9%88%D8%B9%D8%AF-%D9%88%D8%B5%D9%88%D9%84%D9%87-%D8%A5%D9%84%D9%89-%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6/%D9%83%D8%B1%D8%A9-%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9",
    src: "https://cdn.so3ody.com/images/450x250/2024/فهد-المولد1726589472.webp",
    imgAlt: "",
    tag: "كرة سعودية",
    time: "2024-09-15T11:42:00.000Z",
    views: "107",
  },
  {
    title: "19",
    href: "https://www.so3ody.com/news/176349/عاجل-تطور-حالة-فهد-المولد-وحقيقة-خدوش-الوجه-موعد-وصوله-إلى-الرياض/كرة-سعودية",
    src: "https://cdn.so3ody.com/images/450x250/2024/%D9%83%D8%B1%D9%8A%D8%B3%D8%AA%D9%8A%D8%A7%D9%86%D9%88-%D8%B1%D9%88%D9%86%D8%A7%D9%84%D8%AF%D9%88-%D8%A7%D9%84%D9%86%D8%B5%D8%B11712921888.webp",
    imgAlt: "رونالدو",
    tag: "انفوجراف",
    time: "2024-09-19T12:00:00.000Z",
    views: "890",
  },
  {
    title: "20",
    href: "https://www.so3ody.com/%D9%83%D8%B1%D8%A9-%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9",
    src: "https://cdn.so3ody.com/images/450x250/2024/ماكسيمان1715026708.jpg",
    imgAlt: "ماكسيمان",
    tag: "كرة سعودية",
    time: "2024-09-18T20:00:00.000Z",
    views: "237",
  },
  {
    title: "21",
    href: "https://www.so3ody.com/news/176349/%D8%B9%D8%A7%D8%AC%D9%84-%D8%AA%D8%B7%D9%88%D8%B1-%D8%AD%D8%A7%D9%84%D8%A9-%D9%81%D9%87%D8%AF-%D8%A7%D9%84%D9%85%D9%88%D9%84%D8%AF-%D9%88%D8%AD%D9%82%D9%8A%D9%82%D8%A9-%D8%AE%D8%AF%D9%88%D8%B4-%D8%A7%D9%84%D9%88%D8%AC%D9%87-%D9%85%D9%88%D8%B9%D8%AF-%D9%88%D8%B5%D9%88%D9%84%D9%87-%D8%A5%D9%84%D9%89-%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6/%D9%83%D8%B1%D8%A9-%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9",
    src: "https://cdn.so3ody.com/images/450x250/2024/فهد-المولد1726589472.webp",
    imgAlt: "",
    tag: "كرة سعودية",
    time: "2024-09-19T11:42:00.000Z",
    views: "107",
  },
];

const newsWrapper = document.querySelector(".news-grid");
const newsSkeletons = document.querySelectorAll(".news-grid .skeleton");
const loadMoreBtn = document.getElementById("post-news__load-more-btn");
let paginationCount = 9,
  currentPage = 1;

createNews(0, paginationCount);
loadMoreBtn.addEventListener("click", () => {
  currentPage += 1;

  let start = paginationCount * currentPage - 9,
    end = paginationCount * currentPage;

  if (end > news.length) {
    end = news.length;
    loadMoreBtn.disabled = true;
  }

  createNews(start, end);

  console.log(`currentPage: ${currentPage}`);
});

// clear listeners
window.addEventListener("beforeunload", () => {
  removeAllListeners(loadMoreBtn, "click");
});

// functions
function generateNews(title, src, imgAlt, href, tag, views, time) {
  const graphIcon = `<svg
                            id="Iconly_Bulk_Graph"
                            data-name="Iconly/Bulk/Graph"
                            xmlns="https://www.w3.org/2000/svg"
                            width="19.02"
                            height="19.02"
                            viewBox="0 0 19.02 19.02"
                          >
                            <g id="Graph">
                              <path
                                id="Path"
                                d="M7.753.613a1.008,1.008,0,0,1,.095.313l.265,3.937h0l.131,1.979a2.035,2.035,0,0,0,.095.6.992.992,0,0,0,.956.6l6.331-.414a1.044,1.044,0,0,1,.736.285,1.008,1.008,0,0,1,.3.579l.011.133a8.256,8.256,0,0,1-6.547,7.435A8.422,8.422,0,0,1,1.009,12,7.812,7.812,0,0,1,.061,9.013,5.723,5.723,0,0,1,0,8.075,8.269,8.269,0,0,1,6.642.013,1.038,1.038,0,0,1,7.753.613Z"
                                transform="translate(0 2.769)"
                                fill="#171c19"
                              ></path>
                              <path
                                id="Path-2"
                                data-name="Path"
                                d="M.807,0A8.981,8.981,0,0,1,9.49,7.429l-.007.031h0l-.019.045,0,.124a.761.761,0,0,1-.182.449.787.787,0,0,1-.44.258l-.1.014-7.3.473a.872.872,0,0,1-.666-.216A.84.84,0,0,1,.5,8.1L.006.8a.116.116,0,0,1,0-.076A.746.746,0,0,1,.252.2.775.775,0,0,1,.807,0Z"
                                transform="translate(9.53)"
                                fill="#17a654"
                                opacity="0.4"
                              ></path>
                            </g>
</svg>`;
  const greenSvg = `<svg
                            xmlns="https://www.w3.org/2000/svg"
                            xmlns:xlink="https://www.w3.org/1999/xlink"
                            class="news-grad"
                            width="30"
                            height="15"
                            viewBox="0 0 30 15"
                          >
                            <defs>
                              <linearGradient
                                id="linear-gradient"
                                x1="0.92"
                                y1="0.5"
                                x2="0"
                                y2="0.5"
                                gradientUnits="objectBoundingBox"
                              >
                                <stop offset="0" stop-color="#24a557"></stop>
                                <stop offset="1" stop-color="#bafb3c"></stop>
                              </linearGradient>
                            </defs>
                            <rect
                              id="your_logo_here"
                              data-name="your logo here"
                              width="30"
                              height="15"
                              rx="2"
                              fill="url(#linear-gradient)"
                            ></rect>
</svg>`;

  const date = new Date(time);
  const now = new Date();
  const timeWentBy = Math.floor((now - date) / 1000);
  let timeText = "الآن";
  if (timeWentBy > 60) {
    const minutes = Math.floor(timeWentBy / 60);
    timeText = `منذ ${minutes} ${minutes > 1 ? "دقائق" : "دقيقة"}`;
    if (minutes > 60) {
      const hours = Math.floor(minutes / 60);
      timeText = `منذ ${hours} ${hours > 1 ? "ساعات" : "ساعة"}`;
      if (hours > 24) {
        const days = Math.floor(hours / 24);
        timeText = `منذ ${days} ${days > 1 ? "أيام" : "يوم"}`;
      }
    }
  }

  const newsTemplate = `<figure class="news-card">
              <a
                class="post-news__link"
                target="_blank"
                href="${href}"
                title='${title}'
              >
                <div class="post-news__img">
                  <img
                    width="450"
                    height="250"
                    data-src="${src}"
                    alt="${imgAlt ?? title}"
                    title="${imgAlt ?? title}"
                    data-ll-status="loaded"
                    src="${src}"
                    sizes="(max-width: 640px) 178px, (max-width: 1024px) 300px, (max-width: 1440px) 250px, 450px"
                  />
                </div>
                <figcaption>
                  <span class="post-news__title">
                    ${title}
                  </span>
                  <div class="post-news__footer">
                    <div class="post-news__tag">
                      ${tag === "انفوجراف" ? graphIcon : greenSvg}
                      <p class="post-news__tag-Name">${tag}</p>
                    </div>
  
                    <div class="post-news__info">
                      <span class="post-news__time"> ${timeText} </span>
                      <span class="post-news__views">
                        <svg
                          id="Iconly_Light-outline_Show"
                          data-name="Iconly/Light-outline/Show"
                          xmlns="https://www.w3.org/2000/svg"
                          width="21"
                          height="21"
                          viewBox="0 0 21 21"
                        >
                          <g id="Show" transform="translate(1.79 3.58)">
                            <path
                              id="Show-2"
                              data-name="Show"
                              d="M8.692,14.316c-3.5-.116-6.676-2.585-8.51-6.6L.054,7.424a.665.665,0,0,1,0-.527A12.774,12.774,0,0,1,3.807,1.843,8.357,8.357,0,0,1,8.952,0l.256,0C12.7.121,15.884,2.591,17.718,6.61l.125.28a.667.667,0,0,1,0,.533,12.783,12.783,0,0,1-3.754,5.054,8.357,8.357,0,0,1-5.144,1.843ZM4.771,2.791a11.028,11.028,0,0,0-3.226,4.07l-.14.3.151.323a11.191,11.191,0,0,0,3.025,3.9,7.142,7.142,0,0,0,3.9,1.584l.238.012.23,0,.228,0a7.107,7.107,0,0,0,4.148-1.606,11.336,11.336,0,0,0,3.156-4.2l.009-.022A11.452,11.452,0,0,0,13.43,3.024,7.184,7.184,0,0,0,9.411,1.35l-.238-.012-.214,0A7.005,7.005,0,0,0,4.771,2.791Zm.678,4.37a3.5,3.5,0,1,1,3.5,3.478A3.494,3.494,0,0,1,5.449,7.161Zm1.343,0A2.158,2.158,0,1,0,8.95,5.016,2.154,2.154,0,0,0,6.792,7.161Z"
                              transform="translate(0)"
                              fill="#17a654"
                            ></path>
                          </g>
                        </svg>
  
                        <p class="post-news__views-count">${views}</p>
                      </span>
                    </div>
                  </div>
                </figcaption>
              </a>
</figure>`;

  const parser = new DOMParser();
  const doc = parser.parseFromString(newsTemplate, "text/html");
  return doc.body.firstChild;
}
function createNews(s, e) {
  const newsFragment = document.createDocumentFragment();
  news.slice(s, e).forEach((n) => {
    const newPiece = generateNews(
      n.title,
      n.src,
      n.imgAlt,
      n.href,
      n.tag,
      n.views,
      n.time
    );

    newsFragment.appendChild(newPiece);
  });

  // replace the placeholder with the news
  newsSkeletons.forEach((s) => s.remove());
  newsWrapper.appendChild(newsFragment);
}