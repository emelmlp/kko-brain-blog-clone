window.addEventListener("load", () => {
  const iconMore = document.querySelector(".icon-more");
  const mbMenu = document.querySelector(".mb-menu");
  const mbInner = document.querySelector(".mb-inner");

  // isCLick 변수 이용해서 사용자 연속 버튼 클릭 막기
  // isClick이 true면 클릭 가능, false면 클릭 불가능
  let isCLick = true;

  iconMore.addEventListener("click", (e) => {
    e.preventDefault(); // a 태그 기본동작 방지

    if (isCLick === false) return;
    isCLick = false;

    // 모바일 메뉴 보이기, 숨기기 기능
    const isOpen = mbMenu.classList.contains("active");
    if (isOpen) {
      // 메뉴가 줄어들고
      mbInner.classList.remove("active");
      iconMore.classList.remove("active");

      // 배경이 사라진다.
      setTimeout(() => {
        mbMenu.classList.remove("active");
        isCLick = true;
      }, 500);
    } else {
      mbMenu.classList.add("active");
      mbInner.classList.add("active");
      iconMore.classList.add("active"); // 아이콘 x로 교체
      isCLick = true;
    }

    window.addEventListener("resize", () => {
      if (innerWidth > 1024) {
        mbMenu.classList.remove("active");
        mbInner.classList.remove("active");
        iconMore.classList.remove("active");
      }
    });
  });
});
