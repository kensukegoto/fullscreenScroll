/**
 * スムーススクロール
 */
const paginations = document.querySelectorAll(".pagination a");

paginations.forEach(pn => {
  pn.addEventListener("click", e => {
    e.preventDefault();
    const targetId = e.target.hash;
    const target = document.querySelector(targetId);
    target.scrollIntoView({ behavior: "smooth" });
  });
});

/**
 * Intersection Observer
 */
const sections = document.querySelectorAll(".section");
const observerRoot = document.querySelector(".fullPageScroll");
const options = {
  root: observerRoot,
  rootMargin: "-50% 0px",
  threshold: 0
};
const observer = new IntersectionObserver(doWhenIntersect,options);
sections.forEach(section => {
  observer.observe(section);
});

/**
 * 交差時のコールバック
 * (new IntersectionObserverの第一引数)
 * @param entries - IntersectionObserberEntry 交差時に渡されるオブジェクト
 */
function doWhenIntersect(entries){
  entries.forEach(entry => {
    if(entry.isIntersecting){ // 交差した要素かどうかの判定
      activatePagination(entry.target);
    }
  });
}

/**
 * ページネーションの大きさを変える関数
 * @param element - HTMLElement 交差したスライド
 */
function activatePagination(element){
  const currentActiveIndex = document.querySelector("#pagination .active");
  if(currentActiveIndex !== null){
    currentActiveIndex.classList.remove("active");
  }
  const newActiveIndex = document.querySelector(`a[href="#${element.id}"]`);
  newActiveIndex.classList.add("active");
}